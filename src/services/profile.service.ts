import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }
  
  getUser(id : number){
    return this.http.get("http://localhost:3000/profiles/"+id)
  }

  editProfile(id : number,newProfile : any){
    return this.http.put("http://localhost:3000/profiles/"+id,newProfile)
  }
}
