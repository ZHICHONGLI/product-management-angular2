import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-com',
  templateUrl: './cart-com.component.html',
  styleUrls: ['./cart-com.component.css']
})
export class CartComComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public orderlist=[];
  

  public insert(neworder){
  
    //console.dir(neworder);
    this.orderlist.push(neworder);
    console.dir(this.orderlist);
    
  }

}
