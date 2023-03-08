import { Component, OnInit, ViewChild } from '@angular/core';
import { mockPerson } from '../IPerson';
import { TableService } from '../services/table.service';
import { __values } from 'tslib';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  
  mockPersonData: mockPerson[] = [];
  public searchInput!: string;
  addPersonForm!: FormGroup;
  message!: string;
  selectedDeletePerson!: mockPerson;
  selectedPerson!: mockPerson;
  editPersonActive!: boolean;
  deletePersonActive!: boolean;
  
  constructor (private tableService: TableService, private formBuilder: FormBuilder, private messageService: MessageService) {}

  ngOnInit(): void {
    this.InitializeForm();
    this.GetModifiedMockData(5);
  }

  GetModifiedMockData(num: number) {
    this.mockPersonData = this.tableService.getData().slice(0, num);
  }

  changeRowSize(event: any) {
    const num = +event?.target?.value;    
    this.mockPersonData = this.tableService.getData().slice(0, num);
  }

  // SORT DATA BASED ON SELECT ELEMENT VALUE
  SortData(event: any) {
    const sex = event?.target?.value;

    if (sex == "male" || sex == "female") {
      this.mockPersonData = this.tableService.getData().filter(person => person.sex == sex);
    }
    else {
      this.mockPersonData = this.tableService.getData().sort((a,b)=> (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0); 
    }
    return this.mockPersonData;
  }

  // GET VALUE FROM SELECTED PERSON
  EditPerson(person: mockPerson) {
    this.selectedPerson = person;
    this.editPersonActive = true;
  }

  CloseEditForm() {
    this.editPersonActive = false;
  }

  // REMOVE SELECTED PERSON FROM ARRAY AND VIEW
  DeletePerson(person: mockPerson) {
    this.selectedDeletePerson = person;
    this.message = this.messageService.DeleteErrorMessage(`Klikom na gumb 'Potvrdi' ćete obrisati osobu ${this.selectedDeletePerson.name} ${this.selectedDeletePerson.lastName}`);
    this.mockPersonData.splice(this.mockPersonData.indexOf(this.selectedDeletePerson), 1);
    this.deletePersonActive = false;
  }

  DeletePersonConfirm() {
    this.deletePersonActive = true;
  }

  InitializeForm() {
    this.addPersonForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      sex: ['male', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(9)]],
      mail: ['', [Validators.required, Validators.email]],
      note: ['']
    })
  }

  // STORE INPUT VALUES INTO NEW OBJECT, PUSH OBJECT INTO ARRAY AND VIEW
  AddPerson(personName: string, personLastName: string, personSex: string, personPhone: string, personMail: string, personNote: string) {
    const newPerson: mockPerson = {
      ID: this.mockPersonData.length + 1,
      name: personName,
      lastName: personLastName,
      sex: personSex,
      phoneNumber: personPhone,
      email: personMail,
      note: personNote
    }

    this.mockPersonData.push(newPerson);
  }
}