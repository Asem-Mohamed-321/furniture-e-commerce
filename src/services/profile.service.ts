import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../app/models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }
  
  getUser(id : number):Observable<Profile>{
    return this.http.get<Profile>("http://localhost:3000/profiles/"+id)
  }

  editProfile(id : number,newProfile : any){
    return this.http.put("http://localhost:3000/profiles/"+id,newProfile)
  }
}
