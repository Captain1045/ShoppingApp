const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/my_cart", { useNewUrlParser: true,useUnifiedTopology: true });
const Account = mongoose.model("Account", {
    username:String,
    password:String,
    name:String,
    pincode:Number,
    phone:Number,
    gender:String
});
module.exports = {
    Account
}
