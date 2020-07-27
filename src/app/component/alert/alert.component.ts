import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() message;
  show = false;
  constructor(private alertService: AlertService) {
    this.alertService.onAlert().subscribe(message => {
      this.message = message;
      this.show = true;
    });
  }

  ngOnInit(): void {

  }

}
