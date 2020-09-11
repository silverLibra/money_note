import React, { useCallback, useEffect, useState } from "react"
import { HashRouter as Router } from "react-router-dom"
import SignIn from "@containers/SignIn"
import { useMappedState } from 'redux-react-hook'
import './index.css'
import { auth } from "@firebaseUtils/index"
import { setUser } from "@store/user/action"


function Application() {
  const user = useMappedState(useCallback(state => state.user, []))
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      setUser(userAuth).then(()=>{
        setLoading(false)
      })
    })
  }, [])

  return loading
    ? <p>Loading</p>
    : (user.isLogin
        ? (
          <>
            <h1>Hello</h1>
            <p>{user.email}</p>
          </>
        )
        : <Router>
          <SignIn path="/"/>
        </Router>
    )
}

export default Application