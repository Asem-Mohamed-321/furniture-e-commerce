import { HttpClient } from '@angular/common/http';
import { Injectable , Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  @Output() cartCountChanged = new EventEmitter<number>();
  private URL="http://localhost:3000/cartItems"

  constructor(private http : HttpClient) { 
    this.updateCartCount();
  }

   updateCartCount() {
    this.getAllItems().subscribe((items: any[]) => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCountChanged.emit(total);
  });
  }

  getAllItems():Observable<any[]>{
    return this.http.get<any[]>(this.URL);
  }

  AddToCart(item:any){
    this.http.get(this.URL).subscribe({
      next: (userCart:any)=>{
        const existingItem = userCart.find((ci :any) => ci.id === item.id);

        if (existingItem) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        this.http.put(this.URL+"/"+existingItem.id, updatedItem).subscribe({
          next: () => {
            console.log('Item updated')
            this.updateCartCount();
          },
          error: (err) => console.error('Failed to update item', err)
        });
      } else {
        const newItem = { ...item, quantity: 1 };
        this.http.post(this.URL, newItem).subscribe({
          next: () =>{ 
            console.log('Item added')
            this.updateCartCount();
          },
          error: (err) => console.error(err)
        });
      }
    },
    error: (err) => console.error( err)

    })
    // this.http.post(this.URL,item)
  }

  decreaseItem(item : any){
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    return this.http.put(`http://localhost:3000/cartItems/${item.id}`, updatedItem);
  }

  increaseItem(item : any){
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    
    return this.http.put(this.URL+"/"+item.id, updatedItem);
  }

  removeItem(item : any){
    console.log(item.id)
    return this.http.delete(this.URL+"/"+item.id);
  }
}
