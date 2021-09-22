import React from "react";

//if we want to change any things in state object we use setstate to change in state
//setstate it's the react fuction 
class CartItem extends React.Component{
    // constructor(){
        //super();
       // this.state={

     //  }}
     
     /*increeaseQty=()=>{
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
        
        
    }*/
    /*decrease=()=>{
        const{Qty}=this.state;
        if(Qty === 0){
            return ;
        }
        this.setState({
            Qty:this.state.Qty -1,

        },()=>{
            console.log('this.state',this.state);
        })
    
    }*/

    render(){ 
        const{title,price,Qty}=this.props.product;
        const{onIncreaseQuntity,OnDecreaseQuntity,product}= this.props;
        var Prices =true;
        if(this.props.product.Qty === 0){
            Prices=false;
        }
        return(
            <div style={styles.border}>
                <div style={item.itemLeft}>
                    <img style={styles.Image} alt=""></img>
                </div>
                <div style={item.itemRigt}>
                    <div style={{fontSize:"xxx-large"}}><b>{title}</b></div>
                    <div style={{fontSize:"x-large"}}> <b>Rs</b> :{Prices ? price*Qty : price} </div>
                    <div style={{fontSize:"x-large"}}><b>Qty</b>: {Qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase" className="action-icon" src="https://image.flaticon.com/icons/png/512/1828/1828926.png" onClick={()=>onIncreaseQuntity(product)}/>
                        <img alt="decrease" className="action-icon" src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={()=>OnDecreaseQuntity(product)}/>
                        <img alt="delete" className="action-icon" src="https://image.flaticon.com/icons/png/512/3096/3096687.png"/>
                    </div>
                </div>
            </div>
        
        );        
    }
}
const styles ={
    border :{
        display:"-webkit-inline-box",
        
    },
    Image:{
        height : 170,
        width:170,
        borderRadius : 4,
        backgroundColor:"#9e9e9e61"
    }
}
const item ={
    itemLeft:{
        padding:39,
        paddingTop:26
        
    },
    itemRigt:{
        paddingTop:12    ,
        paddingLeft:0,
        paddingBottom:6
    }
}

export default CartItem