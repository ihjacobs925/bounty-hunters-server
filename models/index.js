// Require Mongoose
const MONGOOSE = require('mongoose');

// Connect
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});