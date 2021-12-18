<template>
<center>
  <q-layout>
      <div class="q-pa-xl" style="max-width: 800px">
        <q-card class="my-card" flat bordered>
          <q-parallax src="~assets/back.png" :height="200" />
          <q-card-section>
            <div class="text-caption">
              Universidad Tecnológica del Estado de Zacatecas
            </div>
            <!-- <div class="text-body2">Ingresa tus datos</div> -->
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  filled
                  v-model="matriculauser"
                  label="Matrícula"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Este campo es obligatorio',
                  ]"
                />

                <q-input
                  filled
                  type="password"
                  v-model="pass"
                  label="Password*"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Este campo es obligatorio',
                  ]"
                />

                <div>
                  <q-btn
                    label="Ingresar"
                    type="button"
                    @click="login()"
                    color="primary"
                  />
                  <q-btn
                    label="Limpiar"
                    type="reset"
                    color="teal"
                    
                    @click="reset()"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title class="text-subtitle2">
          Célula de Desarrollo de Software TICS - UTZAC
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
  </center>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",

  data() {
    return {
      matriculauser: "",
      pass: "",
      logueado: false,
    };
  },
  methods: {
    login() {
      if (!this.matriculauser || !this.pass) {
        this.logueado = false;
        this.$q.notify({
          message: "No haz ingresado ningun dato",
          spinner: true,
          timeout: 3000,
          color: "amber-10",
          position: "top-left",
        });
      } else {
        axios
          .get(
            "http://apoyos.utzac.edu.mx/stpsback/public/index.php/api/alumnos/" +
              this.matriculauser
          )
          .then((res) => {
            const data = res.data;
            // console.log(data);
            // console.log(data.length);
            

            if(data.length == 1){
            //console.log('Hasta ahora todo bien');
            let userdb = data[0].matricula;
            
            if(userdb) {
              //console.log(data);
              this.logueado = true;
              this.$q.notify({
                message:
                  "Bienvenido(a) " + data[0].nombre + " por favor espera",
                spinner: true,
                timeout: 2000,
                color: "green",
                position: "top-left",
              });
              this.$router.push({ name: "aplicacion", 
              params: { 
              logueado: this.logueado,
              matriculauser: this.matriculauser
               } });
            }
            } 
            else {
            this.$q.notify({
                message: "Tus datos no son correctos o no estan registrados",
                spinner: true,
                timeout: 3000,
                color: "red",
                position: "top-left",
              });
            }
        });
      }
    },
    reset() {
      this.matriculauser = "",
      this.pass = "",
      this.logueado = false
    },
  },
});
</script>
<style scoped>
body {
  background: red;
}
</style>
