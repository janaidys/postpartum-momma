const mongoose = require("mongoose");

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect("");
// }

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Mongoose is connected"))
    .catch((err) => console.log(err));