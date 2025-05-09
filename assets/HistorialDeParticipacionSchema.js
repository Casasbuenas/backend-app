const mongoose = require("mongoose");

const HPSchema = new mongoose.Schema(

    {
        id_del_usuario:String,
        id_del_proyecto:String,
        rol_en_el_proyecto:String,
        resultado:String,
        fecha_entrada:String,
        fecha_salida:String,
    },{collection:"Historial_de_participacion"}
);

mongoose.model("Historial_de_participacion",HPSchema);