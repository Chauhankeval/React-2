import React from "react";
import { useState, useEffect } from "react";


const State = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([1]);

  useEffect(() => {
    async function Apidata() {
      const api = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const data = await api.json();
    }
    Apidata();

    document.title = `${state} employe`;
  }, [state]);

  return (
    <div>
      {" "}
      <>
        <p>state:{state}</p>
        <p>Data : {data}</p>
        <button onClick={() => setState(state + 1)}> Click me</button>
        <button onClick={() => setData(data + 1)}> Click me</button>

        {data.map((elment, index) => {
          return (
            <div key={index}>
              <p>{elment.title}</p>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default State;
