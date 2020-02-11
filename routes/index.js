const express = require('express');
const {Content} = require('../models');
const router = express.Router();


router.get('/', (req, res, next) => {
    Content.findAndCountAll({})
    .then((results)=>{
            if(results.count == 0){
                console.log(results);
                res.render('index',{
                count : 0,
                results,
            });
            }else{
                console.log(results);
                res.render('index',{
                count : results.count,
                results,
            });
        }
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    });

});

router.post('/content', async (req, res, next) => {
    try { 
        await Content.create({
      content: req.body.content
    })
   } catch(err) {
       console.error(err)
       next(err)
   }
});

module.exports = router;