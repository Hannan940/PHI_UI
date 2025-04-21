import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileProcessorComponent } from './file-processor/file-processor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FileProcessorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'phi_ui';
}
