import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favorite',
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  constructor(private favService : FavouritesService){}
  public favouriteItems: any[] = [];
  public isLoading = true;

  ngOnInit(){
    this.favService.getAllItems().subscribe({
      next: (data :any)=>{this.favouriteItems=data;this.isLoading = false;
},
      error: (err)=>{console.log(err);this.isLoading = true;
}
    })
  }
  removeItem(item:any){
    console.log(item)
    this.favService.removeFromFav(item);
    this.favouriteItems = this.favouriteItems.filter((f:any) => f.id !== item.id)
    console.log(this.favouriteItems)
  }
}
