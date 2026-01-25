import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-icons-demo',
  standalone: false,
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h2>Material Icons Demo</h2>
          <p>This page demonstrates how to use Material Icons in your application:</p>

          <div class="row">
            <div class="col-md-3 col-sm-6" *ngFor="let icon of icons">
              <div class="icon-card">
                <span class="material-icons">{{ icon.name }}</span>
                <p>{{ icon.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .icon-card {
      text-align: center;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin: 10px;
      background-color: #f9f9f9;
    }

    .material-icons {
      font-size: 48px;
      color: #337ab7;
    }

    p {
      margin-top: 10px;
      font-weight: 500;
    }
  `]
})
export class MaterialIconsDemoComponent {
  icons = [
    { name: 'favorite', label: 'Favorite' },
    { name: 'home', label: 'Home' },
    { name: 'person', label: 'Person' },
    { name: 'settings', label: 'Settings' },
    { name: 'dashboard', label: 'Dashboard' },
    { name: 'notifications', label: 'Notifications' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Phone' }
  ];
}