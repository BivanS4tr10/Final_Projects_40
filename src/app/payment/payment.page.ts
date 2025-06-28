import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: false,
})
export class PaymentPage implements OnInit {

   shipping = {
    country: 'India',
    address: '',
    city: '',
    postalCode: ''
  };

  cartItems = [
    {
      name: 'Pink Dress',
      price: 17.00,
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Yellow Top',
      price: 17.00,
      image: 'https://via.placeholder.com/100'
    }
  ];

  selectedShipping = 'standard';

  ngOnInit() {}

  cards = [
    { id: 1, masked: '**** **** **** 1579', name: 'Amanda Morgan', exp: '12/27' },
    { id: 2, masked: '**** **** **** 8012', name: 'Amanda Morgan', exp: '08/26' }
  ];
  selectedCard = this.cards[0];

  subtotal = 34;
  shippingCost = 0;
  get total() {
    return this.subtotal + this.shippingCost;
  }

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  saveAddress() {
    console.log('Address saved:', this.shipping);
  }

  async processPayment() {
    const loading = await this.loadingCtrl.create({
      message: 'Payment is in progress',
      spinner: 'circles',
      duration: 2000
    });
    await loading.present();

    // Simulasi response sukses/gagal
    setTimeout(async () => {
      await loading.dismiss();
      const success = Math.random() > 0.5;
      if (success) {
        this.showAlert('Done!', 'Your card has been successfully charged', 'Track My Order');
      } else {
        this.showAlert('We couldn\'t proceed your payment', 'Please, try again', 'Try Again');
      }
    }, 2000);
  }

  async showAlert(header: string, message: string, buttonText: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [buttonText]
    });
    await alert.present();
  }

  getTotal() {
    const base = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    return this.selectedShipping === 'express' ? base + 12 : base;
  }

  pay() {
    console.log('Processing payment...');
  }
  
  contact = {
    phone: '+84932000000',
    email: 'amandamorgan@example.com'
  };

}
