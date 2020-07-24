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
    
    const globalPoviderValue = useMemo(
      () => ({
        resizing, setResizing,
        windowHeight, setWindowHeight,
        windowWidth, setWindowWidth,
      }),
      [
        resizing, setResizing,
        windowHeight, setWindowHeight,
        windowWidth, setWindowWidth,
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
      {/* <Router>
        <Route path="/"> */}
          <GlobalContext.Provider value={globalPoviderValue}>
            <SiteContainer />
          </GlobalContext.Provider>
        {/* </Route>
      </Router> */}
    </React.Fragment>
  );
}

export default App;
