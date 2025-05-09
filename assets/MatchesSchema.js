const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema(

    {
        id_del_usuario:String,
        id_del_proyecto:String,
        fecha_de_match:String,
        estado:String,
    },{collection:"Matches"}
);

mongoose.model("Matches",MatchSchema);