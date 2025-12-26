import './App.css'
import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <>
    <h1>Context Api</h1>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  )
}

export default App
