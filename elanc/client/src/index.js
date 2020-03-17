import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Logout from "./component/Logout"
import Bidding from "./component/Bidding"
import DND from "./component/DND"
import Userpage from "./component/Userpage"
import FindFreelancer from "./component/FindFreelancer"
import FindHirer from "./component/FindHirer"
import ContactUs from "./component/ContactUs"
import HowWorks from "./component/HowWorks"
import Searched from "./component/Searched"
import ProfileHire from "./component/ProfileHire"
import ProfileFrees from "./component/ProfileFrees"
import Particular from "./component/Particular"
import Particular1 from "./component/Particular1"





class Home extends React.Component{

    doRedirect=()=>{
        let loggedIn=localStorage.getItem("user");
        console.log("done")
        if(loggedIn){
             return < Redirect to="/userpage"/>
        }
        else{
         return < Redirect to="/"/>
        }
   }



    render(){
        return (
            <Router>
            <div>
            </div>
            <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/userpage" component={Userpage}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/bidding" component={Bidding}/>
            <Route path="/findfrees" component={FindFreelancer}/>
            <Route path="/findhirer" component={FindHirer}/>
            <Route path="/contactUs" component={ContactUs}/>
            <Route path="/howWorks" component={HowWorks}/>
            <Route path="/searched" component={Searched}/>
            <Route path="/profileHire" component={ProfileHire}/>
            <Route path="/profileFrees" component={ProfileFrees}/>
            <Route path="/particular/:email" component={Particular}/>
            <Route path="/particular1/:email" component={Particular1}/>
            <Route component={DND}/>
             {this.doRedirect()}
            
            </Switch>
            </Router>

        )
    }
}
 

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
