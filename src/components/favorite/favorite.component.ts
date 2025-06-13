import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { Product } from '../../app/models/product.model';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  constructor(private favService : FavouritesService){}
  public favouriteItems: Product[] | null = [];
  public isLoading = true;

  ngOnInit(){
    this.favService.getAllItems().subscribe({
      next: (data :Product[] | null)=>{this.favouriteItems=data;this.isLoading = false;
},
      error: (err)=>{console.log(err);this.isLoading = true;
}
    })
  }
  removeItem(item:Product){
    console.log(item)
    this.favService.removeFromFav(item);
    if(this.favouriteItems){
      this.favouriteItems = this.favouriteItems.filter((f:Product) => f.id !== item.id)
    }
    console.log(this.favouriteItems)
  }
}
