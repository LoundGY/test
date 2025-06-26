import { Component } from '@angular/core';
import { UsersFeature } from './features/users/users.feature';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersFeature],
  template: `
    <users-feature />
  `,
})
export class AppComponent { }
