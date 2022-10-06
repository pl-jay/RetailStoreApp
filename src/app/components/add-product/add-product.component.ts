import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct: Product = {
    id: '',
    productName: '',
    price: ''
  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    console.log(this.addProduct)
    this.productService.addProduct(this.addProduct).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['products'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
