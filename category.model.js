const mongoose = require("mongoose");
const crypto = require('crypto');

const categorySchema = mongoose.Schema({
    uuid:{type: String, required: false},
    categoryName: {type: String, required: true, trim: true},
    categoryDesc: {type: String, required: false, trim: true},
    userUuid: {type: String, required: true}
},
{
    timestamps: true
});

// UUID generation
categorySchema.pre('save', function(next){
    this.uuid = 'CATE-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    console.log(this.uuid);
    next();
});

module.exports=mongoose.model('category',categorySchema, 'category');