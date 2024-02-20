import React from 'react'
import '../Styles/Products.css'

const Products = ({ data }) => {
    return (

        <div class="card" style={{ "width": "18rem" }}>
            <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
            <div class="card-body">
                <center>
                    <h5 class="card-title">{data.recipe.label}</h5>
                    <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                    <a href="#" class="btn btn-primary">Buy</a>
                </center>
            </div>
        </div>

    )
}

export default Products