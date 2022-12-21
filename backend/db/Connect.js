const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = (url)=>{
return mongoose.connect(url, 
    {   useNewUrlParser: true
    
    })
}


//     .then(()=>{
//     console.log('Database Connected Successfully!')
// })
//     .catch((error)=>{
//     console.log(error)
// })

module.exports = connectDB;