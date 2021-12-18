<template>
 <div class="text-green text-center q-pa-md">
       <q-card class="my-card bg-teal-1 text-black">
      <q-card-section>
        <div class="text-h7">Seleccione los archivos que desea capturar</div>
      </q-card-section>

      <q-card-section>
        <center>
        <input type="file" @change="onFileSelected">
        <br>
        <br>
        <br>
        <q-btn color="secondary" label="Cargar Archivo" @click="loadFile" />
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
      instrucciones:'Por favor cargue los archivos solicitados para concluir con el proceso',
      selectedFile:null,
      endpoint : '',
      formData : null
    }
  },
  methods:{
    onFileSelected(event){
    this.selectedFile = event.target.files[0]
    //console.log(event)
    },
    loadFile(){
     this.endpoint = "http://apoyos.utzac.edu.mx/Files/upload.php"
     this.formData = new FormData();
     this.formData.append("inpFile",this.selectedFile);

     fetch(this.endpoint, {
       method:"post",
       body:this.formData
     }).catch(console.error)
       .then(
         this.$q.notify({
        message: "Tu archivo ha sido enviado",
        color: "teal",
        position: "center",
      })
       )
    }
  }
})
</script>
