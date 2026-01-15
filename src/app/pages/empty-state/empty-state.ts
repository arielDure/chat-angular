import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="empty">
      <h2>Seleccioná un chat</h2>
      <p>Elegí un contacto para empezar a conversar</p>
    </div>
  `,
  styles: [`
    .empty {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #777;
    }
  `]
})
export class EmptyStateComponent {}
