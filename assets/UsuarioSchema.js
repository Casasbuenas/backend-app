const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(

    {
        Nombre:String,
        Apellido:String,
        NombreDeUsuario:String,
        Contraseña:String,
        ConfirmarContraseña:String,
        Día:Int32,
        Mes:String,
        Género:String,
        Intereses:String, 
    },{collection:"Usuarios"}
);

mongoose.model("Usuarios",UserSchema);
   