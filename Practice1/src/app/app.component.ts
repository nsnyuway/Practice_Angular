import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterModule } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-root',
  // imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Practice1';
}
