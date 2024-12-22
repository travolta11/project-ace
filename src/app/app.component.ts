import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ace-front';

  javaClass: string = '';

  onSubmit() {
    console.log('Entered Java Class:', this.javaClass);
  }
}
