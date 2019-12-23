import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { PopoverAddCustomerComponent, } from '../popover-add-customer/popover-add-customer.component';
import { ShowProjectComponent } from '../show-project/show-project.component';

/*
@Component({
  selector: 'app-popover-add-customer',
  templateUrl: '../popover-add-customer/popover-add-customer.component.html',
  styleUrls: ['../popover-add-customer/popover-add-customer.component.scss'],
})
*/

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  entryComponents: [PopoverAddCustomerComponent, ShowProjectComponent],
  declarations: [Tab2Page, PopoverAddCustomerComponent, ShowProjectComponent]
})
export class Tab2PageModule {}
