import React, { useEffect } from "react"
// import avatar from "../images/avatar.png"
// import Navbar from "./Navbar"
import useFetch from "./hooks"
import "./App.css"
import Freelancer from "./Freelancer"
import Hire from "./Hire"
function Userpage(props){
   
    const [data, loading] = useFetch(
        ("http://localhost:3600/mydata/"+localStorage.getItem("id")+"/"+localStorage.getItem("email")+"")
      );
    useEffect(()=>{
                 console.log("enter hooks")

                return ()=>{
                          console.log("exiting")
                 }
     },[])
    
      
    

        return(
            <div>           
             {loading?'Loading':(data.result.category==='Freelancer')?
             <Freelancer data={data}/>
           :
             <Hire data={data}/>
        }
            </div>

        )
    
}



export default Userpage;