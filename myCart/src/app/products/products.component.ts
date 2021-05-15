import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input()
  name!: string | null;
  
  //name:any;
  product_name:any;
  product_company:any;
  product_price:any;
  constructor(private router:Router) {
    this.name=localStorage.getItem("name");
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.setItem("name","");
    this.router.navigateByUrl("");

  }

}
