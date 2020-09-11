import React from "react"
import "tailwindcss/dist/base.css"
import "tailwindcss/dist/components.css"
import "tailwindcss/dist/utilities.css"
import StoreProvider from "@store/StoreProvider"
import Application from "@containers/Application"

function App() {
  return <StoreProvider>
    <Application/>
  </StoreProvider>
}

export default App