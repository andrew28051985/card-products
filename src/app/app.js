import React from "react";
import { products } from "/src/mock";
import AllComponents from "/src/all-components/all-components";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
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
  );
}

export default App;
