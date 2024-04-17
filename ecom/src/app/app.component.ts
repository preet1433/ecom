import { Component, OnInit } from '@angular/core';
import { ApicallService } from './servicies/apicall.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  //==========================Constructor==================================
    constructor(private jsondata:ApicallService){
  
    }
  
    title = 'Hello';
    //========================= Oninit=====================================
    ngOnInit() {
      this.jsondata.jsonApiData().subscribe(i=>{
        this.json=i;
   
      });
      this.arrayofobjectdat=this.json.products
    }
///======================================================================
  // [x: string]: any;
 public json:any;
public arrydata:any[]=[]
public arrayofobjectdat:any;//this is array of api data

public checksmartphone: any;
public checklaptop: any;
public checkfragrances: any;
public checkskincare: any;
public checkgroceries: any;
public checkhomedecore: any;

public fieldsetofdivflag:boolean=false

public discount1 :any
public discount2 :any

public rating1:any
public rating2:any
public rating3:any
public rating4:any
public rating5:any

public under500:any
public under1000:any
public under1500:any
public forlooparray:any[]=[]
//=============Flags=================================
public flagcategory: boolean= false
public flagdiscount:boolean=false
public flagrating:boolean=false
public flagprice:boolean=false
public flagbrand:boolean=false
catch:any


public childcomponent1:boolean=false
final: any;

//=========================================dynamic Data=================================================
public category_dynamic_data:any =[]//array of category




//==========flags==========================================================================================
public dynamiccategoryflag:boolean=false
public dynamic_category_resulrflag:boolean=false

public dynamic_flag_of_brand:boolean=false

//==================dynamic data coding=======================================================================================
//giving unique category keys from object
uniquedata(arr:any){
  arr.forEach((item:any)=>{
this.category_dynamic_data.push(item.category)
const distinctArray = this.category_dynamic_data.filter((n:any, i:any) => this.category_dynamic_data.indexOf(n) === i);
this.category_dynamic_data=distinctArray
 })

 console.log(this.category_dynamic_data) 
}
//===========category============================================
categorydynamicbutton(){
this.uniquedata(this.arrayofobjectdat)
this.dynamiccategoryflag=true
this.dynamic_category_resulrflag=false

this.dynamic_flag_of_brand=false
  this.dynamic_brand_resultflag=false

this.flagdiscount=false

this.fieldsetofdivflag=false

this.flagrating=false

this.flagprice=false



}



category_previous(){
  this.dynamiccategoryflag=true // keep this true all else false
  
  this.dynamic_category_resulrflag=false
  
this.dynamic_flag_of_brand=false  
this.dynamic_brand_resultflag=false

this.flagdiscount=false
this.fieldsetofdivflag=false
this.flagrating=false

this.flagprice=false
}


filterresultcategory(obj:any,ischecked:boolean){
  this.dynamiccategoryflag=false
  this.dynamic_category_resulrflag=true
  
  this.dynamic_flag_of_brand=false
    this.dynamic_brand_resultflag=false
  
  this.flagdiscount=false
  
  this.fieldsetofdivflag=false
  
  this.flagrating=false
  
  this.flagprice=false

this.forlooparray=[]
 if(this.category_dynamic_data.includes(obj)){
  console.log('this is your'+ obj);
this.arrayofobjectdat.forEach((data:any) => {
  
  if(data.category===obj)
  {
    if(ischecked){
      console.log(data)
    this.forlooparray.push(data)
    }
    
    if(!ischecked){
      this.forlooparray=[]
      this.dynamic_category_resulrflag=false
    }
  }
  
})
console.log(this.forlooparray);
 }

}
//===========Brand============================================

public drop_down_value:any
public dynamic_brand_resultflag:boolean=false

branddynamicbutton(){
  console.log('hi');
  this.uniquedata(this.arrayofobjectdat)
  this.dynamic_flag_of_brand=true

 

  this.dynamiccategoryflag=false
this.dynamic_category_resulrflag=false


  this.dynamic_brand_resultflag=false

this.flagdiscount=false

this.fieldsetofdivflag=false

this.flagrating=false

this.flagprice=false



  
}

