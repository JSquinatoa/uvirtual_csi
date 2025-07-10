<template>
  <div class="contianer_uvirtual">

    <div class="cabecera">
      <div class="contactos">
        <img src="../recurso/phone-solid.svg" alt="n" />
        <p>Teléfono : (000) 123-456</p>
        <img src="../recurso/envelope-regular.svg" alt="n" />
        <p>Correo electrónico : info@example.com</p>
      </div>
      <div class="configuraciones">
        <p class="idiomas">
          <img src="../recurso/language-solid.svg" alt="" />
          Español - Internacional (es)
          <span>ˇ</span>
        </p>
        <p style="font-size: 16px">Acceder</p>
      </div>
    </div>

    <div class="menu">
      <img src="../recurso/logo_uce.png" alt="" />
      <a href="">Página Principal</a>
    </div>

    <div class="container_login">
      <div class="login">
        <h1>Entrar a Universidad Central del Ecuador</h1>

        <div class="login_campos">
          <input type="text" placeholder="Nombre de usuario" v-model="nombre"/>
          <input type="password" placeholder="Contraseña" v-model="password"/>
          <button @click="guardarUsuario()" >Acceder</button>
          <a href="">¿Olvidó su contraseña?</a>
        </div>
        <div class="divisor"></div>
        <h2>Algunos cursos permiten el acceso de invitados</h2>
      </div>
    </div>

    <div class="footer"></div>

    <div class="copyright"></div>
  </div>
</template>

<script>
import { guardarUsuarioFachada } from "@/client/UvirtualClient.js";

export default {

  data(){
    return{
      nombre: "",
      password:"",   
    }
  },
  methods:{
    async guardarUsuario(){
      await guardarUsuarioFachada(this.nombre, this.password)
    }
  }
};
</script>

<style scoped>
.contianer_uvirtual {
  width: 100%;
  height: 100%;
}

/* Estilos para la cabecera */
.cabecera {
  height: 61px;
  background-color: #004671;
  padding: 0 40px;
  display: flex;
  position: sticky;
  top: 0%;
  color: white;
  justify-content: space-between;
  align-items: center;
}

.contactos {
  display: flex;
  gap: 10px;
  font-family: "Century Gothic", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.contactos img {
  width: 16px;
  color: white;
}

.configuraciones {
  display: flex;
  gap: 20px;
  font-family: "Century Gothic", Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
}

.idiomas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.idiomas img {
  width: 20px;
}

.idiomas span {
  margin-top: 20px;
  font-size: 30px;
  font-weight: 100;
  font-family: "Font Awesome 6 Free";
}

/* Estilos para el menu */
.menu {
  height: 100px;
  background-color: #fff;
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu img {
  width: 357px;
  height: 80px;
}

.menu a {
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  height: 40px;
  padding: 8px;
  color: #004671;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.menu a:hover {
  background-color: #f8f9fa;
  padding-top: 0px;
  padding-bottom: 0px;
}

/* Estilos para la pagina de login */
.container_login {
  height: 805px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #f8f9fa;
  background-image: linear-gradient(to right, #f8f9fa 0%, #dee2e6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

.login {
  width: 500px;
  height: 658px;
  padding: 3rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
}

.login:active {
  outline: none;
  box-shadow: none;
}

.login h1 {
  font-size: 1.875rem;
  font-weight: normal;
  color: #a28f23;
  line-height: 1.2;
  margin-top: 0;
  box-sizing: border-box;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  margin-bottom: 1.5rem;
}

.login_campos {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 0em;
  unicode-bidi: isolate;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  width: 404px;
  height: 215px;
}

input {
  color: #495057;
  background-color: #fff;
  border-color: #d5d5d5;
  box-shadow: none;
  font-size: 1.171875rem;
  line-height: 1.5;
  border-radius: 0.6rem;
  display: block;
  width: 100%;
  border: 1px solid #d5d5d5;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  padding-block: 10px;
  padding-inline: 16px;
  box-sizing: border-box;
  height: 45px !important;
}

.login_campos button {
  border-color: #eee;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  text-shadow: none;
  background: #004671;
  padding: 8px 16px;
  border: 0;
  box-shadow: none;
  height: 53px;
  outline: none;
  line-height: 2;
  border-radius: 5px;
  font-size: 1.171875rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  width: 100px;
}

.login_campos button:hover {
  background-color: #a28f23;
  border-color: #a28f23;
}

.login_campos a {
  margin-bottom: 1rem !important;
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  color: #004671;
  text-decoration: none;
}

.login_campos a:hover {
  text-decoration: underline;
  color: #a28f23;
}

.divisor {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-top: 1px solid #dee2e6;
  outline: none;
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  color: #656565;
}

h2 {
  font-size: 1.40625rem;
  font-weight: normal;
  color: #a28f23;
  margin-bottom: 0.5rem;
  margin-top: 0;
  box-sizing: border-box;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  line-height: 1.2;
}

/* Estilos para el footer */
.footer {
  height: 331px;
  background-color: #004671;
}

/* Estilos para el copyright */
.copyright {
  height: 29px;
  background-color: #111;
  padding: 10px 0;
}
</style>