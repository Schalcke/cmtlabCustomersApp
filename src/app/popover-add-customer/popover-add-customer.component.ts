import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-add-customer',
  templateUrl: './popover-add-customer.component.html',
  styleUrls: ['./popover-add-customer.component.scss'],
})
export class PopoverAddCustomerComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  doc() {
    window.open('')
    this.popoverController.dismiss();
  }

  close() {
    this.popoverController.dismiss();
  }

}

export class HomePage {
  
}
