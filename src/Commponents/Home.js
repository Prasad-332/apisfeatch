import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css'
export default function Home() {
  return (
    <div className="App">
      <h1>FOODCOURT</h1>
      <div class="card">
        <img src="foodcourt.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">Recipe Foods</h3>
          <p class="card-text">special food on the special days</p>
          <Link to="/menu">
            <button type="button" className="btn btn-primary">
              menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
