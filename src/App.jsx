
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRouting from './AppRouting'

import MovieList from './Components/MovieList/MovieList'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store';
import MovieDetails from './Components/MovieDetails/MovieDetails'
import LoginForm from './Components/adduser/adduser'
import Users from './Components/userLogo/users'
const router= createBrowserRouter([{
  path:"/",
  element:<AppRouting/>,
  children:[
    {index:true,element:<MovieList/>},
    {path:"movieList",element:<MovieList/>},
    { path:"movie/:id", element:<MovieDetails/>},
    { path:"/login", element:<LoginForm/>},
    { path:"/user", element:<Users/>}
  ]
}])

function App() {


  return (
    <div>
      <Provider store={store}>

    <RouterProvider router={router}/>
      </Provider>

       </div>
  )
}

export default App
