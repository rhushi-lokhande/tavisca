import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show = false;
  @Input() title;
  @Input() alert = false;
  @Output() onSave = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  save(status) {
    this.onSave.emit(status);
    // this.show = false;
  }
}
