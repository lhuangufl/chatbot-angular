import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private showChildSidebar = new BehaviorSubject<boolean>(false);
  currentChildSidebarState = this.showChildSidebar.asObservable();

  constructor() { }

  toggleChildSidebar(): void {
    this.showChildSidebar.next(!this.showChildSidebar.value);
  }
}
