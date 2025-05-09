const mongoose = require("mongoose");

const InteresesSchema = new mongoose.Schema(

    {
        nombre_del_interes:String,
        descripcion:String,
    },{collection:"Intereses"}
);

mongoose.model("Intereses",InteresesSchema);