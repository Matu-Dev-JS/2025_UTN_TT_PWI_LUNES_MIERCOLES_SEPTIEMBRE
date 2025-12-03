import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import { Route, Routes } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"



function App (){

  return (
    <div>
        {/* <ContactSidebar/> */}
        <Routes>
          {/* Cuando estemos en la ruta contact mostrar el h1 */}
          <Route 
            path="/" 
            element={
              <ChatScreen/>
            } 
          />
          <Route 
            path="/chat" 
            element={
              <MessagesScreen />
            } 
          />
        </Routes>
    </div>
  )
}

export default App

