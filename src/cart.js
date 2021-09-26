import React from "react";
import CartItem from "./cartItem";


const Cart=(props)=>{
    const {products} = props;
        return(<div className="cart">
            {
                products.map((product) => {
                    return <CartItem product={product} key={product.id} onIncreaseQuntity={props.onIncreaseQuntity} OnDecreaseQuntity={props.OnDecreaseQuntity} ondeleteProduct={props.ondeleteProduct}/>
                })
            }
        </div>
        );
}

export default Cart