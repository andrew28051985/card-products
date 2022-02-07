import React from "react";
import { products, main } from "/src/mock";
import AllComponents from "/src/all-components/all-components";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";
import MainPage from "/src/main-page/main-page";
import { GlobalStyle } from "./styles";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MainPage data={main} />
          </Route>
          <Route path="/catalog" exact>
            <Catalog products={products} />
          </Route>
          <Route
            path="/product/:code"
            exact
            render={(props) => {
              const product = products.find(
                (product) => product.code.toString() === props.match.params.code
              );
              return (
                <Layout>
                  {product ? (
                    <AllComponents product={product} />
                  ) : (
                    <h1>404 страница не найдена</h1>
                  )}
                </Layout>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
