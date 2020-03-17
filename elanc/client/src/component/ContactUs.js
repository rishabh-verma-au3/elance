import React from "react"
import Navbar from "./Navbar"


export default function ContactUs(props){



    return <div>
         <Navbar/>
         <section class="contact  py-5 my-5">
             <div>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk 
             </div>
             <div class="container bg-light my-3">
                 <h2 class="section-heading">Contact Us</h2>
                 <form class="col-lg-6 offset-lg-3">
                     <div class="form-group">
                         <label for="email">Email address</label>
                         <input type="email" id="email" class="form-control" aria-describedby="emailhelp" placeholder="enter the email"/>
                         <small id="emailhelp" class="form-text text-muted">we will never share your email with anyone else</small>
                     </div>
                     <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="text" class="form-control"  placeholder="enter the name"/>
                        </div>
                        <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="textarea" class="form-control" id="message" placeholder="type yuor meassage" row="5"></textarea>
                            </div>
                            <div class="form-group from-check">
                                <input type="checkbox" class="form-check-input"/>
                                <label class="form-check-label" for="check">Subscribe for the newsletter</label>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-lg btn-primary">Submit</button>
                            </div>
                 </form>
             </div>

         </section>
            
    </div>
}