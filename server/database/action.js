const model = require('./model')

const actions={
  findUser: (req,res)=>{
    console.log('req.body', req.body)
    const {username} = req.body
    model.find({},(err,doc)=>{
      if(err){
        throw err
      }
      let isRegisted = doc.some(item=>item.username === username )
      console.log('isRegisted', isRegisted)
      res.json({
        success: true,
        message: `Welcome, captain ${username}`
      })
    })
  },
}

module.exports = actions