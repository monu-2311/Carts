import React from "react";
import "./cartItem.css";


class CartItem extends React.Component{
    render(){ 
        return(
            <div style={styles.border}>
                <div style={item.itemRigt}>
                    <img style={styles.Image} alt=""></img>
                </div>
                <div style={item.itemRigt}>
                    <div><b>Phone</b> : 8851489319</div>
                    <div> <b>Rs</b> : 999</div>
                    <div><b>Qty</b>: 1</div>
                </div>
            </div>
        
        );        
    }
}
const styles ={
    border :{
        border : "thick solid #5b5bd7",
        display:"-webkit-inline-box",
        width:"-webkit-fill-available"
        
    },
    Image:{
        height : 100,
        width:110,
        borderRadius : 4,
        backgroundColor:"#c2f0f0"
    }
}
const item ={
    itemLeft:{
        padding:39,
        paddingTop:7
        
    },
    itemRigt:{
        paddingTop:15,
        paddingLeft:17,
        paddingBottom:6
    }
}
export default CartItem