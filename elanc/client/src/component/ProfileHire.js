import React,{useEffect,useState} from "react"
import Navbar from "./Navbar"
import useFetch from "./hooks"

export default function ProfileHire(props){
        
    const [data, loading] = useFetch(
        ("http://localhost:3600/mydata/"+localStorage.getItem("id")+"/"+localStorage.getItem("email")+"")
      );
    useEffect(()=>{
                 console.log("enter hooks")

                return ()=>{
                          console.log("exiting")
                 }
     },[])


    const initialstate={
        email:'',
        password :'',
        service:'',
        company:'',
        summary:'',
        age:'',
        alma :'',
        xp :'',
        category :'',
        firstname:'',
        lastname:''
        
    }

    const [user,userchange]=useState(initialstate);

    
 
    const onInputChange=(event)=>{
        const {name, value} = event.target;
        userchange({ ...user, [name]: value,password:data.result.password,email:data.result.email,category:data.result.category,firstname:data.result.firstname,lastname:data.result.lastname});
         console.log("state")
         
     }

    
     const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("come here")
        
    
          
          console.log("vdf")
          console.log(user.xp)
          console.log(user.email)
          console.log(user.password)
          console.log(user.service)
          console.log(user.summary)
          console.log(user.age)
          console.log(user.company)
          
          console.log(user)
          fetch(`http://localhost:3600/hireProfile`,{
          method:'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/text'},
          body: JSON.stringify(user)
          })
          .then( (data)=>data.json())
          .then(response=>{
              console.log(response)
              userchange(initialstate);
              props.history.push("/userpage");
              
          })
          
          .catch(function (error) {
            console.log(error);
          });



          
    }

    return <>
               <Navbar/>
                 <div className="container pt-5 mt-5">
                     <div className="row ml-3 my-3 justify-content-center">
                        <div className="col-lg-2 "></div>
                        <div className="col-lg-6 ">
                        { loading?'Loading':
                      
                      <form  class=" loginForm" >
                      <div class="form-group">
                      <lable for="email">Email</lable>
                      <input id="email" type="email" name="email"  value={data.result.email} aria-describedby="emailhint"  className='form-control ' disabled />
                       <small id="emailhint" class="form-check-label" for="check">We'll nvr share</small>
                      </div>
           <div class="form-group">
           
            <lable for="password">Password</lable>
            <input id="password" type="text" name="password"  value={data.result.password}  placeholder="password" className='form-control ' disabled/>
            
          </div>
          <div class="form-group">
           
            <lable for="service">Service</lable>
            <input id="service" type="text" name="service"   placeholder="service" className='form-control ' onChange={onInputChange}/>
            
          </div>
          <div class="form-group">
           
            <lable for="age">Age</lable>
            <input id="age" type="text" name="age"   placeholder="age" className='form-control ' onChange={onInputChange}/>
            
          </div>
          <div class="form-group">
           
            <lable for="company">Company</lable>
            <input id="company" type="text" name="company"   placeholder="company" className='form-control ' onChange={onInputChange}/>
            
          </div>
          <div class="form-group">
           
            <lable for="alma">Alma mater</lable>
            <input id="alma" type="text" name="alma"   placeholder="alma" className='form-control ' onChange={onInputChange}/>
            
          </div>
          <div class="form-group">
           
            <lable for="xp">Experience</lable>
            <input id="xp" type="text" name="xp"   placeholder="xp" className='form-control ' onChange={onInputChange}/>
            
          </div>
          <div class="form-group">
           
            <lable for="summary">Summary</lable>
            <textarea id="summary" type="text" name="summary"   placeholder="summary" row="5" className='form-control ' onChange={onInputChange}/>
            
          </div>
       
          <div class="form-group text-center">
           
          {/* <button type="submit" class="btn btn-lg btn-outline-secondary mx-5 p-0" type="button" onClick={handleSubmit}>Login</button> */}
          <a className="btn btn-outline-secondary btn-lg mx-5 p-0" type="button" onClick={handleSubmit}  >Submit</a>

         </div>
          


         </form>
                          
                    
                    }

                     





                        </div>
                        <div className="col-lg-3 mr-3 "> </div>

                     </div>
                 </div>
           </>
}