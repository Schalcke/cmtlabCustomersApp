import { Component, OnInit } from '@angular/core';

import { ProjetI } from '../models/projet.interface';
import { ProjetService } from '../services/projet.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.scss'],
})
export class DetailsProjectComponent implements OnInit {
  project: ProjetI = {
    id: '',
    cstmName: '',
    projectName: '',
    projectDescription: '',
    startDate: new Date(),
    endDate: new Date(),
    projectStatus: ''
    
  }

  projectId = 'null';

  constructor(
    private route: ActivatedRoute, 
    private nav: NavController, 
    private ProjetService: ProjetService,
    private LoadingController: LoadingController
    ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id']; 
    if(this.projectId) {
      this.loadProject();
    }
  }

  async loadProject() {
    const loading = await this.LoadingController.create({
      message: 'Chargement ...'
    });
    await loading.present();
    this.ProjetService.getProject(this.projectId).subscribe(res=> {
      loading.dismiss();
      this.project = res;
    });
  }

  async saveProject() {
    const loading = await this.LoadingController.create({
      message: 'Enregistrement ...'
    });
    await loading.present();
    if(this.projectId) {
      this.ProjetService.updateProject(this.project, this.projectId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/tabs/tab2');
      });
    } else {
      this.ProjetService.addProject(this.project).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/tabs/tab2');
      });
    }
  }

  onRemoveProject(idProject: string) {
    this.ProjetService.removeProject(idProject);
  }

}