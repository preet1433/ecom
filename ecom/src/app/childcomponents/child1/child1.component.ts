import { Component, OnInit ,Input, Output } from '@angular/core';
import{output,EventEmitter }from '@angular/core'
import { ADDRCONFIG } from 'dns';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component  implements OnInit{




  constructor(){
    this.qty=1

  }
ngOnInit(): void {
  this.qty=1
  this.abcd = this.vavalueoftotal

}
@Output() get_array_from_child=new EventEmitter<string>()

@Output() get_from_child_total=new EventEmitter<number>()

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



  updateTotal(): void {
    this.totalValue = this.cartdata.price * this.cartdata.qun;
}

funcofnumber( a:any){
return a
}

public qty:any
qtyupdate(qqty:number){
  console.log(qqty);
this.qty=qqty;
return qqty;
}










public abcd:number=0
  KeyValueup(event:any, qun:any){
    console.log("addcartdata ", this.addcartdata)
    let final :any
    this.addcartdata.forEach((ele:any)=>{
      if(!final){
        final = ele.qun * ele.price
      }else{
        let data = ele.qun * ele.price
        final = final + data
      }
    })
    console.log("final ", final)
    this.abcd = final

console.log('this is abcd=>'+this.abcd)
  }
public child_flag:boolean=true
  final_checkout_all_flags_false(){
this.child_flag=false
  }



}


