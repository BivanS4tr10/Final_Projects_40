import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
  standalone: false,
})
export class TrackOrderPage implements OnInit {

  trackingNumber: string = 'LGS-8927893300763731';

  trackingSteps = [
    {
      status: 'Packed',
      description: 'Your parcel is packed and will be handed over.',
      date: 'Apr 19, 12:31',
      icon: 'checkmark-done-outline',
      active: true,
      failed: false
    },
    {
      status: 'Shipped',
      description: 'Out from logistic facility.',
      date: 'Apr 20, 06:55',
      icon: 'checkmark-done-outline',
      active: true,
      failed: false
    },
    {
      status: 'Out for Delivery',
      description: 'Courier is delivering.',
      date: 'Apr 22, 11:10',
      icon: 'time-outline',
      active: false,
      failed: false
    },
    {
      status: 'Attempt Failed',
      description: 'Delivery was unsuccessful.',
      date: 'Apr 22, 12:50',
      icon: 'close-circle-outline',
      active: false,
      failed: true
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Ambil tracking number dari query param jika dikirim
    const param = this.route.snapshot.queryParamMap.get('tracking');
    if (param) {
      this.trackingNumber = param;
    }
  }

}
