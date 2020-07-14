import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from "./welcomePage/Welcome";
import NotFound from "./notFoundPage/NotFound";
import Recipes from "./recipesPage/Recipes";
import AddNewRecipe from "./addNewRecipePage/AddNewRecipe";
import EditRecipe from "./editRecipePage/EditRecipe";
import CustomAlert from "../ui/alert/Alert";
import Loader from "../ui/loader/Loader";

const App = () => {
  return (
    <React.Fragment>
      <CustomAlert
        elevation={5}
        autoHideDuration={4000}
      />
      <Loader/>
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/recipes' component={Recipes}/>
          <Route exact path='/add-new-recipe' component={AddNewRecipe}/>
          <Route exact path='/edit-recipe:id' component={EditRecipe}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
