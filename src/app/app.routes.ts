import { Routes } from '@angular/router';
import { ChatListComponent } from './pages/chat-list/chat-list';
import { ChatRoomComponent } from './pages/chat-room/chat-room';
import { NewChatComponent } from './pages/new-chat/new-chat';

export const routes: Routes = [
  { path: 'chats', component: ChatListComponent },
  { path: 'chats/:id', component: ChatRoomComponent },
  { path: 'nuevo', component: NewChatComponent },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }
];
