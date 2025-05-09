const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use (cors());
app.use(express.json());


app.listen (5000, function(){
    console.log("Se realizo la conexion al servidor")
})

const bbdd="Intercambio_de_conocimiento";
const url= "mongodb+srv://camilo03cc76cc:Camilo321@clustertaller2.q7aqaur.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=ClusterTaller2";

const connection = mongoose.connect(url);


connection.then(function(){
    console.log("Conectado a la BBD")
}).catch(function(err){
    console.log("La conexion Faloo: Erorr"
    +err);
});
require("./assets/ReunionesSchema.js");
require("./assets/UsuarioSchema.js");
require("./assets/ProyectosSchema.js");
require("./assets/NotificacionesSchema.js");
require("./assets/ModeracionSchema.js");
require("./assets/MensajesSchema.js");
require("./assets/MatchesSchema.js");
require("./assets/InteresesSchema.js");
require("./assets/HistorialDeParticipacionSchema.js");
require("./assets/FeedbackSchema.js");
require("./assets/ChatsSchema.js");

const Usuarios= mongoose.model("Usuarios");
const Reuniones = mongoose.model("Reuniones");
const Proyectos =mongoose.model("Proyectos"); 
const Notificaciones=mongoose.model("Notificaciones");
const Moderacion=mongoose.model("Moderacion");
const Mensajes=mongoose.model("Mensajes");
const Matches=mongoose.model("Matches");
const Intereses=mongoose.model("Intereses");
const Historial_de_participacion=mongoose.model("Historial_de_participacion");
const Feedback=mongoose.model("Feedback");

app.post("/registrar",async function(req,res)
{

    const {NombreCompleto, CorreoElectronico, rol, AreaDeConocimiento, habilidades, intereses, sexo, edad } = req.body;

    const usuarioExistente = await Usuarios.findOne({CorreoElectronico});

    if (usuarioExistente)
    {
        return res.send({
            status: false, 
            message:"El correo ya ha sido registrado"
        });
    }

    
    try {
        await Usuarios.create({
            NombreCompleto,
            CorreoElectronico,
            rol,
            AreaDeConocimiento,
            habilidades,
            intereses,
            sexo,
            edad
        });
    
        res.send({
            status:true, 
            message: "Usuario creado con exito"
        })
    }
    
    catch(error){
        res.send({
            status: false,
            message:"No se pudo crear el usuario",
            error: error.message
        });
    }

})

app.get("/usuarios-todos", async function(req,res){

    try{
        const usuarios = await Usuarios.find({}); 
        res.send({
            status:true,
            message:"Consulta Existosa",
            data:usuarios
        });
    }
    catch(error){
        res.send({
            status: false,
            message:"Error al consultar la Base de datos",
            error: error.message
        });
    }
});
app.get("/usuarios-todos/nombre-completo", async function(req,res){

    try{
        const usuarios = await Usuarios.find({},"NombreCompleto"); 
        res.send({
            status:true,
            message:"Consulta Existosa",
            data:usuarios
        });
    }
    catch(error){
        res.send({
            status: false,
            message:"Error al consultar la Base de datos",
            error: error.message
        });
    }
});

