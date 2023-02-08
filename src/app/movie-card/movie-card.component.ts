import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie = {
    "createdAt":"",
    "name":"",
    "image":"",
    "rate":0,
    "count":0,
    "description":"",
    "price":"",
    "reviews":[
  
       "",
  
    ],
    "id":"",
  };
  constructor(private router : Router) {}

  ngOnInit(): void {}

  View(){
    this.router.navigate(['movie-details' ])

  }
}
