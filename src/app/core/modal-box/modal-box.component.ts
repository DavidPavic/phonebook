import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { mockPerson } from '../IPerson';
import { TableComponent } from '../table/table.component';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.sass']
})
export class ModalBoxComponent {

  @ViewChild('AddContactModal', { static: false })
  modal!: ElementRef;
  
  OpenModalBox() {
    this.modal.nativeElement.st
  }

  CloseModalBox() {
    this.modal.nativeElement.style.display = 'none';
  }

}
