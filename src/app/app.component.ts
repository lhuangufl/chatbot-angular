import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule here
    RouterModule,
    SidebarComponent
  ]
})
export class AppComponent {
  // Your component logic
}
