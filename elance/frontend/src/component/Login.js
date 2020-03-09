
import React,{useState} from "react"
import "./Login.css"
// import { stateMapper } from '../store/reducer/store';
// import {connect} from "react-redux"



function LoginComponent(props){


    let initialstate={
            
        email :"",
        
        password:"",
        
        formValidation:{
       
            isEmailValid:true,
          
            isPasswordValid:true,
           
            isFormValid:true
        }
    }

    const [user,userchange]=useState(initialstate);

    
 
    const onInputChange=(event)=>{
        const {name, value} = event.target;

        userchange({ ...user, [name]: value });
         console.log("state")
     }


    //  handleSubmit=(event)=>{
    //     event.preventDefault();
      
    //     if(!this.validateForm()){
    //        return;
    //   }
    //     this.props.dispatch({
    //         type:"LOGIN_ACCOUNT",
    //         data:{
                
    //             email:this.state.email,
               
    //             password:this.state.password,
              

    //         }
    //     })

            


    //     if(localStorage.getItem("user")){
    //             console.log("something")
    //       this.props.history.push("/username");
    //     }

        
    // }





const validateForm=()=>{
        
       console.log("abc")


    let newValidation={
   
        isEmailValid:true,
      
        isPasswordValid:true,
       
        isFormValid:true
    }

   
    if(!user.email){
        newValidation.isEmailValid=false
        newValidation.isFormValid=false

    }
   
    if(!user.password){
        newValidation.isPasswordValid=false
        newValidation.isFormValid=false

    }
   
    
    

    userchange({ ...user, formValidation: newValidation });
    return newValidation.isFormValid;

}





    const handleSubmit=(e)=> {
        // console.log('LoginDetails',this.state);
        // const {username,password}=this.state;
        //e.preventDefault();
        e.preventDefault();
        console.log("come here")
        if(!validateForm()){
           return;
          }
          
          console.log("vdf")
        fetch('http://localhost:3600/loginit', {
          method:'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/text'},
          body: JSON.stringify(user)
      })
        .then( (data)=>data.json())
        .then(response=>{
            console.log(response.result)
            localStorage.setItem('user',response.result)
            console.log(response.result.id)
            localStorage.setItem('login',true);
            localStorage.setItem('id',response.result.id);
            localStorage.setItem('email',response.result.email);
            localStorage.setItem('category',response.result.category);
            userchange(initialstate);
            props.history.push('/userpage');
            
        })
        //   localStorage.setItem('user',response)
        //   if(localStorage.getItem("user")){
        //     console.log((response).username)
        //       this.props.history.push("/userpage");
        //   }
        
        .catch(function (error) {
          console.log(error);
        });
    }




    
        
        return(
            
            <div>
                <div class="container mt-5 pt-5 content-center  ">
                    <div class="row my-5"></div>
                    <div class="row my-5">
                        <div class="col-lg-4 "></div>
                        <div class="col-lg-4 login">
                              <div className="row ">
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4 text-center"> <span>Login</span> </div>
                                    <div className="col-md-4"></div>
                                       
                                       

                              </div>
                                       
            <form  class="col-lg-12 loginForm" >
           <div class="form-group">
             <lable for="email">Email</lable>
             <input id="email" type="email" name="email"  aria-describedby="emailhint" placeholder="enter email" className={'form-control '+(!user.formValidation.isEmailValid && "is-invalid")} onChange={onInputChange}/>
             <small id="emailhint" class="form-check-label" for="check">We'll nvr share</small>
           </div>
           <div class="form-group">
           
            <lable for="password">Password</lable>
            <input id="password" type="password" name="password"   placeholder="password" className={'form-control '+(!user.formValidation.isPasswordValid && "is-invalid")} onChange={onInputChange}/>
            
          </div>
       
          <div class="form-group text-center">
           
          {/* <button type="submit" class="btn btn-lg btn-outline-secondary mx-5 p-0" type="button" onClick={handleSubmit}>Login</button> */}
          <a className="btn btn-outline-secondary btn-lg mx-5 p-0" type="button" href="!#" onClick={handleSubmit} >Login</a>

         </div>
          


         </form>
           <div className="col-md-12 text-center my-2">
           <a href="!#" className="">Forget Password</a>  
           </div>
           <div className="col-md-12 text-center my-2">
           {/* <a href="" className="btn btn-outline-secondary" type="button">SignUp with Google</a>   */}
           <a className="btn btn-outline-secondary my-2" href="!#" type="button">SignUp with Google</a>

           </div>
           <div className="col-md-12 text-center my-2">
           {/* <a href="/signup" className="btn btn-outline-secondary" type="button">SignUp</a>   */}
           <a className="btn btn-outline-secondary my-2"  type="button" href="/signup">SignUp</a>

           </div>
                                  
                                      
                        </div>
                    </div>
                </div>




            </div>
        )
    }


let Login=(LoginComponent)
export default Login;