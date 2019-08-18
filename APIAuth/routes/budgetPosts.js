const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {budgetSheetValidation, budgetRowValidation} = require('../validation');


router.post('/syncbudget',verify, (req, res) => {
    res.json({
            posts:  {
                title: 'this is a post',
                description: 'oh my! '        
        }})
});



router.get('/loadbudget',verify, (req, res) => {
    res.json({
            posts:  {
                title: 'this is a post',
                description: 'oh my! '        
        }})
});


router.post('/addsheet',verify, (req, res) => {
    //validate the data

   // const {error} = Joi.validate(req.body, schema);
   const {error} = budgetSheetValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
   //checkuser in database res.

   const emailExists = await User.findOne({email : req.body.email});
   
   if (!emailExists) return res.status(400).send('User does not exist!');
   
});

router.post('/addrow',verify, (req, res) => {
   //validate that the sheet id exists too????
   // const {error} = Joi.validate(req.body, schema);
   const {error} = budgetRowValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
   //checkuser in database res.

   const emailExists = await User.findOne({email : req.body.email});
   
   if (!emailExists) return res.status(400).send('User does not exist!');
   
});

router.post('/deletesheet',verify, (req, res) => {
     // const {error} = Joi.validate(req.body, schema);
   const {error} = budgetSheetValidation(req.body);

   if(error) return res.status(400).send(error.details[0].message);
   
  //checkuser in database res.

  const emailExists = await User.findOne({email : req.body.email});
  
  if (!emailExists) return res.status(400).send('User does not exist!');
  
});

router.post('/deleterow',verify, (req, res) => {
    // const {error} = Joi.validate(req.body, schema);
    const {error} = budgetRowValidation(req.body);

    if(error) return res.status(400).send(error.details[0].message);
    
   //checkuser in database res.

   const emailExists = await User.findOne({email : req.body.email});
   
   if (!emailExists) return res.status(400).send('User does not exist!');
   
});

