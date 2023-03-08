import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { mockPerson } from '../IPerson';
import { mockData } from '../mockData';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  mockData: mockPerson[] = [];

  constructor() { }

  getData(): mockPerson[] {
    return mockData;
  }
}