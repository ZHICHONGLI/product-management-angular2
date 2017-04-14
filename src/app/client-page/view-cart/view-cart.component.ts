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
  public cartList = this.cartService.viewCart();
  public precart;
  ngOnInit() {
    this.cartList = this.cartService.viewCart();
    this.precart = this.cartList.map(x => Object.assign({}, x));
    console.dir(this.cartList);
  }
  editTo(){    //edit issue: two-way data binding makes edit applied to orderList in service automatically. Using backend DB can void 
// push precart to cartservice   

}
  orderPlace(){
      alert("UNAVAILABLE NOW");
     this.activeModal.close('edit');
  }

  closeCart(){
    this.cartList = this.cartService.viewCart();
    this.activeModal.close('close');
  }

  clearCart(){
    this.cartService.emptyCart();
    this.precart = [];
  }

}
