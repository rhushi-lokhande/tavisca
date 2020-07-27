import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { CardComponent } from './component/card/card.component';
import { ModalComponent } from './component/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskHandlerService } from './service/task-handler.service';
import { AlertComponent } from './component/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [TaskHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
