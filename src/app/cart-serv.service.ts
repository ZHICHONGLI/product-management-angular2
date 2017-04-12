import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/subject';

@Injectable()
export class CartServService {
  public orderList = [];
  public totalCount: number = 0;
  constructor() { }
  insert(item){
    this.orderList = [... this.orderList,item];
    console.dir(this.orderList);
    this.totalCount = this.totalItem();
    console.log(this.totalCount);
    this.totalChange.next(this.totalCount);
  }
  totalChange: Subject<any> = new Subject<any>();
  totalItem():number{
    let totalCount:number=0;
    for(let i=0; i<this.orderList.length; i++){
      totalCount += this.orderList[i].qty;
      
    }
    return totalCount;
  }
}
