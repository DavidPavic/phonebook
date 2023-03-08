import { Injectable } from '@angular/core';
import { mockPerson } from '../IPerson';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  DeleteErrorMessage(msg: string) {
    return msg;
  }
}
