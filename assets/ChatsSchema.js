const mongoose = require("mongoose");

const ChatsSchema = new mongoose.Schema(

    {
        id_del_proyecto:String,
        participante:String,
        fecha_de_creacion:String,
    },{collection:"Chats"}
);

mongoose.model("Chats",ChatsSchema);