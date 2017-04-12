import { Component, OnInit,Input, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComComponent } from '../cart-com/cart-com.component'


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  providers:[CartComComponent]
})
export class AddToCartComponent implements OnInit {
 
  constructor(@Inject('modalService') private mdService,
              public activeModal: NgbActiveModal,
              private cart: CartComComponent
            
  ) { 
  }
    @Input() curPrd 
  private orderq: number = 1;
  ngOnInit() {
    console.log(this.curPrd.Stock);
    const stocklimit: number = this.curPrd.Stock;
    
  }
 
  addPrd(){
    if(this.orderq > this.curPrd.Stock|| this.orderq <=0){
      alert('Invalid Order');
      return
    }

    
    let neworder = new itemSet(this.curPrd, this.orderq);
    this.cart.insert(neworder);
    //console.dir(neworder);
    this.activeModal.close();
  }

}

class itemSet{
  product: any;
  qty: number;
  constructor(prd, qty){
    this.product = prd;
    this.qty = qty;
  }
}
