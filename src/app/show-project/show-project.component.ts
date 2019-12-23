import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProjetService } from '../services/projet.service';


@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.scss'],
})
export class ShowProjectComponent implements OnInit {

  
  constructor(public PopoverController: PopoverController) { }

  ngOnInit() {}

  addProject() {
    window.open('')
    this.PopoverController.dismiss();
  }

  close() {
    this.PopoverController.dismiss();
  }

}
