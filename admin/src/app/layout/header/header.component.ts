import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchQuery: string = '';

  performSearch(): void {
    
    console.log('Performing search for:', this.searchQuery);
    // You can use the searchQuery value to perform a search operation, e.g., call an API or filter data.
  }
}
