import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})

export class ParentComponent implements OnInit {
  parentMessage: string = 'Hello from Parent Component';
  receivedMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.currentMessage.subscribe(message => {
      this.parentMessage = message;
    });
  }

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
  
  updateMessage() {
    // this.messageService.changeMessage(this.parentMessage);
    this.parentMessage = 'Niloni';
  }
}

