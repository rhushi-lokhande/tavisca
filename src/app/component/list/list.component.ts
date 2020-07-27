import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskHandlerService } from 'src/app/service/task-handler.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list;
  @Input() connectedTo;
  @Output() removeList = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  addCard = false;
  removeListModal = false;
  cardTitle = '';
  showCardError: boolean;
  inEdit: boolean;
  editCard: any;
  constructor(private taskHandlerService: TaskHandlerService) { }

  ngOnInit(): void {
  }
  addNewCard() {
    this.cardTitle = '';
    this.inEdit = false;
    this.addCard = true;
  }
  saveNewCard(save) {
    this.showCardError = false;
    if (save) {
      if (!this.cardTitle) {
        this.showCardError = true;
        return;
      }

      if (this.inEdit) {
        this.editCard.title = this.cardTitle;
        this.addCard = false;
        return;
      }
      this.list.cards.push({
        title: this.cardTitle
      });
      this.cardTitle = '';
      this.addCard = false;
    } else {
      this.cardTitle = '';
      this.addCard = false;
    }
  }
  drop(e) {
    console.log(e);
    if (e.previousContainer === e.container) {
      this.taskHandlerService.moveCardInList(e.container.data, e.previousIndex, e.currentIndex);
    } else {
      this.taskHandlerService.moveCardFromOneLitToOther(e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex);
    }
  }

  removeListClick() {
    this.removeListModal = true;
  }
  removeListConform(conform) {
    this.removeListModal = false;
    if (conform) {
      this.removeList.emit(this.list);
    }
  }

  removeCard(card) {
    this.list.cards.splice(this.list.cards.indexOf(card), 1);
  }

  editListName() {
    this.onEdit.emit(this.list);
  }
  onEditCard(card) {
    this.inEdit = true;
    this.cardTitle = card.title;
    this.editCard = card;
    this.addCard = true;
  }
}
