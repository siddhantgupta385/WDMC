const router = require('express').Router();

let ScholershipModel = require('../models/scholership_model');
router.get('/get/:scholership_name',(req, res) => {
    const scholership_name = req.params.scholership_name
    console.log(scholership_name)
    ScholershipModel.find({ Name:scholership_name})
        .then(scholership => res.json(scholership))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.get("/:scholership_name",(req,res)=>{
    const scholership_name = req.params.scholership_name
    res.render("Scholership/s_index.hbs",{name:scholership_name});  
});
 
router.post('/Update',async (req,res)=>{

    const data=req.body;
    const vd= await ScholershipModel.findOne({Name:req.body.Name});
    //  const data1=ScholershipModel.find({});
    //  console.log(data1);
    // console.log("Data is: ",data1._id)
    // console.log("Come in:",req.body)
    //console.log("Come out")
    if(vd!=null){
       // console.log("Come In",vd)
    ScholershipModel.updateMany({"_id":vd._id},
        {$set:{'Content':data.Content }}, function (err, item) {
            if (err) {
                console.log(err);
                res.send('Error!');
            }
            else {
              
                res.send('Data Updated successfully!');
            }
        });
    }
    else{
        const obj={
            Name:req.body.Name,
            Content:req.body.Content
        }
       
        ScholershipModel.create(obj ,(err,item)=>{
            if(err){
                console.log(err);
                res.send('!Error!');
            }
            else {
                item.save();
                res.send('Added successfully!');
            }
        })
    }

  })


module.exports = router;