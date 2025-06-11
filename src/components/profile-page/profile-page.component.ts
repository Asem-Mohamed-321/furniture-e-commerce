import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  cover:string = 'assets/banner.jpg';

  constructor(private profileService : ProfileService,private router: Router){}
  
  profile:any ; 
  ngOnInit(){
    this.loadProfile();

    //the next part is responsible of rerender the page in every reload
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadProfile();
    });
  }

  loadProfile(){
    this.profileService.getUser(1).subscribe({
      next: (data)=>{console.log(data);this.profile={...data}},
      error:(err)=>console.log(err)
    });
  }
}
