import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import { Route, Routes } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './global.css'
import ContactListContextProvider from "./Context/ContactListContext"


function App (){

  return (
    <div>
        {/* <ContactSidebar/> */}
        <Routes>
          {/* Cuando estemos en la ruta contact mostrar el h1 */}
          <Route 
            element={<ContactListContextProvider/>}
          >
            <Route 
              path="/" 
              element={
                <ChatScreen/>
              } 
            />
            <Route 
              path="/chat/:contact_id" 
              element={
                <MessagesScreen />
              } 
            />
          </Route>

          <Route 
            path="/login" 
            element={
              <h1>Soy el login</h1>
            } 
          />
        </Routes>
    </div>
  )
}

export default App

