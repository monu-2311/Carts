import React from "react";
import Cart from "./cart";
import NavBar from "./navBar";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:"Watches",
                    Qty:0,
                    id:1,
                    img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                },
                {
                    price:999,
                    title:"Phone",
                    Qty:0,
                    id:2,
                    img:"https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80"
                },{
                    price:1999,
                    title:"Laptops",
                    Qty:0,
                    id:3,
                    img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80"
                }
            ]
        }

    }   
    increaseQuntity =(product) =>{
        console.log('Hello this',product);
        const{products}=this.state;
        const index = products.indexOf(product);
        products[index].Qty +=1;
        this.setState({
            products :products
        })
    }  
    decreaseQuntity=(product) =>{
        const{products} = this.state;
        const index = products.indexOf(product);
        if(products[index].Qty===0){
            return;
        }
        products[index].Qty -=1;
        this.setState({
            products
        })
    }
    deleteProduct=(id)=>{
        const{products}=this.state;
        const item = products.filter((item) =>item.id !==id);//[{}]
        this.setState({
            products:item
        })
    }
    getCartCount=()=> {
        const{products}= this.state;
        let count = 0;
        products.forEach((product)=>{
            count += product.Qty;
        })
        return count;
    }
    getCartPrice=()=> {
        const{products}= this.state;
        let Price = 0;
        products.forEach((product)=>{
            Price += product.price*product.Qty;
        })
        return Price;
    }
    render(){
       
        const {products} = this.state;
        return(
            <div className="App">                
                <NavBar counts={this.getCartCount()}/>
                <Cart   
                products={products} 
                onIncreaseQuntity={this.increaseQuntity} 
                OnDecreaseQuntity={this.decreaseQuntity} 
                ondeleteProduct={this.deleteProduct}/>               
               <div style={{padding:44,fontSize: "xx-large",fontFamily: "auto"}}>
                   <b>Total : </b>{this.getCartPrice()}
                </div>
               
            </div>
        );       
    }
}
export default App