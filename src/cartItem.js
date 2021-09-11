import React from "react";


class CartItem extends React.Component{
    render(){ 
        return(
            <div style={styles.border}>
                <div style={item.itemRigt}>
                    <img style={styles.Image} alt= "How"></img>
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
        
    },
    Image:{
        height : 110,
        width:110,
        borderRadius : 4
    }
}
const item ={
    itemLeft:{
        padding:10,
    },
    itemRigt:{
        padding:20,
        display: "inline block",
    }
}
export default CartItem