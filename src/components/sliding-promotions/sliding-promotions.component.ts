import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sliding-promotions',
  imports: [CommonModule],
  templateUrl: './sliding-promotions.component.html',
  styleUrl: './sliding-promotions.component.css'
})
export class SlidingPromotionsComponent {
products = [
  {
    image: 'assets/2.png',
    title: 'Modern Wooden Chair',
    desc: 'Comfortable and stylish chair made of premium wood.'
  },
  {
    image: 'assets/home.webp',
    title: 'Elegant Sofa Set',
    desc: 'A perfect addition to your living room with luxurious comfort.'
  },
  {
    image: 'assets/235.jpg',
    title: 'Minimalist Lamp',
    desc: 'Brighten your space with this sleek, modern design.'
  }
];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // Slide every 3 seconds
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }

   onHover() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  onLeave() {
    this.startAutoSlide();
  }
}
