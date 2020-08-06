import React, {useState, createContext, useMemo, useEffect} from 'react';
import logo from './logo.svg';
import './style/App.css'
import {SiteContainer} from './components/SiteContainer'
import {BrowserRouter as Route, Router, Switch, Link} from 'react-router-dom'

export const GlobalContext = createContext(null);

function App() {
    const [resizing, setResizing] = useState(null);
    const [windowHeight, setWindowHeight] = useState(null);
    const [windowWidth, setWindowWidth] = useState(null);
    const [lists, setLists] = useState(null);
    const [listsLoaded, setListsLoaded] = useState(null);
    const [adminViewDishes, setAdminViewDishes] = useState(null);
    const [adminViewLists, setAdminViewLists] = useState(null);
    const [adminViewRecipes, setAdminViewRecipes] = useState(null);

    
    const globalPoviderValue = useMemo(
      () => ({
        resizing, setResizing,
        windowHeight, setWindowHeight,
        windowWidth, setWindowWidth,
        lists, setLists,
        listsLoaded, setListsLoaded,
        adminViewDishes, setAdminViewDishes,
        adminViewLists, setAdminViewLists,
        adminViewRecipes, setAdminViewRecipes,
      }),
      [
        resizing, setResizing,
        windowHeight, setWindowHeight,
        windowWidth, setWindowWidth,
        lists, setLists,
        listsLoaded, setListsLoaded,
        adminViewDishes, setAdminViewDishes,
        adminViewLists, setAdminViewLists,
        adminViewRecipes, setAdminViewRecipes,
      ]
    );

    useEffect(() => {
      window.addEventListener('resize', () => {
        if (!resizing) {
          setResizing(true)
          console.log('resizing')
        }
      })

    }, [])

  return (
    <React.Fragment>
          <GlobalContext.Provider value={globalPoviderValue}>
            <SiteContainer />
          </GlobalContext.Provider>
    </React.Fragment>
  );
}

export default App;
