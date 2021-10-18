<template>
  <div class="q-pa-md">

    <q-form>
    <label>Nombre del Alumno</label>
      <q-input
        filled
        v-model="name"
    />
    <label>Telefono</label>
      <q-input
        filled
        v-model="tel"
      />
      <label>Email</label>
      <q-input
        filled
        type="email"
        v-model="correo"
      />
      <label>Matricula</label>
      <q-input
        filled
        type="text"
        v-model="matricula"
      />
      <label>Grupo</label>
      <q-input
        filled
        type="text"
        v-model="grupo"
      />
      <label>Carrera</label>
      <q-input
        filled
        type="text"
        v-model="carrera"
      />

    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  age:15,
  name:""


})
</script>
