import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: false,
})
export class OrdersPage implements OnInit {

  orders = [
    {
      id: '92287157',
      status: 'Packed',
      items: [1, 2, 3],
      images: [
        'https://via.placeholder.com/50/ff6666',
        'https://via.placeholder.com/50/ff99cc'
      ]
    },
    {
      id: '92287157',
      status: 'Shipped',
      items: [1, 2, 3, 4],
      images: [
        'https://via.placeholder.com/50/3366ff',
        'https://via.placeholder.com/50/9966ff'
      ]
    },
    {
      id: '92287157',
      status: 'Delivered',
      items: [1, 2],
      images: [
        'https://via.placeholder.com/50/ffcc66',
        'https://via.placeholder.com/50/ff9966'
      ]
    },
    {
      id: '92287157',
      status: 'Delivered',
      items: [1, 2, 3, 4, 5],
      images: [
        'https://via.placeholder.com/50/cc99ff',
        'https://via.placeholder.com/50/66ccff'
      ]
    },
    {
      id: '92287157',
      status: 'Delivered',
      items: [1],
      images: [
        'https://via.placeholder.com/50/f06292'
      ]
    }
  ];

  constructor(private navCtrl: NavController) {}

  trackOrder() {
    this.navCtrl.navigateForward(`/track-order`);
}

  ngOnInit() {}
}
