import React from 'react'
import {Switch, Route} from 'react-router-dom'
import News from '../News/News'
import HomePage from '../HomePage/HomePage'
import NotFound from '../NotFound/NotFound'

function Body() {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/news" component={News} exact/>
            <Route path='*' exact component={NotFound} />
        </Switch>
    )
}

export default Body
