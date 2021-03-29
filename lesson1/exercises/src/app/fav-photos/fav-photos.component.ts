import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Here are some photos of cute pit bulls';
  image1 = 'https://www.aspcapetinsurance.com/media/2001/facts-about-pit-bulls.jpg';
  image2 = 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/pitbull-48f3d963-e89f-45e1-88f4-8a25a95de489.jpg?crop=248px%2C165px%2C1305px%2C685px&resize=1200%2C630&ssl=1&quality=86&strip=all';
  image3 = 'https://parade.com/wp-content/uploads/2018/10/pit-bull-awareness-day-ftr.jpg';

  constructor() { }

  ngOnInit() {
  }

}