
import React,{useState} from "react"
import "./Login.css"

function Bidding(props){

    let initialstate={
        projectId:'1',
        bidAmount :'',
        employer:'',
        charges :'',
        recieve :'',
        time :'',
        
        formValidation:{
       
            isBidAmountValid:true,
            isTimeValid:true,
            isFormValid:true
        }
    }

    const [user,userchange]=useState(initialstate);

    
 
    const onInputChange=(event)=>{
        const {name, value} = event.target;
        if(event.target.name==='bidAmount'){
        userchange({ ...user, [name]: parseInt(value),charges:event.target.value*0.04,recieve:(event.target.value*0.96),employer:localStorage.getItem('id')});
        }
        else{
            userchange({...user,[name]:value})
        }
         console.log("state")
     }





const validateForm=()=>{
        
       console.log("abc")

    let newValidation={
            isBidAmountValid:true,
            isTimeValid:true,
            isFormValid:true
    }
   
    if(!user.bidAmount){
        newValidation.isBidAmountValid=false
        newValidation.isFormValid=false
    }
    if(!user.time){
        newValidation.isTimeValid=false
        newValidation.isFormValid=false
    }

    userchange({ ...user, formValidation: newValidation });
    return newValidation.isFormValid;

}





    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log("come here")
        if(!validateForm()){
           return;
          }
          
          console.log("vdf")
          console.log(user.bidAmount)
          console.log(user.recieve)
          console.log(user.charges)
          console.log(user.time)
        //   userchange({...user,employer:localStorage.getItem('id')})
          console.log(user)
          fetch(`http://localhost:3600/makebid`,{
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




    
        
        return(
            
            <div>
                <div class="container mt-5 pt-5 content-center ">
                    <div class="row my-5"></div>
                    <div class="row my-5">
                        <div class="col-lg-4 "></div>
                        <div class="col-lg-4 login">
                              <div className="row ">
                                    <div class="col-md-2"></div>
                                    <div class="col-md-3 text-center"><a className="btn btn-outline-secondary my-2 px-3 justify-content-center" type="button">Project</a></div>
                                    <div className="col-md-2"></div>
                                    <div class="col-md-3 text-center"><a className="btn btn-outline-secondary my-2 px-3 justify-content-center" type="button">Employer</a> </div>
                                    <div className="col-md-2"></div>  
                                       

                              </div>
                                       
            <form  class="col-lg-12 loginForm border border-bottom-0" >
           <div class="form-group">
             <lable for="bidAmount">What is the full amount would you like to bid?</lable>
             <input id="bidAmount" type="text" name="bidAmount"  placeholder="enter amount" className={'form-control '+(!user.formValidation.isBidAmountValid && "is-invalid")} onChange={onInputChange}/>
            
           </div>
           <div class="form-group">
             <lable for="charges">eLance Charges</lable>
             <input id="charges" type="text" name="charges"  value={user.charges} className='form-control '  disabled/>
            
           </div>
           <div class="form-group">
             <lable for="recieve">You will recieve</lable>
             <input id="recieve" type="text" name="recieve" value={user.recieve}  className='form-control ' disabled/>
        
           </div>
           <div class="form-group">
             <lable for="time">Time taken to complete</lable>
             <input id="time" type="text" name="time"  placeholder="time" className={'form-control '+(!user.formValidation.isTimeValid && "is-invalid")} onChange={onInputChange}/>
            
           </div>
           
       
          <div class="form-group text-center">
           
          {/* <button type="submit" class="btn btn-lg btn-outline-secondary mx-5 p-0" type="button" onClick={handleSubmit}>Login</button> */}
          <a className="btn btn-outline-secondary btn-lg mx-5 p-0" type="button" onClick={handleSubmit} >SubmitBid</a>

         </div>
          


         </form>
          
           
          
                                  
                                      
                        </div>
                    </div>
                </div>




            </div>
        )
    }



export default Bidding;