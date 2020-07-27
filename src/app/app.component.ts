import { Component, Inject } from '@angular/core';
import { TaskHandlerService } from './service/task-handler.service';
import { AlertService } from './component/alert/alert.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tavisca';

  lists = [];
  addList = false;
  newListName = '';
  connectedTo = ['ToDo', 'Pending'];
  showListNameError: boolean;
  inEdit: boolean;
  editList: any;
  currentTheme: string;
  constructor(@Inject(DOCUMENT) private document, private taskHandlerService: TaskHandlerService, private alertService: AlertService) {
    this.lists = taskHandlerService.getList();
  }
  addNewList() {
    this.addList = true;
    this.newListName = '';
    this.inEdit = false;
  }

  saveNewList(save) {
    this.showListNameError = false;
    if (save) {
      if (!this.newListName) {
        this.showListNameError = true;
        return;
      }
      this.newListName = this.newListName.trim();
      if (this.lists.find(l => l.name === this.newListName.trim())) {
        this.alertService.showAlert(`${this.newListName} is already exist..`);
        return;
      }

      if (this.inEdit) {
        this.editList.name = this.newListName;
        this.addList = false;
        return;
      }
      this.taskHandlerService.addNewList(this.newListName);
      this.connectedTo.push(this.newListName);
      this.newListName = '';
      this.addList = false;
    } else {
      this.newListName = '';
      this.addList = false;
    }
  }

  removeList(list) {
    this.taskHandlerService.removeList(list);
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
  onEdit(list) {
    this.inEdit = true;
    this.editList = list;
    this.newListName = list.name;
    this.addList = true;
  }
}
