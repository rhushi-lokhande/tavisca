import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Output() removeCard = new EventEmitter();
  @Output() editCard = new EventEmitter();
  removeCardModal = false;
  constructor() { }

  ngOnInit(): void {
  }
  removeCardClick() {
    this.removeCardModal = true;
  }
  removeCardConform(conform) {
    this.removeCardModal = false;
    if (conform) {
      this.removeCard.emit(this.card);
    }
  }
  editCardClick(card) {
    this.editCard.emit(card);
  }
}
