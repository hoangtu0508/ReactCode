import React, { useMemo, useRef, useState } from 'react'

const UseMemo = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleClickAdd = () => {
        setProducts([...products, {name: name, price: +price}])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)
        return result
    }, [products])
    console.log(products)

    return (
        <div>
            <h3>Use Memo</h3>
            <div>
                <h3>Name: </h3>
                <input onChange={(e) => setName(e.target.value) } ref={nameRef} value={name}></input>
                <h3>Price: </h3>
                <input onChange={(e) => setPrice(e.target.value)} value={price}></input><br/>
                <button onClick={() => handleClickAdd()}>Add product</button>
                <h3>Total: {total}</h3>
                <h3>List products</h3>
                <ul>
                {products.map((product, index) => (
                    <li key={index}>name: {product.name} - price: {product.price}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default UseMemo