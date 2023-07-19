import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Notfound } from '../Pages/Notfound'
import { Dashboard } from '../Pages/Dashboard'
import { Repo } from '../Pages/Repo'
export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='*' element={<Notfound/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/repo' element={<Repo/>}/>
        </Routes>

    </div>
  )
}