const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://easybuy:mongoatlas1122@cluster0.vzmq9.mongodb.net/easybuy?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Access the collection directly with async/await
        const db = mongoose.connection.db;
        const fetched_data = await db.collection("product_itmes").find({}).toArray();
        const product_category = await db.collection("product_category").find({}).toArray();

        global.product_items = fetched_data
        console.log(global.product_items)
        global.product_category = product_category

        // Log the fetched data
        //console.log(fetched_data);
    } 
    catch (error) {
        console.error("MongoDB connection error ", error);
    }
};

module.exports = mongoDB;
