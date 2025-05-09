const mongoose = require("mongoose");

const ModSchema = new mongoose.Schema(

    {
       
    },{collection:"Moderacion"}
);

mongoose.model("Moderacion",ModSchema);