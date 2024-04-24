import React, { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";
import Modal1 from "./Modal1";


export default function Project() {
  const APP_ID = "a99bd604";
  const APP_KEY = "801b3f6953e413a5d229de1043ba6dbd";
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);

  const info = (propsItem) => {
    setDetail(propsItem);
  };

  useEffect(() => {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json.hits);
      });
    console.log(data);
  }, [query]);
  //    console.log(data)
  //    console.log(detail)
  return (
    <div>
      <h1>Rezept Blog</h1>
      
      <input
        placeholder="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{query}</p>
      <div className="row mt-4">

        {data &&
          data.map((item, key) => (
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6" >
          <Cards  label={item.recipe.label} mealType={item.recipe.mealType} url={item.recipe.url} image={item.recipe.image}/>
          <Modal1 ing={item.recipe.ingredients}/>
          </div>
          ))}
      </div>
      <div>
        {/* {detail !==""? (<p>{detail.recipe.yield}</p>):(<p></p>)}  */}
      </div>
    </div>
  );
}
