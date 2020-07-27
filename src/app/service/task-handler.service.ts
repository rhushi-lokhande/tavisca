import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskHandlerService {
  private lists = [{
    name: 'test',
    cards: [{
      title: 'test'
    }]
  }];
  constructor() { }

  getList() {
    return this.lists;
  }

  addNewList(listName: string) {
    this.lists.push({
      name: listName,
      cards: []
    });
  }
  removeList(list) {
    this.lists.splice(this.lists.indexOf(list), 1);
  }

  moveCardInList(data, previousIndex, currentIndex) {
    const temp = data[previousIndex];
    data[previousIndex] = data[currentIndex];
    data[currentIndex] = temp;
  }

  moveCardFromOneLitToOther(preData, currData, previousIndex, currentIndex) {
    const temp = preData.splice(previousIndex, 1)[0];
    currData.splice(currentIndex, 0, temp);
  }
}
