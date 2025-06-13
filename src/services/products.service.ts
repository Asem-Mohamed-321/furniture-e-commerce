import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../app/models/product.model';
import { Observable } from 'rxjs';
import { Category } from '../app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = "http://localhost:3000/products"
  constructor(private http : HttpClient) {
   }

   getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.URL)
   }

   getOneProducts(id : number){
    return this.http.get(this.URL+"/"+id)
   }

   editProduct(id : number,editedProduct : any){
    return this.http.put("http://localhost:3000/products/"+id,editedProduct)
  }

  deleteProduct(id : number|null){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  addProduct(newProduct :Product):Observable<Product>{
    return this.http.post<Product>("http://localhost:3000/products/",newProduct)
  }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/categories")
  }

  //  fav(item:any){
  //   const toggleFavourite = item.fav === true ? false : true;
  //   const updatedItem = { ...item, fav: toggleFavourite };
  //   return this.http.put(`http://localhost:3000/products/${item.id}`, updatedItem);
  //  }
}
