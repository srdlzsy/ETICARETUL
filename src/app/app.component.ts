import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductListComponent,HttpClientModule,NavComponent,CategoryComponent,CartComponent],
  providers: [ProductService,CategoryService,CartService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-e-ticaret-ui';
}
