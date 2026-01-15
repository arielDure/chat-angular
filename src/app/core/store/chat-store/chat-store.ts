import { signal } from '@angular/core';
import { Chat } from '../../model/chat-model';
import { Message } from '../../model/message-model';

export const chatsSignal = signal<Chat[]>([
  {
    id: 1,
    name: 'Juan',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
  },
]);

export const messagesSignal = signal<Record<number, Message[]>>({
  1: [
    { from: 'app', text: 'Hola 👋', date: new Date() }
  ]
});

export function addChat(chat: Chat) {
  chatsSignal.update(chats => [...chats, chat]);
}

export function addMessage(chatId: number, message: Message) {
  messagesSignal.update(msgs => ({
    ...msgs,
    [chatId]: [...(msgs[chatId] || []), message]
  }));
}
