import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = "http://localhost:3000/products"
  constructor(private http : HttpClient) {
   }

   getAllProducts(){
    return this.http.get(this.URL)
   }
   getOneProducts(id : number){
    return this.http.get(this.URL+"/"+id)
   }

   editProduct(id : number|null,editedProduct : any){
    return this.http.put("http://localhost:3000/products/"+id,editedProduct)
  }

  deleteProduct(id : number|null){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  addProduct(newProduct :any){
    return this.http.post("http://localhost:3000/products/",newProduct)
  }

  getCategories(){
    return this.http.get("http://localhost:3000/categories")
  }

  //  fav(item:any){
  //   const toggleFavourite = item.fav === true ? false : true;
  //   const updatedItem = { ...item, fav: toggleFavourite };
  //   return this.http.put(`http://localhost:3000/products/${item.id}`, updatedItem);
  //  }
}
