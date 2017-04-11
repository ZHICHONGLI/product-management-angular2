import { Component, OnInit,Input, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
 
  constructor(@Inject('modalService') private mdService,
              public activeModal: NgbActiveModal,
            
  ) { 
  }
    @Input() curPrd 
  private orderq: number;
  ngOnInit() {
    console.log(this.curPrd.Stock);
    const stocklimit: number = this.curPrd.Stock;
    
  }
  addPrd(){
    console.dir(this.curPrd);
    console.log(this.orderq);
    this.activeModal.close();
  }

}
