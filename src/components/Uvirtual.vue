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
          <input type="text" placeholder="Nombre de usuario" v-model="nombre" />
          <input type="password" placeholder="Contraseña" v-model="password" />
          <button @click="guardarUsuario()">Acceder</button>
          <a href="">¿Olvidó su contraseña?</a>
        </div>
        <div class="divisor"></div>
        <h2>Algunos cursos permiten el acceso de invitados</h2>
        <button class="invitado">Entrar como persona invitada</button>
        <div class="divisor"></div>
        <div class="avisos">
          <p
            class="idiomas"
            style="color: #004671; margin-left: -30px; margin-top: -4px"
          >
            <img src="../recurso/language-solid.svg" alt="" />
            Español - Internacional (es)
            <span>ˇ</span>
          </p>
          <div class="divisor_vertical"></div>
          <button class="boton_aviso">Aviso de</button>
        </div>
      </div>
    </div>

    <div class="footer">
      <divc class="row">
        <div class="columna">
          <img src="../recurso/logo_uce.png" alt="" class="logo" />
          <p class="p_info">
            La Universidad Central del Ecuador, es la universidad más antigua y
            la segunda más grande por número de estudiantes de la República del
            Ecuador. Se ubica en el centro-norte de la ciudad de Quito, en la
            llamada ciudadela universitaria.
          </p>
        </div>

        <div class="columna links">
          <h2 class="h2_info">Información</h2>
          <a href="">Comunidad Moodle</a>
          <a href="">Soporte gratuito Moodle</a>
          <a href="">Desarrollo Moodle</a>
          <a href="">Documentación Moodle</a>
          <a href="">Moodle.com</a>
        </div>

        <div class="columna contacta">
          <h2 class="h2_info">Contacta</h2>
          <p>308 Negra Narrow Lane, Albeeze, New <br />york, 87104</p>
          <p>
            <img src="../recurso/phone-solid.svg" alt="n" /> Teléfono : (000)
            123-456
          </p>

          <p>
            <img src="../recurso/envelope-regular.svg" alt="n" /> Correo
            electrónico : <br />info@example.com
          </p>
        </div>

        <div class="columna">
          <h2 class="h2_info">Síguenos</h2>
          <div class="container_icons">
            <a href="" class="iconos twiter">
              <img
                src="../recurso/twitter-brands.svg"
                alt=""
                style="width: 24px"
              />
            </a>

            <a href="" class="iconos gplus">
              <img
                src="../recurso/google-plus-g-brands.svg"
                alt=""
                style="width: 30px"
              />
            </a>

            <a href="" class="iconos pinterest">
              <img
                src="../recurso/pinterest-p-brands.svg"
                alt=""
                style="width: 18px"
              />
            </a>

            <a href="" class="iconos facebook">
              <img
                src="../recurso/facebook-f-brands.svg"
                alt=""
                style="width: 15px"
              />
            </a>
          </div>
        </div>
      </divc>
    </div>

    <div class="copyright">
      <p>Copyright © 2025 - Dirección de Tecnologías de la Información</p>
    </div>
  </div>
</template>

<script>
import { guardarUsuarioFachada } from "@/client/UvirtualClient.js";

export default {
  data() {
    return {
      nombre: "",
      password: "",
    };
  },
  methods: {
    async guardarUsuario() {
      await guardarUsuarioFachada(this.nombre, this.password);
      this.nombre = "";
      this.password = "";
    },
  },
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
  width: 100%;
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

.invitado {
  border-color: #eee;
  cursor: pointer;
  background-color: #a28f23;
  height: 45px;
  outline: none;
  line-height: 2;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.9375rem;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: none;

  margin: 0;
}

.invitado:hover {
  background: #004671;
}

.avisos {
  display: flex;
  box-sizing: border-box;
  unicode-bidi: isolate;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  color: #656565;
  background-color: #fff;
}

.divisor_vertical {
  width: 1px;
  background-color: #dee2e6;
  height: 1.875rem;
  position: relative;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  align-self: center !important;
  border-left: 1px solid #dee2e6 !important;
  outline: none;
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  color: #656565;
}

.boton_aviso {
  border-color: #eee;
  cursor: pointer;
  background-color: #a28f23;
  height: 45px;
  outline: none;
  line-height: 2;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.9375rem;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  box-sizing: border-box;
  width: 50%;
}

.boton_aviso:hover {
  background: #004671;
}

/* Estilos para el footer */
.footer {
  height: 331px;
  background-color: #004671;
  padding: 30px 0 54px;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  color: #f8f9fa !important;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  padding-left: 40px;
  padding-right: 40px;
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  box-sizing: border-box;
  unicode-bidi: isolate;
  color: #f8f9fa !important;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  margin-left: auto;
}

.columna {
  padding: 25px 0 0;
  box-sizing: border-box;
  display: block;
  unicode-bidi: isolate;
  color: #f8f9fa !important;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
  flex: 0 0 25%;

  max-width: 25%;
  position: relative;
  width: 100%;
}

.logo {
  width: 200px;
  height: auto;
  object-fit: contain;
}

.p_info {
  color: #fff;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-seri;
}

.h2_info {
  font-weight: bold;
  line-height: 36px;
  margin: 0 0 20px;
  font-size: 34px;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
  align-items: flex-start;
}

.links a {
  padding-left: 0;
  outline: none;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: block;
  color: white;
}

.links a:hover {
  color: #a28f23;
  outline: none;
  text-decoration: none;
}
.contacta {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0px;
  font-size: 16px;
}

.contacta p {
  margin-bottom: 20px;
}

.contacta p img {
  width: 17px;
  padding-right: 5px;
}

.container_icons {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  unicode-bidi: isolate;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  justify-content: space-around;
}

.iconos {
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: #fff;
  display: inline-block;
  border-radius: 5px;
  text-decoration: underline;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  box-sizing: border-box;
  line-height: 60px;
  text-align: center;
}

.twiter {
  background-color: #47caf6;
}

.gplus {
  background-color: #e84c3d;
}

.pinterest {
  background-color: #cd2129;
}

.facebook {
  background-color: #cd2129;
}

/* Estilos para el copyright */
.copyright {
  height: 29px;
  background-color: #111;
  padding: 10px 0;
  text-align: center;
  color: #f8f9fa !important;
  font-size: 16px;
  font-family: Century Gothic, Arial, Helvetica, sans-serif;
}

.copyright p{
  padding-top: 2px ;

}
</style>