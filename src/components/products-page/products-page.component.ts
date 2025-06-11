import { Component  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FavouritesService } from '../../services/favourites.service';
import { CommonModule } from '@angular/common';
import { FormGroup , FormControl, ReactiveFormsModule } from '@angular/forms';
import {getImageURL} from '../../js/imageApi.js'



@Component({
  selector: 'app-products-page',
  imports: [CommonModule,ReactiveFormsModule],
  providers: [ProductsService],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
//   products = [
//   {
//     "id" : 1,
//     "title": "Dining Table",
//     "category": "Table",
//     "desc": "Elegant table made of high-quality wood.",
//     "rating": 4.6,
//     "reviews": 515,
//     "badges": ["Fast Delivery", "Best Price"],
//     "price": "$801",
//     "image": "https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg",
//     "discount": "Up to 20% off",
//     "quickLook": true,
//     "favorite": true
//   },
//   {
//     "id" : 2,
//     "title": "Sectional Sofa",
//     "category": "Sofa",
//     "desc": "Spacious and soft sofa, ideal for family and guests.",
//     "rating": 4.6,
//     "reviews": 485,
//     "badges": ["Fast Delivery", "Best Price"],
//     "price": "$760",
//     "image": "https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg",
//     "discount": "Up to 20% off",
//     "quickLook": true,
//     "favorite": true
//   },
//   {
//     "id" : 3,
//     "title": "3-Seater Sofa",
//     "category": "Sofa",
//     "desc": "Spacious and soft sofa, ideal for family and guests.",
//     "rating": 4.6,
//     "reviews": 323,
//     "badges": ["Fast Delivery", "Best Price"],
//     "price": "$710",
//     "image": "https://images.pexels.com/photos/1866147/pexels-photo-1866147.jpeg",
//     "discount": "Up to 25% off",
//     "quickLook": true,
//     "favorite": true
//   },
//   {
//     "id" : 4,
//     "title": "Dining Table",
//     "category": "Table",
//     "desc": "Elegant table made of high-quality wood.",
//     "rating": 4.8,
//     "reviews": 373,
//     "badges": ["Fast Delivery", "Best Price"],
//     "price": "$685",
//     "image": "https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg",
//     "discount": "Up to 35% off",
//     "quickLook": true,
//     "favorite": true
//   },
//   {
//     "id" : 5,
//     "title": "King Bed",
//     "category": "Bed",
//     "desc": "Cozy and supportive bed for a perfect night's sleep.",
//     "rating": 4.7,
//     "reviews": 599,
//     "badges": ["Fast Delivery", "Best Price"],
//     "price": "$881",
//     "image": "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
//     "discount": "Up to 40% off",
//     "quickLook": true,
//     "favorite": true
//   }
// ]


// products = [
//   {
//     id: 1,
//     image: 'https://picsum.photos/200?random=1',
//     desc: 'Stylish Headphones',
//     price: "$49.99",
//     reviews: 600,
//     starts: 5,
//   },
//   {
//     id: 2,
//     image: 'https://picsum.photos/200?random=2',
//     desc: 'Modern Smartwatch',
//     price: "$99.99",
//     reviews: 600,
//     starts: 3,
//   },
//   {
//     id: 3,
//     image: 'https://picsum.photos/200?random=3',
//     desc: 'Wireless Earbuds',
//     price: "$59.99",
//     reviews: 600,
//     starts: 1,
//   },
//   {
//     id: 4,
//     image: 'https://picsum.photos/200?random=4',
//     desc: 'Fitness Tracker',
//     price: "$79.99",
//     reviews: 600,
//     starts: 5,
//   },
//   {
//     id: 5,
//     image: 'https://picsum.photos/200?random=5',
//     desc: 'Bluetooth Speaker',
//     price: "$39.99",
//     reviews: 600,
//     starts: 4,

//   },
//   {
//     id: 6,
//     image: 'https://picsum.photos/200?random=6',
//     desc: 'Compact Camera',
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//   }
// ];

// products = [
//   {
//     id : 1,
//     image : 'assets/sofas/1.jpg',
//     desc: "Gray comfortable sofa",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "sofa"
//   },
//   {
//     id : 2,
//     image : 'assets/sofas/2.jpg',
//     desc: "Cozy sofa",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "sofa"
//   },
//   {
//     id : 3,
//     image : 'assets/sofas/3.jpg',
//     desc: "Elegant red sofa",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "sofa"
//   },
//   {
//     id : 4,
//     image : 'assets/sofas/4.jpg',
//     desc: "Wide sofa",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "sofa"
//   },
//   {
//     id : 5,
//     image : 'assets/sofas/5.jpg',
//     desc: "Sofa with many pillows",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "sofa"
//   },
//   {
//     id : 6,
//     image : 'assets/chairs/1.jpg',
//     desc: "Black rigid chair",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "chair"
//   },
//   {
//     id : 7,
//     image : 'assets/chairs/2.jpg',
//     desc: "Woden chair",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "chair"
//   },
//   {
//     id : 8,
//     image : 'assets/chairs/3.jpg',
//     desc: "White small chair",
//     price: "$0.00",
//     reviews: 600,
//     starts: 5,
//     cat: "chair"
//   },
//   {
//     id : 9,
//     image : 'assets/chairs/4.jpg',
//     desc: "Long legs chair",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "chair"
//   },
//   {
//     id : 10,
//     image : 'assets/chairs/6.jpg',
//     desc: "Cozy chair",
//     price: "$129.99",
//     reviews: 600,
//     starts: 5,
//     cat: "chair"
//   }
// ]
products : any=[
  {
    id : 10,
    image : 'assets/chairs/6.jpg',
    desc: "Cozy chair",
    price: "$129.99",
    reviews: 600,
    starts: 5,
    cat: "chair"
  }
]
categories : any

constructor( private productService : ProductsService ,private cartService : CartService,private favService : FavouritesService ,public router: Router){}

ngOnInit(){
  this.productService.getAllProducts().subscribe({
    next:(data)=>{this.products = data},
    error: (err)=>{console.log(err)}
  })
  this.productService.getCategories().subscribe({
    next: (data)=>{this.categories = data},
    error: (err)=> console.log(err)
  })
}

addProductToCart(item:any){
  this.cartService.AddToCart(item)
  this.showToast("item was added to the cart successfully");
  this.cartService.updateCartCount()
}

addToFav(item:any){
  this.favService.AddToFav(item)
}

openMenuId: number | null = null;
toggleMenu(id:number){
    this.openMenuId = this.openMenuId === id ? null : id;
}


selectedProductId: number | null = null;
selectedProductObject : any
isModalOpen = false;

openModal(id: number) {
  this.openMenuId=null
  this.selectedProductId = id;
  this.isModalOpen = true;
  // console.log("opened modal for id : ",id)
  const data = this.products.find((p:any)=>p.id === id)
  this.selectedProductObject = data;
  console.log(this.selectedProductObject)
  this.myForm.patchValue({
          desc: this.selectedProductObject.desc,
          price: this.selectedProductObject.price,
          cat: this.selectedProductObject.cat,
          image: this.selectedProductObject.image,
  });
  console.log(this.myForm.value)

}

closeModal() {
  this.selectedProductId = null;
  this.selectedProductObject=null;
  this.isModalOpen = false;
  this.openMenuId=null

}


editProduct(){
    const editedValues = this.myForm.value
    const editedProduct = {...this.selectedProductObject,...editedValues}
    const priceRegex = /^\$\d+(\.\d{2})?$/;

    if (!priceRegex.test(editedValues.price)) {
      alert("Price must be in the format: $100.99");
      return;
    }
    console.log(editedProduct);
    this.productService.editProduct(this.selectedProductId,editedProduct).subscribe({
      next: ()=>{
        
        const index = this.products.findIndex((p:any) => p.id === editedProduct.id);

        if (index !== -1) {
          this.products[index] = { ...editedProduct };
        }
        console.log("successfully edited",this.selectedProductId);
        this.closeModal();
      },
      error: (err)=>{console.log(err)}
    });
    console.log("successfully edited",this.selectedProductId);
}


  isLoading = true;

myForm = new FormGroup({
    desc :new FormControl(),
    price : new FormControl(),
    cat : new FormControl(),
    image : new FormControl(),
  })

  isImageUploading = false;

  async handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.isImageUploading = true;
      const imageUrl = await getImageURL(input, true);
      this.isImageUploading = false;
      if(this.isModalOpen && imageUrl){
        this.myForm.patchValue({ image: imageUrl });
      }
      else if(this.isNewProductModalOpen && imageUrl){
        this.newProductForm.patchValue({ nP_image: imageUrl });
      }
      
    }
  }

