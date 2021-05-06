const db=require("./db")

const login = (req, username, password) => {
    return db.Account.findOne({ username}).then(data => {
        if (data) {
            if (password == data.password) {
                req.session.currentUser = data;
                return {
                    status: true,
                    statusCode: 200,
                    message: "Authentication Successful",
                    name: data.name
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 422,
                    message: "Incorrect Password!"
                }
            }
        }
        else {
            return {
                status: false,
                statusCode: 422,
                message: "No user Exist!"
            }

        }

    });
}
const signUp = (req,username,password,name,pincode,phone,gender)=>{
    return db.Account.findOne({ username }).then(data => {

        if (data) {
            return {
                status: false,
                statusCode: 422,
                message: "User Exists! Please Login "
            }
        }
        else {
            const newUser = new db.Account({
                username,
                password,
                name,
                pincode,
                phone,
                gender
            });
            newUser.save();
            return {
                status: true,
                statusCode: 200,
                message: "Registration Successful!"
            }

        }
    });

}

module.exports={
    login,
    signUp
}