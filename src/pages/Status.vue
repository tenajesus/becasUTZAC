<template>
  <div class="text-green text-center q-pa-md">
    <div class="row">
            <div class="col-4">
            </div>
            <div class="col-4">
              <label>Ingresa tu matricula</label>
              <q-input bg-color="teal-1" outlined v-model="matriculauser" 
              />
              <br>
              <q-btn
        color="teal"
        glossy
        text-color="white"
        icon-right="search"
        label="Verificar Status"
        @click="buscarRegistro(this.matriculauser)"
      />
            </div>
            <div class="col-4">
            </div>    
      </div>   
    <br>
    <q-card class="my-card text-black">
      <q-card-section>
        <div class="text-h7">Status de tu solicitud</div>
      </q-card-section>

      <q-card-section>
        <center>
          <div class="row">
            <div class="col-6">
              <label>Fecha de Captura</label>
              <q-input bg-color="teal-1" outlined v-model="fecha_captura"/>
            </div>
            <div class="col-6">
              <label>Número de Folio</label>
              <q-input bg-color="teal-1" outlined v-model="folio"/>
            </div>
          </div>
        </center>
        <br>
        <div class="row">
            <div class="col-12">
              <label>Nombre</label>
              <q-input bg-color="teal-1" outlined v-model="nombre"/>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-12">
              <label>Te informamos que tu solicitud está:</label>
              <q-input bg-color="teal-1" outlined v-model="estatus"/>
            </div>
        </div>
      </q-card-section>

      <q-separator dark />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
  name: "Contacto",
  data() {
    return {
      instrucciones:
        "Por favor cargue los archivos solicitados para concluir con el proceso",
      fecha_captura:'',
      folio:'',
      nombre:'',
      estatus:'',
      matriculauser:''
    };
  }, methods:{
    buscarRegistro(matriculauser) {
      
      if(!this.matriculauser){
        this.$q.notify({
        message: "No se ha ingresado la matricula, o no se encontró tu registro",
        color: "red",
        position: "top-right",
      });
      } else {
        axios
          .get("http://192.168.0.102/stpsback/public/index.php/api/solicitudes/"+matriculauser)
          .then((res) => {

              const data = res.data;
              console.log(data.length);
              
              // this.nombre = data[0].nombre;
              
              if(data.length > 0){
              this.folio = data[0].id;
              this.fecha_captura = data[0].fechacaptura;
              this.$q.notify({
                message: "Se ha localizado " + data.length + " registro",
                color: "teal",
                position: "top-right",
                icon:"done"
              });
              console.log(data.length);
              } else {
                this.$q.notify({
              message: "No se ha encontrado tu registro",
              color: "red",
              position: "top-right",
            });
              }
          });
      }
      
    },
  }
});
</script>
