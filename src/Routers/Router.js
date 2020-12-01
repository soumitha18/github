import React from 'react'
import { Route } from 'react-router'
import { Repositories } from '../Componets/Repositories/index'
import { SearchPage } from '../Componets/SearchPage/index'

export const Router = () => {
    return (
        <div>
            <Route path="/" exact component={SearchPage} />
            <Route path="/user/:name" component={Repositories} />
        </div>
    )
}
