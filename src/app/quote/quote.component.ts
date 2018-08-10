import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

  ];
  // quotes= null;
  addNewQuote(){
  // this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
