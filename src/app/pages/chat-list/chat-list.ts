import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { chatsSignal } from '../../core/store/chat-store/chat-store';

@Component({
  standalone: true,
  selector: 'app-chat-list',
  imports: [RouterLink],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatListComponent {
  chats = chatsSignal;
}
