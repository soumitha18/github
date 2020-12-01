import React from 'react'
import { Route, Switch } from 'react-router'
import { Repositories } from '../Components/Repositories/index'
import { SearchPage } from '../Components/SearchPage/index'
import { Repository } from "../Components/Repository/index"
import { PageNotFound } from '../Components/ExtraComponents/PageNotFound'

export const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SearchPage} />
                <Route path="/user/:name" component={Repositories} />
                <Route path="/repo/:name/:repo" component={Repository} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}
