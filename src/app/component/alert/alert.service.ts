import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject();
  constructor() { }
  showAlert(message) {
    this.alertSubject.next(message);
  }

  onAlert() {
    return this.alertSubject;
  }

}
