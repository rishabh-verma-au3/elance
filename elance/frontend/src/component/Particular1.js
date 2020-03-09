import React, { useContext,useEffect } from "react";
import useFetch from "./hooks"
import {useParams} from "react-router-dom"
import Navbar from "./Navbar"
export default function Particular1(props){
       const param=useParams();
    const [data, loading] = useFetch(
        ("http://localhost:3600/Particular1/"+param.email+"")
      );
      
    useEffect(()=>{
                 console.log("enter hooks")

                return ()=>{
                          console.log("exiting")
                 }
     },[])
    
         
       
       return <>
              
        {loading?'Loading':
         <>
          <Navbar/>
          <div className="container py-5 my-5">
           
           <div className="row">
            
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <form  class="col-lg-5 border border-rounded border-1 border-dark pl-5" >
           <div class="form-group">
             <lable for="email">Email: </lable>
             <lable > {data.result.email}</lable>
           </div>
           <div class="form-group">
           
            <lable for="name">Name:</lable>
            <lable > {data.result.firstname} {data.result.lastname}</lable>
            
          </div>
          <div class="form-group">
           
            <lable for="service">Interest:</lable>
            <lable > {data.result.service}</lable>
            
          </div>
          {/* <div class="form-group">
           
           <lable for="xp">Experience:</lable>
           <lable > {data.result.xp}</lable>
           
         </div> */}
         <div class="form-group">
           
           <lable for="summary">Summary:</lable>
           <lable > {data.result.summary}</lable>
           
         </div>
       
          {/* <div class="form-group text-center"> */}
           
          {/* <button type="submit" class="btn btn-lg btn-outline-secondary mx-5 p-0" type="button" onClick={handleSubmit}>Login</button> */}
          {/* <a className="btn btn-outline-secondary btn-lg mx-5 p-0" type="button" href="!#" onClick={handleSubmit} >Login</a>

         </div> */}
          


         </form>
            </div>
            <div className="col-lg-2"></div>
           </div>
          </div>
         </>
       
       
       
       
       
       
       
       }
       
       </>



}