import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Profile } from '../../app/models/profile.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  cartCount = 0;


  isMenuOpen = false;

  toggleMenu() {
    console.log("toggle")
    this.isMenuOpen = !this.isMenuOpen;
  }


  constructor(private profileService : ProfileService , private cartService: CartService){}
  profileData : Profile |null = null

  ngOnInit(){
    this.profileService.getUser(1).subscribe({
      next:(data:Profile)=>{
        this.profileData=data;
      },
      error:(err)=>console.log(err)
    })
    this.cartService.cartCountChanged.subscribe(count => {
      this.cartCount = count;
    });
    this.cartService.updateCartCount();
  }
}
