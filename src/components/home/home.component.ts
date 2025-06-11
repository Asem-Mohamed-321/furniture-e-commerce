import { CommonModule } from '@angular/common';
import { Component , } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlidingPromotionsComponent } from '../sliding-promotions/sliding-promotions.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,SlidingPromotionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
