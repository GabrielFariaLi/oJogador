import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { StaticDataService } from '../../services/staticData.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  template: `<div id="mainContainerNavbar">
    <div class="sidebar" [ngClass]="{ closed: !isSideBarOpen }">
      <!-- Sidebar content goes here -->
      <button
        (click)="toggleSidebar()"
        mat-icon-button
        class="mt-2 ml-4 example-icon"
        aria-label="Example icon-button with menu icon"
      >
        <mat-icon>close</mat-icon>
      </button>

      <div class="linha">
        <span class="material-symbols-outlined"> play_circle </span>
        <span>Quem é oJogador?</span>
      </div>
      <div class="linha">
        <span class="material-symbols-outlined"> history </span>
        <span>Jogos anteriores</span>
      </div>
    </div>
    <mat-toolbar>
      <button
        (click)="toggleSidebar()"
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with menu icon"
      >
        <mat-icon>menu</mat-icon>
      </button>

      <span style="color:var(--color-text)">oJogador</span>
      <span class="example-spacer"></span>
      <!-- Rounded switch -->
      <span>
        <label class="switch">
          <input
            (ngModelChange)="changeTheme(!!$event ? 'dark' : 'light')"
            [(ngModel)]="selectedTheme"
            type="checkbox"
          />
          <span class="slider round"></span> </label
      ></span>
      <!-- <button
        mat-icon-button
        class="example-icon"
        aria-label="Example icon-button with share icon"
      >
        <mat-icon>share</mat-icon>
      </button> -->
    </mat-toolbar>
  </div>`,
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) {}
  selectedTheme: 'light' | 'dark' = 'dark';
  isSideBarOpen = false;

  changeTheme(theme: 'light' | 'dark') {
    // Remove existing theme classes from the body
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');

    // Add the appropriate theme class to the body
    if (theme === 'light') {
      this.renderer.addClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  toggleSidebar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
