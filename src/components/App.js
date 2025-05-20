import React, { useLayoutEffect } from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Item1 = () => {
  return (
    <>
      <h1>Item 1</h1>
      <p>Description for Item 1</p>
    </>
  );
};
const Item2 = () => {
  return (
    <>
      <h1>Item 2</h1>
      <p>Description for Item 2</p>
    </>
  );
};
const Item3 = () => {
  return (
    <>
      <h1>Item 3</h1>
      <p>Description for Item 3</p>
    </>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <h1>Item List</h1>
          <Layout />
          <Switch>
            <Route path="/items/1">
              <Item1 />
            </Route>
            <Route path="/items/2">
              <Item2 />
            </Route>
            <Route path="/items/3">
              <Item3 />
            </Route>
          </Switch>
        </>
      </BrowserRouter>
    </div>
  );
};
const Layout = () => {
  return (
    <ul>
      <li>
        <Link to="/items/1">Item 1</Link>
      </li>
      <li>
        <Link to="/items/2">Item 2</Link>
      </li>
      <li>
        <Link to="/items/3">Item 3</Link>
      </li>
    </ul>
  );
};
export default App;
