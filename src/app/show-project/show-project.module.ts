import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowProjectComponent } from './show-project.component';
import { Tab2Page } from '../tab2/tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShowProjectComponent }])
  ],
  declarations: [ShowProjectComponent]
})
export class ShowProjectComponentModule {}
