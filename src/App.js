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
          <Route path='/album/:id' component={Album} />
          <Route path='/picture/:id' component={Picture} />
        </div>
      </BrowserRouter>
    )
  }
})
