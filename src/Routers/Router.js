import React from 'react'
import { Route } from 'react-router'
import { Followers } from '../Components/Followers/index'
import { Repositories } from '../Components/Repositories/index'
import { SearchPage } from '../Components/SearchPage/index'
import { Repository } from "../Components/Repository/index"

export const Router = () => {
    return (
        <div>
            <Route path="/" exact component={SearchPage} />
            <Route path="/user/:name" component={Repositories} />
            <Route path="/followers/:name" component={Followers} />
            <Route path="/repo/:name/:repo" component={Repository} />
        </div>
    )
}
