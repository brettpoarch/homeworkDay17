import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import Album from './Album'
import Home from './Home'
import Picture from './Picture'
import './App.css'

export default React.createClass ({
  render: function (){
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/album/:id' component={Album} />
          <Route path='/album/picture/:id' component={Picture} />
        </div>
      </BrowserRouter>
    )
  }
})
