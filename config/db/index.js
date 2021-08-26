const mongoose = require('mongoose')



async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tuanvu02:tuanvu02@cluster0.gjwyy.mongodb.net/Hapi-blog-post', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("--------Connect Successfully-----")
    } catch(error) {
        console.log('Connect failure!!!')
    }
}

module.exports = {connect}