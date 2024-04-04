export type users={
    id?:number;
    name?:string;
    email?:string;
    phone?:string;
    cakeName?:string;
    adress?:{
        landmark?:string;
        pincode?:string;
        city?:string;
        state?:string;
    };
    orderInformation?:{
        quantity?:number;
        totalamount?:number;
        deliverydate?:string;
    }
    
 }
