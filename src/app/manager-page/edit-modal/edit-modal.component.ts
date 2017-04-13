import { Component, OnInit, Inject, Input} from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
@Input() curPrd;
  constructor(@Inject('modalService') private mdService,
              public activeModal: NgbActiveModal,
  ) { }
  //private prdobj = { ...this.curPrd };
  //prdobj= Object.assign({}, this.curPrd);
  //public prdobj = this.curPrd;
  private prdobj;
  //prevate this.prdobj = this.curPrd;
  ngOnInit() {
this.prdobj = Object.assign({},this.curPrd);
  }
  

  editTo(){
    //console.log(this.prdobj);
    this.mdService.editComfirm(this.prdobj);
    this.activeModal.close();
  }
  close(){
this.curPrd = this.prdobj;
    this.activeModal.close();
  }

}
