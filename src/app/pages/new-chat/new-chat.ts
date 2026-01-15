import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addChat } from '../../core/store/chat.store';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-chat.html',
})
export class NewChatComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  create() {
    if (this.form.invalid) return;

    addChat({
      id: Date.now(),
      name: this.form.value.name!,
      avatar: 'https://i.pravatar.cc/150',
      status: 'offline',
    });

    this.router.navigate(['/chats']);
  }
}
