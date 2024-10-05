import React, { createContext, useEffect, useState } from "react"


export const ShopContext = createContext(null)

const getDefaultcart = () => {
       let cart = {};
       for (let index = 0; index <300+1; index++) {
              cart[index]=0;
       }
       return cart;
}

const ShopContextProvider = (props) => {

       const[all_product,setAll_Product]=useState([]);

       const [cartItems, setCartItems] = useState(getDefaultcart())

       // useEffect(()=>{
              // fetch('http://localhost:4000/allproducts')
              // .then((response)=>response.json())
              // .then((data)=>setAll_Product(data))

              // if(localStorage.getItem("auth-token")){
                     // fetch('http://localhost:4000/getcart',{
                            // method:"POST",
                            // headers:{
                                   // Accept:'application/form-data',
                                   // 'auth-token':`${localStorage.getItem("auth-token")}`,
                                   // 'Content-Type':'application/json',
                            // },
                            // body:"",
                     //    }).then((response)=>response.json())
                     //    .then((data)=>setCartItems(data))  
              // }
              // },[])

              useEffect(() => {
                     // Fetch all products when component mounts
                     fetch('http://localhost:4000/allproducts')
                       .then((response) => response.json())
                       .then((data) => setAll_Product(data))
                       .catch((error) => console.error("Error fetching products:", error));
                   
                     // Check if user is authenticated
                     if (localStorage.getItem("auth-token")) {
                       fetch('http://localhost:4000/getcart', {
                         method: "POST",
                         headers: {
                           Accept: 'application/form-data',
                           'auth-token': localStorage.getItem("auth-token"),
                           'Content-Type': 'application/json',
                         },
                         body: "", // No body content required
                       })
                       .then((response) => response.json())
                       .then((data) => setCartItems(data)) // Set cart items in state
                     }
                   }, []); // Empty dependency array to run only once on component mount
                       

       const addToCart = (itemId) => {
              setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
              // console.log(cartItems);
              if(localStorage.getItem("auth-token"))
              {
                 fetch('http://localhost:4000/addtocart',{
                     method:"POST",
                     headers:{
                            Accept:'application/form-data',
                            'auth-token':`${localStorage.getItem("auth-token")}`,
                            'Content-Type':'application/json',
                     },
                     body:JSON.stringify({"itemId":itemId}),
                 })  
                 .then((response)=>response.json())
                 .then((data)=>console.log(data));  
              }
       }
       const removeFromCart = (itemId) => {
              setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
              if(localStorage.getItem('auth-token')){
                     fetch('http://localhost:4000/removefromcart',{
                            method:"POST",
                            headers:{
                                   Accept:'application/form-data',
                                   'auth-token':`${localStorage.getItem("auth-token")}`,
                                   'Content-Type':'application/json',
                            },
                            body:JSON.stringify({"itemId":itemId}),
                        })  
                        .then((response)=>response.json())
                        .then((data)=>console.log(data));  
              }
       }

       const getTotalCartAmount = () => {
              let totalAmount = 0;
              for (const item in cartItems) {
                     if (cartItems[item] > 0) {
                            let itemInfo = all_product.find((product) => product.id === Number(item))
                            totalAmount += itemInfo.new_price * cartItems[item];
                     }
                    
              }
              return totalAmount
       }

       // cart icon shows how many cart added in red circle
       const getTotalCartItems=()=>{
              let totalItem=0;
              for(const item in cartItems)
              {
                     if(cartItems[item]>0)
                     {
                            totalItem+=cartItems[item]
                     }
              }
              return totalItem
       }

       const contextValue = { getTotalCartItems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }
       return <ShopContext.Provider value={contextValue}>
              {props.children}
       </ShopContext.Provider>
}

export default ShopContextProvider
