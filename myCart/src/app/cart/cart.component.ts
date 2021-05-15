import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  name!: string | null;

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
