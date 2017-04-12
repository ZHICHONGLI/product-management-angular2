import { Component, OnInit,Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(@Inject ('cartService') private cartService,
              public activeModal: NgbActiveModal
  ) { }
  public cartList = [];
  ngOnInit() {
    this.cartList = this.cartService.viewCart();
    console.dir(this.cartList);
  }

  editTo(){


    this.activeModal.close('edit');
  }

}
