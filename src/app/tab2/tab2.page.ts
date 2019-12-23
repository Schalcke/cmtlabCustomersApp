import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { PopoverAddCustomerComponent, } from '../popover-add-customer/popover-add-customer.component';
import { ShowProjectComponent } from '../show-project/show-project.component';
import { ProjetI } from '../models/projet.interface';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  projects: ProjetI[]; 

  constructor(public popoverController :PopoverController, private projetService:ProjetService) {
    
    console.log(projetService.getProject);  //  projectId

    /*
    getProject(id: string) {
        return this.projectsCollection.doc<ProjetI>(id).valueChanges();
    }
    */
  }
  /*
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverAddCustomerComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  */

 async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ShowProjectComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
    this.projetService.getProjects().subscribe(res=> this.projects = res);
  }
  

// ShowProjectComponent

  /*
  getColor() {
    if () {  // project.projectStatus
      return 'green';
    } else if() {
      return 'red';
    }
  }
  */
}

