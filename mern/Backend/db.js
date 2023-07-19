// const mongoose = require('mongoose')
// module.exports = function (callback) {
//     const mongoDB= async()=>{
//     mongoose.connect('mongodb://localhost:2701/gofood', { useNewUrlParser: true }, async (err, result) => {
//         module.exports = function (callback) {
//                 if (err) console.log("---" + err)
//                 else {
                    
//                     console.log("connected to mongo")
//         }
//     }
// });
// }

//           module.exports= mongoDB;
// }
const mongoose = require('mongoose')
module.exports = function (callback) {
    mongoose.connect('mongodb://127.0.0.1:27017/gofood', { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo");
            const fetched_data= await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function(err,data){
            const foodCategory= await mongoose.connection.db.collection("foodCategory");
               fetched_data.find({}).toArray(function(err,catData){
                            if(err)console.log(error);
                            else{
                                global.food_items = data;
                                global.foodCategory= catData;
                            }
                            })
            })
        }
                })
            };
  