import {
  Component,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserService } from '../../core/services/user.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'user-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
  ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- кнопка закрытия  -->
    <button
      mat-icon-button
      aria-label="Close dialog"
      class="absolute top-4 right-4"
      (click)="dialog.close()"
    >
      <mat-icon>close</mat-icon>
    </button>

    <!-- основной контент диалога -->
    <article class="relative p-6 space-y-4">
      <header class="space-y-1">
        <h2 class="text-2xl font-semibold">{{ u?.name }}</h2>
        <a
          class="text-primary underline text-sm"
          [href]="'mailto:' + u?.email"
          >{{ u?.email }}</a
        >
      </header>

      <mat-divider />

      <!-- Address -->
      <section class="space-y-1">
        <h3 class="font-medium">Address</h3>
        <p>
          {{ u?.address?.street }}, {{ u?.address?.city }},
          {{ u?.address?.zipcode }}
        </p>
        <a
          class="inline-flex items-center gap-1 text-primary underline text-sm"
          [href]="mapLink"
          target="_blank"
        >
          <mat-icon inline size="16">pin_drop</mat-icon>
          View on map
        </a>
      </section>

      <mat-divider />

      <!-- Contact -->
      <section class="space-y-1">
        <h3 class="font-medium">Contact</h3>
        <p><b>Phone:</b> {{ u?.phone }}</p>
        <p>
          <b>Website:</b>
          <a
            class="underline"
            [href]="'http://' + u?.website"
            target="_blank"
            >{{ u?.website }}</a
          >
        </p>
      </section>

      <mat-divider />

      <!-- Company -->
      <section class="space-y-1">
        <h3 class="font-medium">Company</h3>
        <p><b>Name:</b> {{ u?.company?.name }}</p>
        <p><b>Catchphrase:</b> {{ u?.company?.catchPhrase }}</p>
        <p><b>Business:</b> {{ u?.company?.bs }}</p>
      </section>
    </article>
  `,
})
export class UserModalComponent {
  private readonly data = inject<{ id: number }>(MAT_DIALOG_DATA);
  private readonly users = inject(UserService);
  readonly dialog = inject(MatDialogRef<UserModalComponent>);

  u = this.users.byId(this.data.id);

  get mapLink(): string {
    if (!this.u) return '';
    const { lat, lng } = this.u.address.geo;
    return `https://www.google.com/maps?q=${lat},${lng}`;
  }
}