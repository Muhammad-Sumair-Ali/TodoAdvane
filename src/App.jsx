import React, { useState } from 'react'
import Header from './Components/Header'
import MainApp from "./Todo/App"
const App = () => {
  const [theme, setTheme] = useState("light")

  const Inc = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme('dark')
    }
  }
  return (
    <>
      <Header
          theme={theme}
          Inc={Inc}
        />
     <div
      style={{ minHeight: "100vh" }}
      className={`d-flex justify-content-center bg-${theme} text-${theme === "dark" ? "light" : "dark"}`}>

        <MainApp/>

    </div>

    </>

  )
}

export default App;