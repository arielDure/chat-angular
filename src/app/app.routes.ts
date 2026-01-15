import { Routes } from '@angular/router';
import { ChatRoomComponent } from './pages/chat-room/chat-room';
import { NewChatComponent } from './pages/new-chat/new-chat';

export const routes: Routes = [
  { path: 'chats/:id', component: ChatRoomComponent },
  { path: 'nuevo', component: NewChatComponent },
  {
    path: 'chats',
    loadComponent: () =>
      import('./pages/empty-state/empty-state')
        .then(m => m.EmptyStateComponent)
  },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }
];
