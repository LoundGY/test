import { Component, inject, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { StopPropagationDirective } from '../../shared/directives/stop-propagation.directive';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from './user-modal.component';

@Component({
  selector: 'user-table',
  standalone: true,
  imports: [StopPropagationDirective],
  template: `
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm">
        <thead>
          <tr class="border-b">
            <th class="px-4 py-2 text-left">Name / Email</th>
            <th class="px-4 py-2 hidden md:table-cell">Address</th>
            <th class="px-4 py-2">Phone</th>
            <th class="px-4 py-2">Website</th>
            <th class="px-4 py-2 hidden sm:table-cell">Company</th>
            <th class="px-4 py-2 w-12"></th>
          </tr>
        </thead>
        <tbody>
          @for (user of users(); track user.id) {
            <tr class="hover:bg-gray-50 cursor-pointer" (click)="open(user.id)">
              <td class="px-4 py-3">
                <div class="font-medium">{{ user.name }}</div>
                <div class="text-xs text-gray-500">{{ user.email }}</div>
              </td>
              <td class="px-4 py-3 hidden md:table-cell">{{ user.address.city }}</td>
              <td class="px-4 py-3">{{ user.phone }}</td>
              <td class="px-4 py-3">
                <a href="http://{{ user.website }}" target="_blank" class="underline text-blue-600" stopPropagation>
                  {{ user.website }}
                </a>
              </td>
              <td class="px-4 py-3 hidden sm:table-cell">{{ user.company.name }}</td>
              <td class="px-2 py-3">
                <button class="text-red-600" (click)="delete(user.id)" stopPropagation aria-label="Delete user">
                  🗑
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class UserTableComponent {
  private readonly usersSvc = inject(UserService);
  private readonly dialog = inject(MatDialog);

  users = this.usersSvc.users;

  delete(id: number) {
    this.usersSvc.delete(id);
  }

  open(id: number) {
    this.dialog.open(UserModalComponent, { data: { id } });
  }
}
