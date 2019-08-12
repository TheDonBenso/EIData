const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res)=> {

   //validate the data

   // const {error} = Joi.validate(req.body, schema);
   const {error} = registerValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
   //checkuser in database res.

   const emailExists = await User.findOne({email : req.body.email});
   
   if (emailExists) return res.status(400).send('email already exists');
   
   //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

   const user = new User({
       name: req.body.name,
       email: req.body.email,
       password: hashPassword
   });

   try{
    const savedUser = await user.save();
    //res.send(savedUser);
    res.send({user: user._id});
   }catch(err){
       res.status(400);
   }
});

router.post('/login', async (req, res) => {
    
   //validate the data

   // const {error} = Joi.validate(req.body, schema);
   const {error} = loginValidation(req.body);

   if(error) return res.status(400).send(error.details[0].message);
   
  //check email in database res.

  const user = await User.findOne({email : req.body.email});
  
  if (!user) return res.status(400).send('email doesnt exists');
  
//checking if password is correct

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword) return res.status(400).send('invalid password');


    //create and assign token
    const token = jwt.sign({_id : user._id}, 'MongoSecretToken');
    res.header('auth-token', token).send(token);

    res.send('login success');

});


module.exports = router;