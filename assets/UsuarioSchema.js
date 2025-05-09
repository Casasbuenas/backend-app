const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(

    {
        NombreCompleto:String,
        CorreoElectronico:String,
        rol:String,
        AreaDeConocimiento:String,
        habilidades:String,
        intereses:String,
        sexo:String,
        edad:String,
    },{collection:"Usuarios"}
);

mongoose.model("Usuarios",UserSchema);
   