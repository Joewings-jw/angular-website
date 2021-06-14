import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  config: SwiperOptions = {
    loop: true,
    grabCursor: true,
    spaceBetween: 100,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      568:{
        width:568,
        slidesPerView: 1,
      },
      768:{
        width:768,
        slidesPerView: 2,
      },
      1024:{
        width: 1024,
        slidesPerView: 2,
      }
    }
      
      
  };

  constructor() { }

  ngOnInit(): void {
  }


}

