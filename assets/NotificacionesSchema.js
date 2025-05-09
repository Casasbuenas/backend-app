const mongoose = require("mongoose");

const NotiSchema = new mongoose.Schema(

    {
        usuario_destino:String,
        tipo:String,
        contenido:String,
        fecha:String,
        estado:String,
    },{collection:"Notificaciones"}
);

mongoose.model("Notificaciones",NotiSchema);