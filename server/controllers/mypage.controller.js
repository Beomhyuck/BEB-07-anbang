const Estate = require('../models/estate');
const jwt = require('jsonwebtoken');

module.exports ={

    mypage : async(req,res,next)=>{
        const authorization = req.headers['authorization'];
        console.log(req)
        if (!authorization) {
          return res.status(400).json({ data: null, message: 'invalid access token' });
        }
    
        try {
          const token = authorization.split(' ')[1];
          const data = jwt.verify(token, process.env.ACCESS_SECRET);
    
          if(data){
            const userEstate = await Estate.findAll({
                where :{
                    owner : data.id,
                }
            })
            return res.status(200).json({userEstate});
          }
          
          return res.status(400).json({ data: null, message: 'invalid access token' });
        } catch (err) {
          res.status(400).json({ data: null, message: 'invalid access token' });
        }
    }
}