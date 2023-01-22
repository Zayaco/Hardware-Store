import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { url: './../../assets/images/carousel_slide1.jpg' },
    { url: './../../assets/images/carousel_slide2.jpg' },
    { url: './../../assets/images/carousel_slide3.jpg' },
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 2000);
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
  }

  prev() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
  }
}
