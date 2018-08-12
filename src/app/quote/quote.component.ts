import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
       new Quote(1,'If you love eating please do it ','jeff',10,20 ),
       new Quote(1,'If you love eating please do it ','jeff',10,20 ),
       new Quote(1,'If you love eating please do it ','jeff',10,20),

   ]
   toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
   addNewQuote(quote){
          let quoteLength = this.quotes.length;
          quote.creation = new Date();
          quote.id=quoteLength+1;
          this.quotes.push(quote)

      }

      deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        alert(`Your goal  "${this.quotes[index].name}" has been deleted`)

        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}

  constructor() { }
  ngOnInit() {
  }

}
