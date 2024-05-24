const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/jihades',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const cartSchema= new mongoose.Schema({
    productid: { type: String, required: true, unique: true },
    contete: { type:Number, required: true },
    userid: { type: String }
});

const cartModel = mongoose.model('users', cartSchema);

module.exports = cartModel;
const ProductSchwma = new mongoose.Schema({
    title : {
        type : String,
        require : true, 
    },
    description : {
        type : String,
        require : true,
    },
    price :{
        type : Number,
        require : true,
    },
    quantity : {
    type : Number,
    require : true,
    defalut :0

},
},
{
    timestamps : true
})

const productModel =mongoose.model('Product',ProductSchwma)

module.exports = productModel;