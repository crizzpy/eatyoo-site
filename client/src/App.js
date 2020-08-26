import React, {useState, createContext, useMemo, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './style/App.css'
import {SiteContainer} from './components/SiteContainer'
import {EventListeners} from './components/EventListeners'
import {BrowserRouter as Route, Router, Switch, Link} from 'react-router-dom'
// import create from 'zustand'
import Store from './Store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faAngleDown, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


library.add(fab, faEdit, faAngleDown, faTimesCircle)

export const GlobalContext = createContext(null);

function App() {

  useEffect(() => {
    console.log('rerender')
  }, [])

    const [loadProgress, setLoadProgress] = useState(null) 

    const [AVdishes, setAVdishes] = useState([]);
    const [AVlists, setAVlists] = useState([]);
    const [AVrecipes, setAVrecipes] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [lists, setLists] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [AVdishesLoaded, setAVdishesLoaded] = useState(null);
    const [AVlistsLoaded, setAVlistsLoaded] = useState(null);
    const [AVrecipesLoaded, setAVrecipesLoaded] = useState(null);
    const [dishesLoaded, setDishesLoaded] = useState(null);
    const [listsLoaded, setListsLoaded] = useState(null);
    const [recipesLoaded, setRecipesLoaded] = useState(null);

    
    const globalPoviderValue = useMemo(
      () => ({
        lists, setLists,
        listsLoaded, setListsLoaded,
        AVdishes, setAVdishes,
        AVlists, setAVlists,
        AVrecipes, setAVrecipes,
        dishes, setDishes,
        lists, setLists,
        recipes, setRecipes,
        AVdishesLoaded, setAVdishesLoaded,
        AVlistsLoaded, setAVlistsLoaded,
        AVrecipesLoaded, setAVrecipesLoaded,
        dishesLoaded, setDishesLoaded,
        listsLoaded, setListsLoaded,
        recipesLoaded, setRecipesLoaded,
      }),
      [
        lists, setLists,
        listsLoaded, setListsLoaded,
        AVdishes, setAVdishes,
        AVlists, setAVlists,
        AVrecipes, setAVrecipes,
        dishes, setDishes,
        lists, setLists,
        recipes, setRecipes,
        AVdishesLoaded, setAVdishesLoaded,
        AVlistsLoaded, setAVlistsLoaded,
        AVrecipesLoaded, setAVrecipesLoaded,
        dishesLoaded, setDishesLoaded,
        listsLoaded, setListsLoaded,
        recipesLoaded, setRecipesLoaded,
      ]
    );
    
  return (
    <React.Fragment>
      <Store>
        <GlobalContext.Provider value={globalPoviderValue}>
          <EventListeners>
            <SiteContainer />
          </EventListeners>
        </GlobalContext.Provider>
      </Store>
    </React.Fragment>
  );
}

export default App;
