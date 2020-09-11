import React from "react"
import store from "@store/index"
import { StoreContext } from 'redux-react-hook'



function StoreProvider(props) {
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreProvider