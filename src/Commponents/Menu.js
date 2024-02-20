
import '../Styles/Menu.css'
import React, { useEffect, useState } from 'react';
import Products from './Products';

export default function Menu() {

  const [data, setData] = useState([]);
  const [searchVal,setSearchVal] = useState("");



  // const submitHandler= e=>{
  //   e.preventDefault();

  //   fetch(`https://api.edamam.com/search?q=&app_id=6d988bbd&app_key=b79b63d623a6c53244ada71fae8f52bb&from=0&to=30&calories=591-722&health=alcohol-free`)
  //   .then(response => response.json())
  //   .then(data => setData(data.hits))

  // }

  useEffect(() => {
    getAllItems()
  }, [])


  const getAllItems = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=&app_id=6d988bbd&app_key=b79b63d623a6c53244ada71fae8f52bb&from=0&to=30&calories=591-722&health=alcohol-free`);
      const data = await response.json()
      setData(data.hits)
      console.log(data.hits)
    } catch (error) {
      console.log("error")
    }
  }

  const searchedItems = data.filter(each=>{
    // console.log(each.recipe.label,"search","-",searchVal,"-")
    return each.recipe.label.toLowerCase().includes(searchVal.toLowerCase()) 
  })
  console.log(searchedItems)

  return (

    <div className='Mainpage'>
      <h2>Wellcome to Food court</h2>
      <input type='search' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}  />
      <br/>
      <div className='display-flex' style={{border:"1px solid red",width:"100%",display:"flex",flexWrap:"wrap"}}>
        {
          searchedItems.map(each => {
            return <Products key={each.recipe.calories} data={each} />
          })
        }
      </div>
    </div>

  )
}
