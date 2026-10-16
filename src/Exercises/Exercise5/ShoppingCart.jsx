import { useState } from "react";

const ShoppingCart = ()=>{
    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const handleAddProduct = ()=>{
        if(productName.trim() !== '' && productPrice !== ''){
            const newProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            }
            setProducts([...products, newProduct])
            setProductName(""),
            setProductPrice("")
        }
    }
    const removeProduct = (id)=>{
        const updatedProduct = products.filter(product => product.id !== id)
        setProducts(updatedProduct)
    }
    const decreasePrice = (id)=>{
        const updatedProducts = products.map(product =>(
            product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity - 1} : product
        ))
        setProducts(updatedProducts)
    }
    const increasePrice = (id)=>{
        const updatedProducts = products.map(product => (
            product.id === id ? {...product, quantity: product.quantity + 1} : product
        ))
        setProducts(updatedProducts)
    }
    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0)

    return(
        <div>
            <h1>Simple Shopping Cart</h1>
            <div>
                <h3>Add a product</h3>
                <input 
                type="text" 
                placeholder="Product Name"
                value={productName}
                onChange={(e)=>setProductName(e.target.value)}
                />
                <input 
                type="number"
                min={0}
                placeholder="Price"
                value={productPrice}
                onChange={(e)=>setProductPrice(e.target.value)}
                />
                <button onClick={handleAddProduct}>Add to Cart</button>
            </div>
            {
                products.length > 0 ?(
                    <div>
                        <h3>Products in Cart</h3>
                        <ul>
                            {
                                products.map(product => (
                                    <li key={product.id}>
                                        <strong>{product.name}</strong> -${product.price.toFixed(2)}
                                        <div>
                                            Quantity: 
                                            <button onClick={()=>decreasePrice(product.id)}>-</button>
                                            {product.quantity}
                                            <button onClick={()=>increasePrice(product.id)}>+</button>
                                        </div>
                                        <button onClick={()=>removeProduct(product.id)}>Remove</button>
                                    </li> 
                                ))
                               
                            }
                        </ul>
                        <h4>Total Price: ${totalPrice}</h4>
                    </div>
                ): <p>This Cart is empty.</p>
            }
        </div>
    )
}
export default ShoppingCart;