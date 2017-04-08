import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 // public showBtn: boolean = true;
 
  constructor(@Inject(DOCUMENT)public document: any,
             // @Inject('titleService') public titleService
  ){   //private document: Document ; when using --aot, Document cannot be resolved 
              
  }

  ngOnInit() {
   console.log("app component");
    
  }

  public showBtn:boolean = false;
  @HostListener('window:scroll',[])
  onWindowScroll(){
    let offsetValue = this.document.body.scrollTop;
    if(offsetValue > 200){
      //this.document.getElementById('topbtn').style.display = 'block';
      this.showBtn = true;
    }else if(offsetValue < 200){
      //this.document.getElementById('topbtn').style.display = 'none';
      this.showBtn = false;
    }
  }


  goTop(){
    window.scrollTo(20, 0);
  }
}
