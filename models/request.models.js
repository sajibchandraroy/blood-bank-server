const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const requestSchema = new Schema({    
    name : { 
        type: String, 
        unique: true, 
        trim: true 
    },
    patientName : { 
        type: String, 
        unique: true,
        trim: true 
    }, 
    relation:{
        type: String,
        trim: true
    },
    mobileNumber : { 
        type: String, 
        unique: true,
        trim: true 
    }, 
    alternativeMobileNumber:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    bloodGroup:{
        type: String,
        trim: true
    },
    religion:{
        type: String,
        trim: true
    },
    presentAddress:{
        type: String,
        trim: true
    },
    union:{
        type: String,
        trim: true
    },
    postOffice:{
        type: String,
        trim: true
    },
    policeStation:{
        type: String,
        trim: true
    },
    district:{
        type: String,
        trim: true
    },
    weight:{
        type: String,
        trim: true
    },
    dateForRequirement:{
        type: String,
        trim: true
    },
    gender:{
        type: String,
        trim: true
    },
    dateOfBirth:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    }
}, 
{
        timestamps: true,
        versionKey : false
});


module.exports = mongoose.model('Request', requestSchema);
