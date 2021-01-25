import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import StoreContainer from "./components/StoreContainer";
import CategoryContainer from "./components/CategoryContainer";
import Header from "./components/Header";
import CartDetails from "./components/CartDetails";
import Styled from "styled-components";

//styling
const AllContainer = Styled.div`
display: flex;
justify-content:center;
padding-top: 5%;
background: linear-gradient(21deg, rgba(115,226,15,0.7931547619047619) 2%, rgba(9,28,121,0.7147233893557423) 49%, rgba(0,168,255,0.4542191876750701) 88%);
height:100vh;
`;

function App() {
  const [parts, setParts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      console.log(res);
      setParts(res.data);
    });
  }, []);

  const cartRemove = (id, name) => {
    let deleteSingle = false;
    setCart({
      ...cart,
      items: cart.items.filter((item) => {
        if (Number(item.id) === Number(id) && item.name === name) {
          if (deleteSingle) {
            return item;
          }
          deleteSingle = true;
        } else {
          return item;
        }
      }),
    });
  };

  const cartAdd = (part) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, part],
    }));
  };

  return (
    <Router>
      <Header cart={cart} />
      <AllContainer>
        <div className="App">
          <Route exact path="/">
            <StoreContainer parts={parts} />
          </Route>
          <Route exact path="/category/:id">
            <CategoryContainer
              parts={parts}
              cartRemove={cartRemove}
              cartAdd={cartAdd}
              cart={cart}
            />
          </Route>
          <Route path="/cart">
            <CartDetails
              cart={cart}
              setCart={setCart}
              cartRemove={cartRemove}
            />
          </Route>
        </div>
      </AllContainer>
    </Router>
  );
}

export default App;
