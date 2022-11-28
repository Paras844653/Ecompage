import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Categories: string[] = [];
  public Products: any[] = [];
  public CartItems: any[] = [];
  public CartCount: number = 0;
  public isCartVisible: boolean = false;

  public RemoveItem(i:number){
    let flag = confirm("Are You sure to delete this item from cart")
    if(flag==true){
    this.CartItems.splice(i,1);
    this.GetCartCount();
    }

  }

  public ToggleCart() {
    this.isCartVisible = this.isCartVisible == false ? true : false;
  }

  public GetCartCount() {
    this.CartCount = this.CartItems.length;
  }

  public CategoryChanged(e: any) {
    if (e.target.value == 'all') {
      this.GetProducts('https://fakestoreapi.com/products');
    } else {
      this.GetProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }

  public GetCategories() {
    fetch('http://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        data.unshift('all');
        this.Categories = data;
      });
  }

  public GetProducts(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.Products = data;
      });
  }

  public AddToCart(id: number) {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.CartItems.push(data);
        alert(`${data.title}\nAdded to Cart`);
        this.GetCartCount();
      });
  }


  constructor() { }

  ngOnInit(): void {
    this.GetCategories();
    this.GetProducts('https://fakestoreapi.com/products');
  
  }

}
