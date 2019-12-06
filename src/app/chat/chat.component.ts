import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string;

  messages: message[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getChat().subscribe((messages: message[]) => this.messages = messages)
  }

  addMessage(lmessage) {

    this.chatService.addChat(lmessage).subscribe();
  }



}
