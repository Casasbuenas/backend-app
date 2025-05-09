const mongoose = require("mongoose");

const MeetSchema = new mongoose.Schema(

    {
        id_del_proyecto: String,
        fecha: String,
        hora: String,
        enlace_virutal: String,
        participantes: String,
        objetivo_de_la_reunion:String,
        estado: String,
    },{collection:"Reuniones"}
);

mongoose.model("Reuniones",MeetSchema);