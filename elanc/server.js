const express = require('express');
var User = require('./model/user');
var Bid = require('./model/bid');
var freelancer = require('./model/freelancer');
var hire=require('./model/hire');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3600;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(('/client/public')));
const path = require('path')
const dev=app.get('env') !== 'production'


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
// app.get("/",(req,res)=>{
//       console.log(PORT)
//     res.sendFile(path.join(__dirname,'/client/public/index.html'))
// })


app.post('/loginit',(req, res) => {
      console.log("Inside post");

        var email = req.body.email;
        var password = req.body.password;

        console.log(""+email +""+password)
           
     User.findOne({ where: { email:email,password:password } }).then(function (user) {
            // if (!user) {
              
            //     res.redirect('/login');
            // }
            //  else if (!user.validPassword(password)) {
            //     res.redirect('/login');
            // }
            //  else 
             {
                //localStorage.setItem('user',user)
                //req.session.user = user.dataValues;
                console.log(user.password)
                res.json({
                    result:user
                });

            }
        });
    });


    // For Register 
 app.post('/signupit',(req, res) => {
        console.log("Inside Register");
       console.log(req.body)
        User.create({
              firstname: req.body.firstname,
              email: req.body.email,
              password: req.body.password,
              lastname:req.body.lastname,
              category:req.body.category
          }).then(user => {
            //req.session.user = user.dataValues;
                console.log("registered")
            return res.status(200).json({ regSucceess: true })
            }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
        });
       
        
        //for data return

        app.get("/mydata/:id/:email",(req,res)=>{
                  console.log(req.params.id)
                  User.findOne({ where: { id:req.params.id,email:req.params.email } }).then(function (user) {
                    
                     {
                        console.log(user.password)
                        res.json({
                            result:user
                        });
        
                    }
                });
        })
app.post("/makebid",(req,res)=>{
            console.log(req.body.time)
            Bid.create({
                
                     bidAmount: req.body.bidAmount,
                     employer: req.body.employer,
                     charges: req.body.charges,
                     recieve:req.body.recieve,
                     time:req.body.time
            }).then(user => {
              //req.session.user = user.dataValues;
                  console.log("registered")
              return res.status(200).json({ regSucceess: true })
              }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
          });

app.get("/findfrees",(req,res)=>{
            console.log('enter')
            freelancer.findAll({ where: { category:'Freelancer'} }).then(function (user) {
              
               {
                 
                  res.json({
                      result:user
                  });
  
              }
          });
  })
app.get("/findhirer",(req,res)=>{
    console.log('enter')
    hire.findAll({ where: { category:'Hire'} }).then(function (user) {
      
       {
         
          res.json({
              result:user
          });

      }
  });
})
app.get("/searched/:service",(req,res)=>{
    console.log(req.params.service)
    freelancer.findAll({ where: { service:req.params.service } }).then(function (user) {
      
       {
          
          res.json({
              result:user
          });

      }
  });


})


app.post("/freeProfile",(req,res)=>{
    console.log(req.body)
    freelancer.create({
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        lastname:req.body.lastname,
        category:req.body.category,
        alma:req.body.alma,
        xp:req.body.xp,
        service:req.body.service,
        summary:req.body.summary

    }).then(user => {
      //req.session.user = user.dataValues;
          console.log("registered")
      return res.status(200).json({ regSucceess: true })
      }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
   
  });

  app.post("/hireProfile",(req,res)=>{
    console.log(req.body)
hire.create({
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        lastname:req.body.lastname,
        category:req.body.category,
        alma:req.body.alma,
        xp:req.body.xp,
        service:req.body.service,
        summary:req.body.summary,
        age:req.body.age,
        company:req.body.company

    }).then(user => {
      //req.session.user = user.dataValues;
          console.log("registered")
      return res.status(200).json({ regSucceess: true })
      }).catch(err => res.status(401).send({ regSucceess: false, errMsg: err }))
  
  });


  app.get("/Particular/:email",(req,res)=>{
    console.log(req.params.email)
    hire.findOne({ where: { email:req.params.email } }).then(function (user) {
      
       {
          console.log(user.password)
          res.json({
              result:user
          });

      }
  });
})
app.get("/Particular1/:email",(req,res)=>{
    console.log(req.params.email)
    freelancer.findOne({ where: { email:req.params.email } }).then(function (user) {
      
       {
          console.log(user.password)
          res.json({
              result:user
          });

      }
  });
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
