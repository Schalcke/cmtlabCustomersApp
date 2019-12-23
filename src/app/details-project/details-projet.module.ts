import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsProjectComponent } from './details-project.component';
import { Tab2Page } from '../tab2/tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DetailsProjectComponent }])
  ],
  declarations: [DetailsProjectComponent]
})
export class DetailsProjectComponentModule {}
