import React, { useState } from "react"
import "./App.css"

import {Redirect} from "react-router-dom"
//import Userpage from "./Userpage"

import "./App.css"
import researching from "../images/remotly.png"
//import ten from "../images/10.jpg"
//import ten2 from "../images/eezy_02.jpg"
//import ten3 from "../images/eezy_04.jpg"
import standOut from "../images/standOut.png"
import logo from "../images/elance.jfif"
import programming from "../images/programming.png"
import programming1 from "../images/programming1.png"
import content from "../images/content.png"
import content1 from "../images/content1.png"
import Navbar from "./Navbar"
import design from "../images/design.png"
import design1 from "../images/design1.png"

import sales from "../images/sales.png"
import sales1 from "../images/sales2.png"

import flow from "../images/flow.png"
import scope from "../images/scope.png"

import iot from "../images/iot.png"


import dataScience from "../images/dataScience.png"
import dataScience1 from "../images/dataScience1.png"


import {Card,Carousel} from "react-bootstrap"



export default function Landing(props){
  
    const [inputSearch,setSearch]=useState('');

    const services=(e)=>{
        if(e.target.name==='vary'){
            console.log(e.target.name)
            localStorage.setItem('searched',inputSearch)
            setSearch('');
        }
        else{console.log(e.target.name)
            localStorage.setItem('searched',e.target.name)}
      

    }

   const searchChange=(e)=>{
       setSearch(e.target.value)
       console.log(inputSearch)
   }

    return <>
                   {/* Home */}

                   <section className="home container-fluid mb-3 px-3 mr-1 mt-3">
                   <div className="row mt-5">
                       <div className="col-lg-6 mt-5 pt-3">
                           <img className="img-fluid" alt="" src={researching}/>
                         
                       </div>


                       
                       <div className="col-lg-6 mt-2 py-3 pl-5 ">
                              <div class="container-fluid mt-4 py-2">
                             <div className="row pl-2 pr-2">
                                 
                                     
                                   <form className="form-inline my-2 my-lg-0  inline-block form-search ">
                                <h4 className="h4 mr-sm-2 ">Find the Best Talent</h4><input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={searchChange}/>
                                 {/* <button className="btn btn-outline-secondary my-2" type="btn">Search</button> */}
                                 <a className="btn btn-outline-secondary my-2" name="vary" href="/searched"  type="button" onClick={services}>Search</a>
                                   </form>
                                
                                        
                                        
                             </div>

                             <div className="row mt-3 pl-3 mb-5 ">
                                 <ul className="nav">
                                 <a className="btn btn-outline-secondary mx-1" name='Programming' href="/searched" type="button" onClick={services}>Programming</a>
                                 <a className="btn btn-outline-secondary mx-1" name='Design' href="/searched" type="button" onClick={services}>Design</a>
                                 <a className="btn btn-outline-secondary mx-1" name='Writing' href="/searched"  type="button" onClick={services}>Writing</a>
                                 <a className="btn btn-outline-secondary mx-1" name='Sales' href="/searched" type="button" onClick={services}>Sales</a>
                                 <a className="btn btn-outline-secondary mx-1" name='Data-Science' href="/searched"  type="button" onClick={services}>Data-Science</a>


                                 </ul>
                                 
                             </div>
                             
             
                            
                                <div className="row mr-6 mt-6  mb-0 pr-6 ">
                                <div className="container">
                               
                                   <img className="img-fluid pl-0 ml-0" alt="" src={standOut} />
                         
                             
                                    </div>   
                                      
                  
                    
              
     </div>

 
     </div>   

                       </div>
                   </div>
                 





               </section>

             {/* Success */}

             <section class="  success py-3 px-3">
             <div class="container-fluid   py-4">
             <h2 class="section-heading bg-light">Trusted by Hundreds Business worldwide</h2>
                  <div class="row pr-5 text-dark">
                  <div class="col-lg-1">
                         
                                  <i class="fa fa-users  ml-5 fa-4x "></i>
                            
                        </div>

                        <div class="col-lg-2 text-center">
                                     <h4 class="text-align-center  pt-2">10000 Employers</h4>
                                     
                        </div>
                        <div class="col-lg-1">
                         
                                 <i class="fa fa-file  ml-5 fa-4x "></i>
                   
               </div>

               <div class="col-lg-2 text-center">
                            <h4 class="text-align-center pt-2">Paid Invoice</h4>
                            
               </div>
               <div class="col-lg-1">
                         
                         <i class="fa fa-money  ml-5 fa-4x "></i>
                   
               </div>

               <div class="col-lg-2 text-center">
                            <h4 class="text-align-center pt-2">$200 million</h4>
                            
               </div> 
               <div class="col-lg-1">
                         
                         <i class="fa fa-heart ml-5 fa-4x "></i>
                   
               </div>

               <div class="col-lg-2 text-center">
                            <h4 class="text-align-center pt-2">99% Satisfaction</h4>
                            
               </div>
                        
                       


                  </div>


             </div>



 </section>




  {/* Services */}
  <section className=" py-3 px-3">
             <div class="container-fluid bg-light  ">
             <h2 class="section-heading">Popular professional services</h2>
             </div>
       <div className="container-fluid py-1">
           <div className="row justify-content-center">
           <div className="col-lg-2 text-center popular" >
<Card  >
<Card.Img variant="top" src={design} className="card"/>
<Card.Body>
<Card.Link href="#" className="text-dark">Design</Card.Link>
</Card.Body>
</Card>
</div>
<div className="col-lg-2 text-center popular">
<Card >
<Card.Img variant="top" src={dataScience} className="card"/>
<Card.Body>
<Card.Link href="#" className="text-dark" >Data Science</Card.Link>
</Card.Body>
</Card>
 </div>
<div className="col-lg-2 text-center popular ">
<Card >
<Card.Img variant="top" src={programming} className="card"/>
<Card.Body>
<Card.Link href="#" className="text-dark" >Programming</Card.Link>
</Card.Body>
</Card>
</div>

<div className="col-lg-2 text-center popular">
<Card >
<Card.Img variant="top" src={content} className="card"/>
<Card.Body>
<Card.Link href="#" className="text-dark">Writing</Card.Link>
</Card.Body>
</Card>
</div> 
<div className="col-lg-2 text-center popular">
<Card>
<Card.Img variant="top" src={sales} className="card"/>
<Card.Body>
<Card.Link href="#" className="text-dark">Sales</Card.Link>
</Card.Body>
</Card>
 </div>
 
 </div>
 </div>









 </section>     

 {/* flow */}
 <section  className="pt-5 mt-5" id="work">
             <div class="container-fluid  pt-2  mb-0">
             <h2 class="section-heading bg-light  mb-0">How it works</h2> 
             </div>
    
            <div className="container-fluid mt-0">
                   <div className="row justify-content-center mt-0 pt-0">            
                   <div className="col-lg-10 offset-1 mt-0 pt-0">
                           <img className="img-fluid pt-0 mt-0" alt="" src={flow}/>
                         
                       </div>


                   </div>
              

            </div>
            


 </section>
   
 {/* Explore The talent */}
 <section className=" py-3 px-3 ">
             <div class="container-fluid  pt-2 ">
             <h2 class="section-heading bg-light">Explore the Talent</h2> 
             </div>

             <div class="container-fluid px-4 mx-2">
                <div className="row ">
                <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary" name='Data-Science' href="/searched"  type="button" onClick={services}>Data-Science</a></div>
                    <img className="img-fluid mt-3" src={dataScience1} alt=""/>
                    </div>
                    
                    <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary" name='Design' href="/searched" type="button" onClick={services}>Design</a></div>
                    <img className="img-fluid " src={design1} alt=""/>
                    </div>
                    <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary" name='Writing' href="/searched"  type="button" onClick={services}>Writing</a></div>
                    <img className="img-fluid " src={content1} alt=""/>
                    </div>
                    <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary" name='Sales' href="/searched" type="button" onClick={services}>Sales</a></div>
                    <img className="img-fluid " src={sales1} alt=""/>
                    </div>
                    <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary" name='Programming' href="/searched" type="button" onClick={services}>Programming</a></div>
                    <img className="img-fluid " src={programming1} alt=""/>
                    </div>
                    
                    <div className="col-xl-4 mt-3 mb-0">
                    <div className="col-sm-4 offset-sm-4"><a className="btn btn-outline-secondary">IOT</a></div>
                    <img className="img-fluid  " src={iot} alt=""/>
                    </div>
                </div>


             </div>

     

 </section>

 


  {/* Hire As scope */}
  
  <section >
             <div class="container-fluid  pt-2  mb-0 pb-0">
             <h2 class="section-heading bg-light  mb-0 pb-0" >Hire as Scope</h2> 
             </div>
            <div className="container-fluid mt-0 pt-0 ml-3">
                   <div className="row justify-content-center mt-0 pt-0">            
                   <div className="col-lg-10 offset-1 mt-0 pt-0">
                           <img className="img-fluid pt-0 mt-0" alt="" src={scope}/>
                         
                       </div>


                   </div>
              

            </div>
            


 </section>
   

       {/*Top Skills  */}
  <section className=" py-3 px-3 ">
             <div class="container-fluid  pt-2  mb-0 pb-0">
             <h2 class="section-heading bg-light  mb-0 pb-0" >Top Skills</h2> 
             </div>
     
     <div className="container-fluid py-4 ">
         <div className="row mx-5">
             <div className="col-md-3">
                    <ol>
                        <li>Android Developer</li>
                        <li>Facebook Developer</li>
                        <li>FrontEnd Developer</li>
                        <li>Game Developer</li>
                        <li>Java Developer</li>
                        <li>Javascript Developer</li>
                        <li>MobileApp Developer</li>
                    </ol>
             </div>
             <div className="col-md-3">
             <ol>
                        <li>Content Writer</li>
                        <li>Copy Writer</li>
                        <li>Writer</li>
                        <li>Sales Writer</li>
                        <li>Technical Writer</li>
                        <li>Wordpress Writer</li>
                        <li>SEO expert</li>
                    </ol>
             </div>
             <div className="col-md-3">
             <ol>
                        <li>Custemer Service</li>
                        <li>Database Administrator</li>
                        <li>Information Security Analyst</li>
                        <li>Social Media Manager</li>
                        <li>Virtual Assiatant</li>
                        <li>CCNA</li>
                        <li>IOT</li>
                    </ol>
             </div>
             <div className="col-md-3">
             <ol>
                        <li>Data Scientist</li>
                        <li>Graphic designer</li>
                        <li>Logo Designer</li>
                        <li>UI Designer</li>
                        <li>UX Designer</li>
                        <li>Web Designer</li>
                        <li>Portfolio Designer</li>
                    </ol>
             </div>
         </div>
     </div>
 </section>



    {/* Pricing */}

    {/* <section class="pricing py-5 bg-white">
         <div class="container">
             <h2 class="section-heading pb-5 ">Pricing</h2>
            <div class="row">
              <div class="col-md-3 card card-pricing text-center px-3 mb-4">
                        <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary shadow-lg text-white">EnterPrise</span>
                 <div class="bg-transparent card-header pt-4 border-0">
                     <h3 class="h1 font-weight-normal">$<span class="price">12</span><span class="h6 text-muted ml-2">/per month</span></h3>
                 </div>
                 <div class="card-body pt-0">
                     <ul class="list-unstyled mb-4 pb-4 ">
                         <li>Up to 5 user</li>
                         <li>Basic Support on github </li>
                         <li> Monthly update</li>
                         <li> Free Cancellation</li>
                     </ul>
                     <button type="button" class="btn btn-outline-secondary text-success mb-3">Order Now</button>
                 </div>

              </div>
              <div class="col-md-3 card card-pricing text-center px-3 mb-4 promote">
                     <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary shadow-lg text-white">EnterPrise</span>
              <div class="bg-transparent card-header pt-4 border-0">
                  <h3 class="h1 font-weight-normal">$<span class="price">12</span><span class="h6 text-muted ml-2">/per month</span></h3>
              </div>
              <div class="card-body pt-0">
                  <ul class="list-unstyled mb-4 pb-4 ">
                      <li>Up to 5 user</li>
                      <li>Basic Support on github </li>
                      <li> Monthly update</li>
                      <li> Free Cancellation</li>
                  </ul>
                  <button type="button" class="btn btn-primary text-success mb-3">Order Now</button>
              </div>

           </div>
           <div class="col-md-3 card card-pricing text-center px-3 mb-4">
                 <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary shadow-lg text-white">EnterPrise</span>
          <div class="bg-transparent card-header pt-4 border-0">
              <h3 class="h1 font-weight-normal">$<span class="price">12</span><span class="h6 text-muted ml-2">/per month</span></h3>
          </div>
          <div class="card-body pt-0">
              <ul class="list-unstyled mb-4 pb-4 ">
                  <li>Up to 5 user</li>
                  <li>Basic Support on github </li>
                  <li> Monthly update</li>
                  <li> Free Cancellation</li>
              </ul>
              <button type="button" class="btn btn-outline-secondary text-success mb-3">Order Now</button>
          </div>

       </div>
       <div class="col-md-3 card card-pricing text-center px-3 mb-4">
             <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary shadow-lg text-white">EnterPrise</span>
      <div class="bg-transparent card-header pt-4 border-0">
          <h3 class="h1 font-weight-normal">$<span class="price">12</span><span class="h6 text-muted ml-2">/per month</span></h3>
      </div>
      <div class="card-body pt-0">
          <ul class="list-unstyled mb-4 pb-4 ">
              <li>Up to 5 user</li>
              <li>Basic Support on github </li>
              <li> Monthly update</li>
              <li> Free Cancellation</li>
          </ul>
          <button type="button" class="btn btn-outline-secondary mb-3 text-success">Order Now</button>
      </div>

   </div>

            </div>



         </div>



 </section> */}

{/* 
 <!--footer--> */}

<footer class="footer mt-5 px-0 text-white ">
<div class=" text-center py-3">
<h2 class="py-3"><a href='/'><img src={logo} className="py-0 my-0"/></a></h2>
<div class="mx-auto heading-line"></div>
</div>

<div class="row mx-0 px-0 pb-0 mb-0 bg-dark">
<div class="col-lg-6 offset-lg-3 text-center">
<p>Connect with the best in-demand workforce available at Elance and explore till your limits</p>
<ul class="nav justify-content-center">
<li class="nav-item">
  <a class="nav-link" href="a">About-us</a>
</li>
<li class="nav-item">
 <a class="nav-link" href="a">Services</a>
</li>
<li class="nav-item">
 <a class="nav-link" href="a">Term and Condition</a>
</li>
<li class="nav-item">
 <a class="nav-link" href="a">Gallery</a>
</li>
</ul>
</div>
</div>
<div class="copyright text-center pb-3  pt-0 mt-0   bg-dark">
<p>Copyrighted &copy;2020</p>
<p>Vector design by <a href="https://www.vecterzy.com">vertorzy</a></p>
</div>
</footer>
    </>
}