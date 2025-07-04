<template>
  <div class="contianer_uvirtual">

    <div class="cabecera">
        <div class="contactos">

        </div>
        <div class="configuraciones">

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