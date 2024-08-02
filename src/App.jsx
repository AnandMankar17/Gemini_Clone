import { useState } from 'react'
import SideBar from './components/sideBar/SideBar.jsx'
import MainBar from './components/mainBar/MainBar.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <MainBar/>
    </>
  )
}

export default App
