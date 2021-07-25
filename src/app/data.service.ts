import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  article: any;
  userDetails: any;
  doSignup: boolean = false;
  constructor() { }
}


