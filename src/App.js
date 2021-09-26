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
    render(){
       
        const {products} = this.state;
        return(
            <div className="App">                
                <NavBar/>
                <Cart   
                products={products} 
                onIncreaseQuntity={this.increaseQuntity} 
                OnDecreaseQuntity={this.decreaseQuntity} 
                ondeleteProduct={this.deleteProduct}/>
            </div>
        );       
    }
}