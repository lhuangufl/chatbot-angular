import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../sidebar.service';
@Component({
  selector: 'app-childsidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './childsidebar.component.html',
  styleUrls: ['./childsidebar.component.css']
})
export class ChildSidebarComponent implements OnInit, OnDestroy {
  showSidebar: boolean = false;
  private subscription: Subscription;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.subscription = this.sidebarService.currentChildSidebarState.subscribe(show => {
      this.showSidebar = show;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
