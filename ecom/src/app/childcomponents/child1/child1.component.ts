import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component  implements OnInit{

public valueofnumber: any =0

//========================================================
public fulltotal :any=[]

  @Input() addcartdata:any
  @Input() vavalueoftotal:any
  

  totalValue: number = 1;
  cartdata: any;
  public flag_of_lastpage:boolean=false
//====================================================
final_checkOut(){
  this.flag_of_lastpage=true
}


//========================================================
//  ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
//   this.abcd = this.vavalueoftotal
//  }

  updateTotal(): void {
    this.totalValue = this.cartdata.price * this.cartdata.qun;
}

funcofnumber( a:any){
return a
}
funcofttal(a:any){

}


public qty:any
qtyupdate(qqty:number){
  console.log(qqty);
this.qty=qqty;
return qqty;
}




 counterValue: number = 1; // Initial value

    increment(): void {
        this.totalValue++;
    }

    decrement(): void {
        if (this. totalValue > 1) {
            this.totalValue--;
        }
    }









    constructor(){
      this.qty=1
  
    }
  ngOnInit(): void {
    this.qty=1
    this.abcd = this.vavalueoftotal

  }
public abcd:number=0
  KeyValueup(event:any){

    this.fulltotal.push(event)
//     // const abc = +event
//     this.fulltotal =+ event 

this.abcd= this.abcd + this.fulltotal.reduce(function(x:any,y:any){
  return x+y;
},0)
console.log(this.abcd)
  }
}


