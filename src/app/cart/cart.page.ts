import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  cartItems = [
    {
      name: 'Top Floral',
      color: 'Pink',
      size: 'M',
      price: 17.00,
      qty: 1,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Off-Shoulder Blouse',
      color: 'Pink',
      size: 'M',
      price: 17.00,
      qty: 1,
      image: 'https://via.placeholder.com/150'
    }
  ];

  ngOnInit() {}

  increaseQty(item: any) {
    item.qty++;
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  checkout() {
    console.log('Proceeding to checkout...');
  }
}