<template>
  <div class="text-green text-center q-pa-md">
       <q-card class="my-card bg-teal-1 text-black">
      <q-card-section>
        <div class="text-h7">Seleccione los archivos que desea capturar</div>
      </q-card-section>

      <q-card-section>
        <center>
        <q-uploader
        url="http://localhost:4444/upload"
        label="Cargar Archivos"
        color="teal-3"
        text-color="black"
        flat
        bordered
      />
      </center>
      </q-card-section>

      <q-separator dark />
      
     </q-card>
 </div>
</template>
  
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Contacto',
  data(){
    return{
      instrucciones:'Por favor cargue los archivos solicitados para concluir con el proceso'
    }
  }
})
</script>