// confirm delete modal : 
showDeleteModal = false;

openDeleteModal(id: number) {
  this.selectedProductId = id;
  this.showDeleteModal = true;
}

confirmDelete() {
  if (this.selectedProductId !== null) {
    console.log('Deleting product with ID:', this.selectedProductId);
    
    this.productService.deleteProduct(this.selectedProductId).subscribe();
    this.products = this.products.filter((p: any) => p.id !== this.selectedProductId);
    this.showDeleteModal = false;
    this.selectedProductId = null;
  }
}

//new product modal :
isNewProductModalOpen=false

newProductForm = new FormGroup({
    nP_desc :new FormControl(),
    nP_price : new FormControl(),
    nP_cat : new FormControl(),
    nP_image : new FormControl(),
  })

openNewProductModal() {
  this.isNewProductModalOpen = true;
  console.log(this.myForm.value)
}

closeNewProductModal() {
  this.isNewProductModalOpen = false;
}

addNewProduct(){
  console.log("product added")

  const { nP_desc, nP_cat, nP_price, nP_image } = this.newProductForm.value;

  const newProductValues = {
    desc: nP_desc,
    cat: nP_cat,
    price: nP_price,
    image: nP_image
  };

  const maxId = this.products.reduce((max:number, p:any) => Math.max(max, p.id), 0); //getting the highest id and adding one to it which turned out to be the safest solution
  const newId = maxId + 1;
  const newProduct = {
      id : newId,
      reviews: 0,
      starts: 0,
      fav: false,
      ...newProductValues
    }

    const priceRegex = /^\$\d+(\.\d{2})?$/;

    if (!priceRegex.test(newProduct.price)) {
      alert("Price must be in the format: $100.99");
      return;
    }

    this.productService.addProduct(newProduct).subscribe({
      next: (data)=>{this.products.push(data),this.closeNewProductModal()},
      error: (err)=>{console.log(err)}
    })
    // console.log(newProduct);
}

