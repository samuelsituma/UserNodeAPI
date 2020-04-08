const mongoose = require('mongoose');
const db = 'mongodb+srv://root:Sam0702976476.@cluster0-pmdx8.mongodb.net/user-registration-db?retryWrites=true&w=majority'
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



// 'use strict'
// const mongoose = require('mongoose')
// const uri = 'mongodb+srv://root:Sam0702976764.@cluster0-pmdx8.mongodb.net/user-registration-db?retryWrites=true&w=majority';
// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }).
//   then(() => console.log('Connected')).
//   catch(err => console.log('Caught', err.stack));

// try {
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true ,
// })
// console.log('MongoDB connected: ${connection.connection.host}');
// }
//  catch (error) {
// console.log('MongoDB error when connecting: ${error}');
// }