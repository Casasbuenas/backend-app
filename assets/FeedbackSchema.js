const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(

    {
        id_del_proyecto:String,
        id_del_usuario_que_deja_el_feedback:String,
        puntaje:String,
        comentarios:String,
        fecha:String,
    },{collection:"Feedback"}
);

mongoose.model("Feedback",FeedbackSchema);