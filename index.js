const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');




const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://camilo03cc76cc:Camilo321@clustertaller2.q7aqaur.mongodb.net/ClusterTaller2?retryWrites=true&w=majority&appName=ClusterTaller2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB', err));


const UsuarioSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  NombreDeUsuario: { type: String, unique: true },
  Contraseña: String,
  Día: String,
  Mes: String,
  Género: String,
  Intereses: [String],
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);




app.post('/register', async (req, res) => {
  try {
    const { Nombre, Apellido, NombreDeUsuario, Contraseña, ConfirmarContraseña, Día, Mes, Género, Intereses } = req.body;
    if (Contraseña !== ConfirmarContraseña) {
      return res.status(400).json({ status: false, message: 'Las contraseñas no coinciden.' });
    }
    
    const nuevo = new Usuario({ Nombre, Apellido, NombreDeUsuario, Contraseña, Día, Mes, Género, Intereses });
    await nuevo.save();
    res.json({ status: true, message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    console.error(error);
    let msg = 'Error al registrar.';
    if (error.code === 11000) msg = 'El nombre de usuario ya existe.';
    res.status(500).json({ status: false, message: msg });
  }
});




app.post('/iniciosesion', async (req, res) => {
  try {
    const { NombreDeUsuario, Contraseña } = req.body;
    const usuario = await Usuario.findOne({ NombreDeUsuario });
    if (!usuario || usuario.Contraseña !== Contraseña) {
      return res.status(400).json({ status: false, message: 'Usuario o contraseña incorrectos.' });
    }
   
    res.json({ status: true, message: 'Inicio de sesión exitoso.', data: {
      id: usuario._id,
      NombreDeUsuario: usuario.NombreDeUsuario,
      Nombre: usuario.Nombre,
      Apellido: usuario.Apellido
    }});
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Error interno en login.' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server en puerto ${PORT}`));
