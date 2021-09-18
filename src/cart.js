import React from "react";
import CartItem from "./cartItem";


class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:"Watches",
                    Qty:5,
                    id:1
                },
                {
                    price:999,
                    title:"Phone",
                    Qty:1,
                    id:2
                },{
                    price:1999,
                    title:"Laptops",
                    Qty:10,
                    id:3
                }
            ]
        }

    }  
    render(){
        const {products} = this.state;
        return(<div className="cart">
            {
                products.map((product)=>{
                    return 
                        <CartItem 
                            product={product}
                            key={product.id}
                        />
                })
            }
        </div>
        );
    }
}

export default Cart