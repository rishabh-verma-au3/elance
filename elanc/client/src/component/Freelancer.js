import React from 'react'
import avatar from "../images/avatar.png"
import Navbar from "./Navbar"

import "./App.css"


export default function Freelancer(props){
 
    return  <div className="my-0 ">
    <Navbar/>
    <div className="container mt-4 pt-4 mx-4">
       
       <div className="row pt-5 mt-3 justify-content-center">

             <div className="col-lg-4 fixed-left  ">
                     <div className="row">
                         <img src={avatar} alt="" style={{height:'40%',width:'40%'}} className="py-4 px-4 mx-3"  />
                         {/* {loading ? (
                            "Loading..."
                              ) : (
                                <div className="pt-4 mt-4 ml-0 pl-0 name ">{data.result.firstname} {data.result.lastname}/{data.result.category} </div>
                           )}  */}
                     <div className="pt-4 mt-4 ml-0 pl-0 name ">{props.data.result.firstname} {props.data.result.lastname}/{props.data.result.category} </div>

                     </div>
                     <div className="row py-4 px-4 mx-4">
                     <div className="row px-2 feeds1 rounded border border-dark">
                            <a className="btn btn-outline-secondary my-2" type="button" href="/profileFrees">Profile</a> 
                           
                         </div>
                        
                     </div>
                    
             </div>
             <div className="col-lg-8">
             <div className="row px-2 mb-1 feeds1 rounded border border-dark">
                     <form className="form-inline my-2 my-lg-0  inline-block form-search ">
                        <h6 className=" mr-sm-2 ">Search</h6><input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                         {/* <button className="btn btn-outline-secondary my-2" type="btn">Search</button> */}
                         <a className="btn btn-outline-secondary my-2" type="button" href="!#">Search</a>
                           </form></div>
                 <div className="row px-2 mb-1 feeds rounded border border-dark">
                     My Feed
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
}