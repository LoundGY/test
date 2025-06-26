import { Component } from '@angular/core';
import { UserTableComponent } from './user-table.component';

@Component({
  selector: 'users-feature',
  standalone: true,
  imports: [UserTableComponent],
  template: `
    <section class="p-4 max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold mb-6">User Directory</h1>
      <user-table />
    </section>
  `,
})
export class UsersFeature {}