toastList: { id: number; message: string; visible: boolean }[] = [];
toastId = 0;

showToast(message:string) {
  const id = this.toastId++;
  const toast = { id, message: message, visible: true };
  this.toastList.push(toast);
  setTimeout(() => {
    toast.visible = false;
    setTimeout(() => this.closeToast(id), 500); // Wait for fade-out
  }, 3000);
}

closeToast(id: number) {
  this.toastList = this.toastList.filter(t => t.id !== id);
}
dismissToast(toast: any) {
  toast.visible = false;
  setTimeout(() => this.closeToast(toast.id), 500);
}


filterMenu = false
openFilterMenu(){
  this.filterMenu=!this.filterMenu
}


selectedCategories: string[] = [];

toggleCategory(category: string) {
  const index = this.selectedCategories.indexOf(category);
  if (index > -1) {
    this.selectedCategories.splice(index, 1);
  } else {
    this.selectedCategories.push(category);
  }
  this.currentPage = 1;
  // console.log('Selected categories:', this.selectedCategories);
}

currentPage: number = 1;
itemsPerPage: number = 12;

get filteredProducts() {
  let filtered = this.selectedCategories.length === 0
    ? this.products
    : this.products.filter((p: any) =>
        this.selectedCategories.includes(p.cat)
      );

  // Pagination logic
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  return filtered.slice(start, end);
}

get totalPages(): number[] {
  const filtered = this.selectedCategories.length === 0
    ? this.products
    : this.products.filter((p: any) =>
        this.selectedCategories.includes(p.cat)
      );
  return Array(Math.ceil(filtered.length / this.itemsPerPage))
    .fill(0)
    .map((_, i) => i + 1);
}

goToPage(page: number) {
  this.currentPage = page;
}

prevPage() {
  if (this.currentPage > 1) this.currentPage--;
}

nextPage() {
  if (this.currentPage < this.totalPages.length) this.currentPage++;
}
  
}
