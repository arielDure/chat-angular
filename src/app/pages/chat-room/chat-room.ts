import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { addMessage, messagesSignal } from '../../core/store/chat-store/chat-store';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.css',
})
export class ChatRoomComponent implements OnInit {

  chatId!: number;
  messages = messagesSignal;

  messageControl = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.chatId = Number(this.route.snapshot.paramMap.get('id'));
  }

  send() {
    if (this.messageControl.invalid) return;

    addMessage(this.chatId, {
      from: 'user',
      text: this.messageControl.value!,
      date: new Date(),
    });

    this.messageControl.reset();

    setTimeout(() => {
      addMessage(this.chatId, {
        from: 'app',
        text: 'Respuesta automática 🤖',
        date: new Date(),
      });
    }, 1000);
  }
}
