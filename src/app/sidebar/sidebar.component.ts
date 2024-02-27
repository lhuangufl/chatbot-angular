import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false; // Tracks the collapsed state
  showChildSidebar = false;
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed; // Toggle the state
  }


  toggleChildSidebar(): void {
    this.sidebarService.toggleChildSidebar();
  }
}
