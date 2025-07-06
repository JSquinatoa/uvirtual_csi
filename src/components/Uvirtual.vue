<template>
  <div class="contianer_uvirtual">

    <div class="cabecera">
        <div class="contactos">
          <img src="../recurso/phone-solid.svg" alt="n">          
          <p>Teléfono : (000) 123-456</p>
          <img src="../recurso/envelope-regular.svg" alt="n">
          <p>Correo electrónico : info@example.com</p>
        </div>
        <div class="configuraciones" >         
          <p class="idiomas"> <img src="../recurso/language-solid.svg" alt="">
            Español - Internacional (es) 
            <span>ˇ</span></p>
          <p style="font-size: 16px">Acceder</p>
        </div>
    </div>

    <div class="menu"></div>

    <div class="login"></div>

    <div class="footer"></div>

    <div class="copyright"></div>

  </div>
</template>

<script>
export default {};
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

.contactos{
  display: flex;
  gap: 10px;
  font-family: "Century Gothic", Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.contactos img{
  width: 16px;
  color: white;
}

.configuraciones{
  display: flex;
  gap: 20px;
  font-family: "Century Gothic", Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  align-items: center;
}

.idiomas{
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.idiomas p img {
  
}


/* Estilos para el menu */
.menu {
  height: 100px;
  background-color: #fff;
  padding: 5px 0;
}

/* Estilos para la pagina de login */
.login {
  height: 890px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #f8f9fa;
  background-image: linear-gradient(to right, #f8f9fa 0%, #dee2e6 100%);
}

/* Estilos para el footer */
.footer{
    height: 331px;
    background-color: #004671;
}

/* Estilos para el copyright */
.copyright{
    height: 29px;
    background-color: #111;
    padding: 10px 0;
}
</style>