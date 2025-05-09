const mongoose = require("mongoose");

const MensSchema = new mongoose.Schema(

    {
        id_del_chat:String,
        emisor:String,
        contenido:String,
        tipo_de_mensaje:String,
    },{collection:"Mensajes"}
);

mongoose.model("Mensajes",MensSchema);