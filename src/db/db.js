const mongoose = require('mongoose')
try {
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
})
console.log('MongoDB connected: ${connection.connection.host}');
}
 catch (error) {
console.log('MongoDB error when connecting: ${error}');
}