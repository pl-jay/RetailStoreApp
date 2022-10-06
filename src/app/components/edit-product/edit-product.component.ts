import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProduct: Product = {
    id: '',
    productName: '',
    price: ''
  }

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id =params.get('id')

        if(id){
          this.productService.getProduct(id).subscribe({
            next: (response) => {
              this.editProduct = response
            },
            error: (err) => {
              console.log(err)
            }
          })
        }
      }
    })
  }


  updateProduct(){
    this.productService.editProduct(this.editProduct.id, this.editProduct).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['products'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['products'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
