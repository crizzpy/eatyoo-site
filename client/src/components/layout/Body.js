import React from 'react'
import { BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'

export const Body = () => {
    return (
        <div className="body-inner">
            <div className="body-bg">
                {/* <Redirect push to="/">
                    <Route exact path="/">
                        <div>Body</div>
                    </Route>
                </Redirect> */}
                <Switch>
                    <Route path="/">
                        <div>home</div>
                    </Route>
                    <Route path="/list">
                        <div>list</div>
                    </Route>
                    <Route path="/search">
                        <div>search</div>
                    </Route>
                </Switch>
                {/* Body */}
            </div>
        </div>
    )
}