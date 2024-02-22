import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { ChatComponent } from './chat/chat.component'; // Import if using ChatComponent within AppComponent
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule here
    ChatComponent, // Add ChatComponent here if used in the template
    SidebarComponent
  ]
})
export class AppComponent {
  // Your component logic
}
