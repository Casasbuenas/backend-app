const mongoose = require("mongoose");

const ProyectSchema = new mongoose.Schema(

    {
        titulo: String,
        descripcion: String,
        categoria: String,
        habilidades_requeridas :String,
        modalidad: String,
        fecha_de_inicio: String,
        fecha_de_final: String,
        id_del_creador: String,
        estado:String,
        cupo_maximo_de_participante:String,
        participantes_activos:String,
    },{collection:"Proyectos"}
);

mongoose.model("Proyectos",ProyectSchema);