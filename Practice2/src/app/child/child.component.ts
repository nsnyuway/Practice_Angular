import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: false
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  childMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.currentMessage.subscribe(message => {
      this.childMessage = message;
    });
  }

  sendMessage() {
    this.messageEvent.emit('Hello from Child Component');
  }
}
                          
