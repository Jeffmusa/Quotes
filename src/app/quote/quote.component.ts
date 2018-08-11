import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
       new Quote(1,'Eat ','If you love eating please do it','Robert' ),
       new Quote(2,'Eat ','If you love eating please do it','Robert' ),
       new Quote(3,'Eat ','If you love eating please do it','Robert' ),

   ]
   addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          this.quotes.push(quote)

      }


  constructor() { }

  ngOnInit() {
  }

}
