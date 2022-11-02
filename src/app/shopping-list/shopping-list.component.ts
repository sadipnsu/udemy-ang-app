import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [ 
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10),
    new Ingredient('Banana',15),
    new Ingredient('Mango',20),
    new Ingredient('Guava',30),
    new Ingredient('Pineapple',50),
    new Ingredient('Grapes',100),
    new Ingredient('Watermelon',200),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
