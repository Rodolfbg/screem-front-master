import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

  import Login from "./pages/login/login";
  import home from "../src/pages/home/menuFlix";
  import perfil from "./pages/perfils/perfilAcess";

  
  
  const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />        
                <Route path="/home" component={home} />
                <Route path="/perfil" component={perfil} />
            </Switch>
        </Router>
    )
};

export default Routes;