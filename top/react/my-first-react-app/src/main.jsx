import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting.jsx'
import { MyFavoriteFood } from './MyFavoriteFood'
import HtmlToJSX from './HtmlToJSX.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <MyFavoriteFood />
    <HtmlToJSX />
  </React.StrictMode>,
)
