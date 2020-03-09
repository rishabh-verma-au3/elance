
import React,{useState} from "react"
import "./Login.css"




function  SignupCompo(props) {

    let initials={
        
      email :"",
      
      password:"",

      firstname:"",

      lastname:"",

      confirmPassword:"",

      category:"Freelancer",
      
      formValidation:{
     
          isEmailValid:true,
        
          isPasswordValid:true,
          isFirstnameValid:true,
          isLastnameValid:true,
          isConfirmPasswordValid:true,
          isHireValid:true,
          isFreelanceValid:true,

         
          isFormValid:true
      }}

      const [user,userchange]=useState(initials);



    const onInputChange=(event)=>{
      const {name, value} = event.target;

       userchange({ ...user, [name]: value });
     console.log("state")
      }

  const onHireChange=()=>{
      
      userchange({...user,
        category:"Hire"
      })
     
     
   console.log("Hire")
}

const onFreelanceChange=()=>{
  userchange({...user,
    category:"Freelancer"
  })
 
     
     
     
  console.log("Freelancer")
}





 const handleSubmit=(event)=>{
    event.preventDefault();
  
    if(!validateForm()){
       return;
  }

  
  console.log("vdf")
  fetch('http://localhost:3600/signupit', {
    method:'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/text'},
    body: JSON.stringify(user)
})
  .then( (data)=>data.json())
  .then(response=>{
      console.log(response)
      userchange(initials);
      props.history.push("/");
      
  })
  //   localStorage.setItem('user',response){
                    // "Authorization":'Bearer'+token,
                    // "content-type":'application/json'
                
  //   if(localStorage.getItem("user")){
  //     console.log((response).username)
  //       this.props.history.push("/userpage");
  //   }
  
  .catch(function (error) {
    console.log(error);
  });

    // if(localStorage.getItem("user")){
    //         console.log("something")
    //         localStorage.clear();
      
    // }

    

    
}

const validateForm=()=>{
        
       


    let newValidation={
   
      isEmailValid:true,
          
      isPasswordValid:true,
      isFirstnameValid:true,
      isLastnameValid:true,
      isConfirmPasswordValid:true,
      isHireValid:true,
      isFreelanceValid:true,

     
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
    if(!user.firstname){
      newValidation.isFirstnameValid=false
      newValidation.isFormValid=false

  }
  if(!user.lastname){
    newValidation.isLastnameValid=false
    newValidation.isFormValid=false

}
if(!user.confirmPassword){
  newValidation.isConfirmPasswordValid=false
  newValidation.isFormValid=false

}

   
    
    userchange({ ...user,
        formValidation:newValidation
    })


    return newValidation.isFormValid;

}



  
        return(
            <div>
                <div class="container mt-5 content-center">
                    <div class="row my-5"></div>
                    <div class="row my-5">
                        <div class="col-lg-4 "></div>
                        <div class="col-lg-4 login">
                              <div className="row ">
                                    <div class="col-md-4"></div>
                                    <div class="col-md-4 text-center"> <span>SignUp</span> </div>
                                    <div className="col-md-4"></div>
                                       
                                       

                              </div>
                              {
                            
                            !user.formValidation.isFormValid && <div className="text-danger">Invalid</div>
                        }               
            <form class="col-lg-12 loginForm" >
            <div className="row">
            <div class="form-group col-lg-6">
             <lable for="Firstname">Firstname</lable>
             <input id="firstname" type="text"  name="firstname"  placeholder="enter firstname" className={'form-control '+(!user.formValidation.isFirstnameValid && "is-invalid")} onChange={onInputChange}/>
             
           </div>
            <div class="form-group col-lg-6">
             <lable for="Lastname">Lastname</lable>
             <input id="lastname" type="text"  name="lastname" placeholder="enter lastname" className={'form-control '+(!user.formValidation.isLastnameValid && "is-invalid")} onChange={onInputChange}/>
            
           </div>
           
          </div>
          <div class="form-group ">
             <lable for="email">Email</lable>
             <input id="email"  type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"  aria-describedby="emailhint"  name="email" placeholder="enter email" className={'form-control '+(!user.formValidation.isEmailValid && "is-invalid")} onChange={onInputChange} required/>
             <small id="emailhint" class="form-text text-muted">We'll nvr share</small>
           </div>
          
          <div class="form-group ">
           
           <lable for="password">Password</lable>
           <input id="password" type="password"  placeholder="password" name="password" className={'form-control '+(!user.formValidation.isPasswordValid && "is-invalid")} onChange={onInputChange}/>
           
         </div>
         <div class="form-group">
           
            <lable for="Confirmpassword">Confirm Password</lable>
            <input id="password" type="password"   placeholder="Confirm password" name="confirmPassword" className={'form-control '+(!user.formValidation.isConfirmPasswordValid && "is-invalid")} onChange={onInputChange}/>
            
          </div>
            
          {
                            
                            (user.password===user.confirmPassword)?null:<h5>Enter the same password</h5>
                        }  

          <div class="form-group">
           
           <lable for="wantTo">You want to ?</lable>
           <div className="row">
               <div className="col-lg-4 offset-1"><button type="button" name="hire" className= {'btn-secondary-outline px-3 form-control '+(!user.formValidation.isHireValid && "is-invalid")} onClick={onHireChange}>Hire</button> </div>
               <div className="col-lg-4 offset-1"><button type="button" name="freelance"  className={'btn-secondary-outline px-2  form-control '+(!user.formValidation.isFreelanceValid && "is-invalid")} onClick={onFreelanceChange}>Freelance</button> </div>

           </div>


           
           
         </div>


        
          
       
          <div class="form-group text-center">
           
          <button type="submit" class="btn btn-lg btn-outline-secondary mx-5 p-0" onClick={handleSubmit}>Signin</button>
           
         </div>
          


         </form>
          
           <div className="col-md-12 text-center my-3">
           <a href="!#" className="btn btn-outline-secondary" type="button">SignUp with Google</a>  
           </div>
           
                                  
                                      
                        </div>
                    </div>
                </div>




            </div>
        )
    
}

let Signup=(SignupCompo)
export default Signup;