import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // public showBtn: boolean = true;

  constructor(@Inject(DOCUMENT)private document: Document){

  }
  @HostListener('window:scroll',[])
  onWindowScroll(){
    let offsetValue = this.document.body.scrollTop;
    if(offsetValue > 200){
      this.document.getElementById('topbtn').style.display = 'block';
      
    }else if(offsetValue < 200){
      this.document.getElementById('topbtn').style.display = 'none';
    }
  }

  goTop(){
    window.scrollTo(20, 0);
  }
}
