import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipesProvider from './context/RecipesProvider';
import MealRecipe from './pages/MealRecipe';
import DrinkRecipe from './pages/DrinkRecipe';
import FavoritesProvider from './context/FavoritesProvider';
import RecipeInProgress from './pages/RecipeInProgress';
// OPENING PR

function App() {
  return (
    <div>
      <RecipesProvider>
        <FavoritesProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/meals" component={ Meals } />
            <Route exact path="/drinks" component={ Drinks } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/done-recipes" component={ DoneRecipes } />
            <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
            <Route exact path="/meals/:id" component={ MealRecipe } />
            <Route exact path="/drinks/:id" component={ DrinkRecipe } />
            <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
            <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
          </Switch>
        </FavoritesProvider>
      </RecipesProvider>
    </div>
  );
}

export default App;
