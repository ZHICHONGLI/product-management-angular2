import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(@Inject('titleService')private titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Product Management");
  }

}
