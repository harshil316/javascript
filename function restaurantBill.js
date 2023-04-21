// let foodMenuPrice = [{
//   id: '1',
//   item: 'Burger',
//   price: 10
// },
// {
//   id: '2',
//   item: 'Pizza',
//   price: 15
// },
// {
//   id: '3',
//   item: 'Fries',
//   price: 5
// }];

// let qty = 3;
// let gst = 0.15;

// let totalBill = 0;

// foodMenuPrice.forEach(function(item){
//   totalBill = totalBill + (item.price * qty);
// });

// totalBill = totalBill + (totalBill * gst);

// console.log("Total bill is : " + totalBill);






class foodMenu{
    proid;
    proname;
    proprice;
    proqty;
    constructor(proid,proname,proprice,proqty)
    {
        this.proid = proid;
        this.proname = proname;
        this.proprice = proprice;
        this.proqty = proqty; 
        // this.cancelIdleCallback(this.proprice,this.proqty);
    }
    call = function(proprice,proqty){
        // console.log(this.Total);
        this.Total = proprice * proqty;
        this.dic = Total * 0.5;
        this.gst = Total * 0.15;  
        // console.log("Total bill is : " + totalBill); 
    }
}
let customer1 = new foodMenu(101,"apple",100,10);
console.log(customer1.proid);
console.log(customer1.proname);
console.log(customer1.proprice);
console.log(customer1.proqty);
console.log(customer1);

