import { useState } from 'react'

const ProductForm = () => {
    const names = ["AMD Ryzen 9 7950X","AMD Ryzen 7 7800X3D", "Ryzen 5 7600X"]
    const prices = [650, 450, 250]

    return (
        <div>
            <label>Product: </label>
            <select>
            {names.map((name, index) => (
            <option key={index} value={index}>
              {name} ({prices[index]}€)
            </option>))}
            </select>
        </div>
    )
}


export default ProductForm