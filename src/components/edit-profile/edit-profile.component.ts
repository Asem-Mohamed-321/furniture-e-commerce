import { Component, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {getImageURL} from '../../js/imageApi.js'
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../app/models/profile.model';



@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent {
  constructor(private profileService : ProfileService,private router: Router){}
  @Output() profileUpdated = new EventEmitter();


  isLoading = true;
  profile: Profile | null = null ;
  myForm = new FormGroup({
    name :new FormControl(),
    role : new FormControl(),
    about : new FormControl(),
    avatar : new FormControl(),
  })
  
  ngOnInit(){
    this.profileService.getUser(1).subscribe({
      next: (data:Profile)=>{
        console.log(data);
        console.log(data.avatar)
        this.profile=data;this.isLoading=false
        this.myForm.patchValue({
          name: this.profile.name,
          role: this.profile.role,
          about: this.profile.about,
          avatar: this.profile.avatar,
        });
      },
      error:(err)=>{console.log(err);this.isLoading=true}
    });
  }

  async editProfile(){
    const newProfile = this.myForm.value
    console.log(newProfile);
    this.profileService.editProfile(1,newProfile).subscribe({
      next: ()=>{
        console.log("successfully edited");
        this.profileUpdated.emit(newProfile); //this fire the event which will update the parent property to rereder profile info
        this.router.navigate(['/profile']);
      },
      error: (err)=>{console.log(err)}
    });
  }

  async handleImageUpload(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    const imageUrl = await getImageURL(input, true);
    if (imageUrl) {
      this.myForm.patchValue({ avatar: imageUrl });
    if (this.profile) {
        this.profile.avatar = imageUrl;
      }    }
  }
}
}
