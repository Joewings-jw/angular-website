import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  @Input() element_id!: string
  @Input() closeOnBodyClick!: string
  @ViewChild('modal_container') container_el! : ElementRef;
  


  constructor() { }


  close_modal(){
    if(this.closeOnBodyClick.toLocaleLowerCase() === 'true'){
        this.container_el.nativeElement.modal('hide')
    }
  }
}
