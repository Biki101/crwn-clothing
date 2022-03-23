import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepaghe.component";
import ShopPage from "./pages/shoppage/shop.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
