<template>
  <q-layout> 
  <center>
      <div class="q-pa-xl" style="max-width: 600px">
     <q-card class="my-card" flat bordered>
       <q-parallax
        src="~assets/back.png"
        :height="200"
      />
      <q-card-section>
        <div class="text-caption">Universidad Tecnológica del Estado de Zacatecas</div>
        <!-- <div class="text-body2">Ingresa tus datos</div> -->
        <q-card-section>
         <q-form 
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="user"
        label="Matrícula"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
      />

      <q-input
        filled
        type="pass"
        v-model="pass"
        label="Password*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Este campo es obligatorio']"
              
      />

      
      <div>
        <q-btn label="Ingresar" type="button" @click="login()" color="primary"/>
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-card-section>
      </q-card-section>
    </q-card>
  

  </div>
  </center> 
  <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title class="text-subtitle2">
            <center>
            Desarrollado por la Célula de Desarrollo de Software de la UTZAC
            </center>
            </q-toolbar-title>
        </q-toolbar>
      </q-footer>
      </q-layout> 
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  data() {
    return {
      user: "",
      pass: "",
    };
  },
  methods: {
    login() {
      console.log(this.user)
      console.log(this.pass)

      // axios
      //   .get("http://localhost/stpsback/public/index.php/api/alumnos")
      //   .then((res) => {
      //     const data = res.data;
      //     this.matricula = data[0].matricula;
      //     this.carrera = data[0].carrera;
      //     this.grupo = data[0].grupo;
      //     this.unidad = data[0].unidad;
      //     this.especialidad = data[0].especialidad;
      //     this.nombre = data[0].nombre;
      //     console.log(res);
      //   });
    },
  },
});
</script>
<style scoped>
body{
  background: red;
}

</style>