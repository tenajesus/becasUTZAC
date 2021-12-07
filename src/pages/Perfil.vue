<template>
  <div class="q-pa-md">

    <q-form>
    <label>Nombre del Alumno</label>
      <q-input
        filled
        v-model="nombre"
        bg-color="teal-1"
    />
    <label>Telefono</label>
      <q-input
        filled
        v-model="telefono"
        bg-color="teal-1"
      />
      <label>Email</label>
      <q-input
        filled
        type="email"
        v-model="correo"
        bg-color="teal-1"
      />
      <label>Matricula</label>
      <q-input
        filled
        type="text"
        v-model="matricula"
        bg-color="teal-1"
      />
      <label>Grupo</label>
      <q-input
        filled
        type="text"
        v-model="grupo"
        bg-color="teal-1"
      />
      <label>Carrera</label>
      <q-input
        filled
        type="text"
        v-model="carrera"
        bg-color="teal-1"
      />

    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data(){
    return{
      carrera:'',
      grupo:'',
      matricula:'',
      correo:'',
      telefono:'',
      nombre:''
    }
  }


})
</script>
