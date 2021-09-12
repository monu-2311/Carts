import React from "react";



class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:"Phone",
            Qty:1

        }
        //this.increeaseQty= this.increeaseQty.bind(this);

    }   
     increeaseQty=()=>{
        console.log("this",this);
    }

    render(){ 
        const{title,price,Qty}=this.state;
        
        return(
            <div style={styles.border}>
                <div style={item.itemRigt}>
                    <img style={styles.Image} alt=""></img>
                </div>
                <div style={item.itemRigt}>
                    <div><b>Phone</b> : {price}</div>
                    <div> <b>Rs</b> : {Qty}</div>
                    <div><b>Qty</b>: {title}</div>
                    <div className="cart-item-action">
                        <img alt="increase" className="action-icon" src="https://image.flaticon.com/icons/png/512/1828/1828926.png" onClick={this.increeaseQty}/>
                        <img alt="decrease" className="action-icon" src="https://image.flaticon.com/icons/png/512/992/992683.png"/>
                        <img alt="delete" className="action-icon" src="https://image.flaticon.com/icons/png/512/3096/3096687.png"/>
                    </div>
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
        height : 106,
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