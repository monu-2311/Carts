import React from "react";

//if we want to change any things in state object we use setstate to change in state
//setstate it's the react fuction 
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
        //setState form -1 in which we give the object to it
        //this.setState({
        //    Qty: this.state.Qty+1, //react take this object and it will merge with state object and it will do shellow  merging        
        //})        

        //setState form 2 in which we using the privesious value
        this.setState((perviousState)=>{
            return{
                Qty:perviousState.Qty + 1,
            }
        },()=>{});
        
        
    }
    decrease=()=>{
        const{Qty}=this.state;
        if(Qty === 0){
            return ;
        }
        this.setState({
            Qty:this.state.Qty -1,

        },()=>{
            console.log('this.state',this.state);
        })
    
    }

    render(){ 
        const{title,price,Qty}=this.state;
        var Prices =true;
        if(this.state.Qty === 0){
            Prices=false;
        }
        return(
            <div style={styles.border}>
                <div style={item.itemRigt}>
                    <img style={styles.Image} alt=""></img>
                </div>
                <div style={item.itemRigt}>
                    <div><b>{title}</b></div>
                    <div> <b>Rs</b> :{Prices ? price*Qty : price} </div>
                    <div><b>Qty</b>: {Qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase" className="action-icon" src="https://image.flaticon.com/icons/png/512/1828/1828926.png" onClick={this.increeaseQty}/>
                        <img alt="decrease" className="action-icon" src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={this.decrease}/>
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