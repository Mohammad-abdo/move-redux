import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { useSelector } from 'react-redux'

const AppRouting = () => {
  const language=   useSelector((state)=>state.language.language)
  return (
    <div>
           <div dir={`${(language=='en')?'ltr':'rtl'}`}>
            <Header/>
<div className="">
<Outlet/>
</div>
<Footer/>
           </div>

    </div>
  )
}

export default AppRouting