public brands_array:any[]=[]
when_drop_value_is_selected(){
  
  this.brands_array=[]
  this.arrayofobjectdat.forEach((data:any)=>{
if(data.category.includes(this.drop_down_value)){

  this.brands_array.push(data)
  console.log()
}  })
 
}

brand_previous(){

  this.dynamiccategoryflag=false // keep this true all else false
  
  this.dynamic_category_resulrflag=false
  
this.dynamic_flag_of_brand=true  
this.dynamic_brand_resultflag=false

this.flagdiscount=false
this.fieldsetofdivflag=false

this.flagrating=false

this.flagprice=false
}


when_checkbox_of_Brand_is_selected(object:any,ischecked:boolean){
  this.dynamic_flag_of_brand=false

this.dynamic_brand_resultflag=true

let brand1=object.brand
console.log(brand1)

this.brands_array.forEach((data:any)=>{
  if(data.brand===brand1)
  {
          if(ischecked)
          {
            console.log(data)
            this.forlooparray.push(data)
          }
          else
          {
            this.forlooparray=[]
            this.dynamic_brand_resultflag=false
          }
  }
})

}

//===========Discount============================================

public dynamic_discount_resultflag:boolean=false
public dynamic_array:any=[]//api data into this 
public discount_arrays=[]
when_dicount_button_click(){
  this.dynamic_discount_resultflag=true
this.dynamic_array=this.arrayofobjectdat
  this.dynamic_array.forEach((data:any)=>{
  })
}

//====================Discount Dynamic==================================
public discount_upto10:any
public discount_upto20:any
public discount_upto30:any

dynamic_discount_clicked(){
  if(this.discount_upto10){
    console.log('clicked on 10')
  }
  if(this.discount_upto20){
    console.log('clicked on 20')
  }if(this.discount_upto30){
    console.log('clicked on 30')
  }
}







//******************************Static **************************************** */
//===================button click events call=============
categorybtn(){
  this.flagdiscount=false
  this.flagprice=false
  this.flagrating=false
  this.flagcategory=true
}
//===============category button ===================================
categoryselectedbtn(){
  this.forlooparray=[]
 this.fieldsetofdivflag=true


  
  //==========smartphone===========
  
    if(this.checksmartphone){
     console.log("smartphone");

     this.arrayofobjectdat.forEach((data: any)=>{
      if(data.category==="smartphones"){
        console.log(data)
        this.forlooparray.push(data)
      }
     })
    
    }
    //=====================               laptop
  
    if(this.checklaptop){
      console.log("Laptops");
      this.arrayofobjectdat.forEach((data: any)=>{
        if(data.category==="laptops"){
          console.log(data)
          this.forlooparray.push(data)
          
        }
       // console.log(this.forlooparray)
       })      
    }
  
    //====================                  fragrences
    if(this.checkfragrances){
      console.log("Fragrences");
      this.arrayofobjectdat.forEach((data: any)=>{
        if(data.category==="fragrances"){
          console.log(data)
          this.forlooparray.push(data)
        }
       })
      
    }
    //===================                   skincare
    if(this.checkskincare){
      console.log("skincare");
      this.arrayofobjectdat.forEach((data: any)=>{
        if(data.category==="skincare"){
          console.log(data)
          this.forlooparray.push(data)
        }
       })
      
    }
    //=============================             grocceries
    if(this.checkgroceries){
      console.log("Grocceries");
      this.arrayofobjectdat.forEach((data: any)=>{
        if(data.category==="groceries"){
          console.log(data)
          this.forlooparray.push(data)
        }
       })
      
    }
    //=====================                       homedecore
    if(this.checkhomedecore){
     
      console.log("home decoere");
      this.arrayofobjectdat.forEach((data: any)=>{
        if(data.category==="home-decoration"){
          console.log(data)
          this.forlooparray.push(data)
        }
       })
      
  
    }
  
  
  }
  
 //===============Discount button ===================================
discountbtn(){
  
  this.flagdiscount=true
  this.flagprice=false
  this.flagrating=false
  this.flagcategory=false
}

