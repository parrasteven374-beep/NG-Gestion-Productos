import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product-service';
import { Producto } from '../../Models/Producto';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private productService = inject(ProductService);
  private ChangeRefresh = inject(ChangeDetectorRef)
  private navigator = inject(Router)
  public productos: Producto[] = []


  ngOnInit(): void {
    this.GetData()
  }

  GoToCreateProduct() {
    this.navigator.navigate(['/create-products']);
  }

  GetData() {
    this.productService.GetProducts().subscribe({
      next: (data) => {
        this.productos = data
        this.ChangeRefresh.markForCheck()
      }, error(err) {
        console.error('Error:', err)
      }
    })
  }


  DeleteProduct(id: number) {
    this.productService.DeleteProduct(id).subscribe({
      next: (response) => {

        this.productos = this.productos.filter(item => item.id !== id);


        this.ChangeRefresh.markForCheck();
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }



}
