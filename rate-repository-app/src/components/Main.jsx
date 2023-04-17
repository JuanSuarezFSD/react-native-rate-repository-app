import React from "react"
import { View} from "react-native"
import RepositoryList from "./RepositoryList.jsx"
import AppBar from "./AppBar.jsx"
import { 
    Redirect, 
    Route, 
    Switch 
} from "react-router-native"
import LogInPage from "../pages/Login.jsx"

const Main = () => {
   return(
    <View style={{ flex: 1}}>
        <AppBar />
         <Switch>
            <Route path="/" exact>
                <RepositoryList />
            </Route>
            <Route path="/singin" exact>
                <LogInPage />
            </Route>
           <Redirect to="/" />
        </Switch>
    </View>
   )  
}

export default Main