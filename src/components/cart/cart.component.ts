import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // cartItems = [
  //   {
  //   id : 9,
  //   image : 'assets/chairs/4.jpg',
  //   desc: "Long legs chair",
  //   price: "$129.99",
  //   reviews: 600,
  //   starts: 5,
  //   cat: "chair"
  // },
  // {
  //   id : 6,
  //   image : 'assets/chairs/1.jpg',
  //   desc: "Black rigid chair",
  //   price: "$129.99",
  //   reviews: 600,
  //   starts: 5,
  //   cat: "chair"
  // },
  // ]
  constructor(private cartService : CartService){}
  public cartItems: any ; 
  
  
  
  ngOnInit(){
    this.cartService.getAllItems().subscribe({
      next: (data)=>{this.cartItems=data},
      error: (err)=>{console.log(err)}
    })
  }


  getOriginalPrice(): number {
  let total = 0;

  for (let i = 0; i < this.cartItems.length; i++) {
    const item = this.cartItems[i];
    const price = parseFloat(item.price.replace('$', ''));
    total += price * item.quantity;
  }

  return total;
}
getstorePickUp(): number {
 if (!this.cartItems) return 0;
  
  for (let i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].quantity > 0) {
      return 20.00;
    }
  }
  return 0.00;}
  getTotalPrice(): number {
      return this.getOriginalPrice()+this.getstorePickUp();
  }


  decreaseQuantity(item : any){
    if (item.quantity > 0) {
      this.cartService.decreaseItem(item).subscribe({
        next: () => {
          item.quantity--
          this.cartService.updateCartCount()

        },
        error: (err: any) => console.error(err)
      });
    }
  }

  increaseQuantity(item : any){
      this.cartService.increaseItem(item).subscribe({
        next: () => {
          item.quantity++
          this.cartService.updateCartCount()
        },
        error: (err: any) => console.error(err)
      });
  }

  removeItem(item : any){
    this.cartService.removeItem(item).subscribe({
    next: () => {
      this.cartItems = this.cartItems.filter((ci:any) => ci.id !== item.id);
      this.cartService.updateCartCount()

    },
    error: err => console.error("Failed to remove item:", err)
  });
  }
}
