import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ChangeDetectionStrategy';
  name!: string;
  fruit!: string;
  names = ['Jitu', 'Hari', 'Gopal'];
  fruitsArray: string[] = ['Apple', 'Banana', 'Orange'];
  fruits = new BehaviorSubject(this.fruitsArray);
  clearFruitsBS = new BehaviorSubject(this.fruitsArray);
  

  addName(name: string) {
    this.names.push(name);
  }

  clearNames() {
    this.names = [];
  }

  addFruit(fruit: string) {
    let item = [];
    item.push(fruit);
    this.fruitsArray = [...this.fruitsArray, ...item];
    this.fruits.next(item);
  }

  clearFruits() {
    this.fruitsArray = [];
    this.clearFruitsBS.next([]);
  }
}