discountselectedbutton(){
  this.dynamiccategoryflag=false
  this.dynamic_category_resulrflag=false

  this.dynamic_flag_of_brand=false
  this.dynamic_brand_resultflag=false
  
  this.forlooparray=[]
  this.fieldsetofdivflag=true
  if(this.discount1){
    console.log("discount 1 selected ")
    this.arrayofobjectdat.forEach((data:any)=>{
        if(data.discountPercentage>1 && data.discountPercentage<10){
          console.log(data)
          this.forlooparray.push(data)
        }
    })
  }
  if(this.discount2)
  {
    console.log("discount 2 is selected ")
    this.arrayofobjectdat.forEach((data:any)=>{
      if(data.discountPercentage>10.01 && data.discountPercentage<20){
        console.log(data)
        this.forlooparray.push(data)
      }
  })
  }
}
//============================= rating button=========
ratingsbtn(){
  this.flagrating=true
  this.flagdiscount=false
  this.flagprice=false
  this.flagcategory=false
}

ratingbtnselectedbtn(){
  this.forlooparray=[]
  this.fieldsetofdivflag=true
  console.log("button hited")
      if(this.rating1){
      this.arrayofobjectdat.forEach((data:any)=>{
        if(data.rating>0 && data.rating<1){
          console.log(data)
          this.forlooparray.push(data)
        }
      })
      }


      if(this.rating2){
        this.arrayofobjectdat.forEach((data:any)=>{
          if(data.rating>1.1 && data.rating<2){
            console.log(data)
            this.forlooparray.push(data)
          }
        })
        }

        if(this.rating3){
          this.arrayofobjectdat.forEach((data:any)=>{
            if(data.rating>2.1 && data.rating<3){
              console.log(data)
              this.forlooparray.push(data)
            }
          })
          }

          if(this.rating4){
            this.arrayofobjectdat.forEach((data:any)=>{
              if(data.rating>3.01 && data.rating<=4){
                console.log(data)
                this.forlooparray.push(data)
              }
            })
            }


            if(this.rating5){
              this.arrayofobjectdat.forEach((data:any)=>{
                if(data.rating>4 && data.rating<5){
                  console.log(data)
                  this.forlooparray.push(data)
                }
              })
              }


}

//========================price button
pricebtn(){
  this.flagprice=true

  this.flagdiscount=false

  this.flagrating=false
  this.flagcategory=false
}

pricebtnselectedbtn(){

  this.forlooparray=[]
  this.fieldsetofdivflag=true

  if(this.under500){
    this.arrayofobjectdat.forEach((data:any)=>{
      if(data.price<=500){
        console.log(data)
        this.forlooparray.push(data)
      }
    })
  }


  if(this.under1000){

    this.arrayofobjectdat.forEach((data:any)=>{
      if(data.price<=1000){
        console.log(data)
        this.forlooparray.push(data)
      }
    })

  }
  if(this.under1500){

    this.arrayofobjectdat.forEach((data:any)=>{
      if(data.price<=1500){
        console.log(data)
        this.forlooparray.push(data)
      }
    })
  }


}

public addcartdata:any[]=[]
addtocart(data:any){
  // if (data.length != 0) {
    // data.forEach((element: any) => {
    data.qun = 1;

    console.log('quantity',data.qun)
  // }
  this.addcartdata.push(data)
  console.log(this.addcartdata)

}





//==================brand=========================
brandbtn(){
  this.flagbrand=true

  this.flagdiscount=false
  this.flagprice=false
  this.flagrating=false
  this.flagcategory=false
}
//===============================================go to child ==================
public valueoftotal:any=0
public xyz:any
gotochild(){
  let abcd:any[] = []


  this.dynamiccategoryflag=false
  this.dynamic_category_resulrflag=false

 

  if(this.addcartdata){
    this.addcartdata.forEach(zz=>{
      abcd.push(zz.price)
    })

    this.valueoftotal=abcd.reduce(function(x:any,y:any){
      return x+y;
    },0)
    this.childcomponent1=true
    this.flagcategory= false
    this.flagdiscount=false
    this.flagrating=false
    this.flagprice=false
  }
   if(!this.addcartdata ||this.addcartdata.length==0){
    alert('please select something first')
    this.childcomponent1=false
    
   }

   this.xyz=Object.keys(this.forlooparray).length;
   console.log(this.xyz)
   return this.xyz

}

public hello :any ="you selected"








































}
