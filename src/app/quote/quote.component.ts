import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
       new Quote(1,'No man stands alone ','jeff',"ken",0,0 ),
       new Quote(1,'If you love eating please do it ','jeff',"sam",0,0 ),
       new Quote(1,'If you love eating please do it ','jeff',"tom",0,0),

   ]
   toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
   addNewQuote(quote){
          let quoteLength = this.quotes.length;
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
