<template>
  <div class="text-green text-center q-pa-md">
    <q-card class="my-card text-black">
      <q-card-section>
        <div class="text-h7">Status de tu solicitud</div>
      </q-card-section>

      <q-card-section>
        <center>
          <div class="row">
            <div class="col-6">
              <label>Fecha de Captura</label>
              <q-input bg-color="teal-2" outlined v-model="fecha_captura"/>
            </div>
            <div class="col-6">
              <label>Número de Folio</label>
              <q-input bg-color="teal-2" outlined v-model="folio"/>
            </div>
          </div>
        </center>
        <br>
        <div class="row">
            <div class="col-12">
              <label>Nombre</label>
              <q-input bg-color="teal-2" outlined v-model="nombre"/>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-12">
              <label>Te informamos que tu solicitud está:</label>
              <q-input bg-color="teal-2" outlined v-model="estatus"/>
            </div>
        </div>
      </q-card-section>

      <q-separator dark />
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contacto",
  data() {
    return {
      instrucciones:
        "Por favor cargue los archivos solicitados para concluir con el proceso",
      fecha_captura:'',
      folio:'',
      nombre:'',
      estatus:''
    };
  },
});
</script>
