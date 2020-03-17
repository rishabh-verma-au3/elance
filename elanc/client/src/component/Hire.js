import React from 'react'
import avatar from "../images/avatar.png"
import Navbar from "./Navbar"

import "./App.css"


export default function Hire(props){
 
    return  <div className="my-0 ">
    <Navbar/>
    <div className="container mt-4 pt-4 ml-4 pl-4 ">
       
       <div className="row pt-5 py-1  ml-5 pl-2 justify-content-center">

             <div className="col-lg-3 pl-3  mx-3  ">
                     <div className="row">
                         <img src={avatar} alt="" style={{height:'40%',width:'40%'}} className="py-4 px-4 mx-3"  />
                     <div className="pt-4 mt-4 ml-0 pl-0 name ">{props.data.result.firstname} {props.data.result.lastname}/{props.data.result.category} </div>

                     </div>
                    
             </div>
             <div className="col-lg-3 mx-3  ">
                     {/* <div className="row"> */}
                         {/* <img src={avatar} alt="" style={{height:'40%',width:'40%'}} className="py-4 px-4 mx-3"  /> */}
                     {/* <div className="pt-4 mt-4 name " >Company  Name: </div>
                     <div className="pt-4 mt-4 ml-2 pl-0 name "> ABc */}
                      {/* {props.data.result.firstname} {props.data.result.lastname}/{props.data.result.category} */}
                       {/* </div>

                     </div>
                     */}
             </div>
             <div className="col-lg-3 mx-3   ">
                     <div className="row">
                         {/* <img src={avatar} alt="" style={{height:'40%',width:'40%'}} className="py-4 px-4 mx-3"  /> */}
                         <div className="pt-4 mt-4 ml-0 pl-0 name " >Email Address: </div>
                     <div className="pt-4 mt-4 ml-2 pl-0 name ">{props.data.result.email} </div>

                     </div>
                    
             </div>
             
             

       </div>

       <div className="container ml-5">
           <div className="row">
            
               <div className="col-lg-4 pr-2">
                
            
                     <div className="row pl-4">
                            
                           <div className=""><a className="btn btn-outline-secondary my-2 px-3 justify-content-center" href="!#" type="button">Chat</a></div>
                           <div className=""><a className="btn btn-outline-secondary my-2" type="button" href="/bidding">Bidding</a></div>
                           <div className=""><a className="btn btn-outline-secondary my-2" type="button" href="/profileHire">About Me</a></div>


                        
                        
                     </div>
                    
             </div>
             <div className="col-lg-8">
             
                 <div className="row px-2 mb-1 feeds rounded border border-dark">
                     Projects:
                 </div>
                 <div className="row px-2 feeds1 rounded border border-dark">
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>

                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>

                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>

                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>
                    <div> My Feed</div>

                    <div> My Feed</div>
                     
                 </div>
                 
             </div>
               </div>
           </div>
          

       
       </div>
    </div>
}