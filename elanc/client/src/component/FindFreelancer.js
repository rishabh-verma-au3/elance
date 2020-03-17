import React,{useEffect} from "react"
import useFetch from "./hooks"
import Navbar from "./Navbar"
import "./frees.css"


export default function FindFreelancer(props){
    const [data, loading] = useFetch(
        ("http://localhost:3600/findfrees")
      );
    useEffect(()=>{
                 console.log("enter hooks")

                return ()=>{
                          console.log("exiting")
                 }
     },[])

    return <div >
      <Navbar/>
      <div className="container pt-5 mt-5">
      <div className="row pt-5 mt-5 px-3 border border-1 ">
           
           <ul class="list-group list-group-flush mx-1 unl">
           { loading?'Loading':data.result.map((item,index)=>(<li class="list-group-item row lsi" key={index}>
                         <div className="col-lg-12">         
                         <a  href={'/particular1/'+item.email}> <div className="col-lg-4 ">Name:{item.firstname}</div>
                        <div className="col-lg-4">Email:{item.email}</div>
                        <div className="col-lg-4">id:{item.id}</div></a>
                        </div> 


           </li>))}
          </ul>
           </div>
           </div>
    </div>


}