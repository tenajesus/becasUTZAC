<template>
  <div class="q-pa-md">

    <q-form>
  
  <label>Estado de Nacimiento</label>
      <q-input
        filled
        v-model="name"
    />
    <label>Municipio o Ciudad</label>
      <q-input
        filled
        v-model="tel"
      />
      <label>Año de Nacimiento</label>
      <q-input
        filled
        type="email"
        v-model="correo"
      />
      <label>Colonia</label>
      <q-input
        filled
        type="text"
        v-model="matricula"
      />
      <label>Calle y Numero</label>
      <q-input
        filled
        type="text"
        v-model="grupo"
      />
      <label>CP</label>
      <q-input
        filled
        type="text"
        v-model="carrera"
      />
      <label>Teléfono de Contacto</label>
      <q-input
        filled
        v-model="name"
    />
    <label>Como te trasladas a la UTZAC ?</label>
      <q-input
        filled
        type="email"
        v-model="correo"
      />
      <label>Cuanto gastas en pasaje ?</label>
      <q-input
        filled
        type="number"
        v-model="matricula"
      />
      <label>Eres estudiante Foraneo ?</label>
       <q-toggle v-model="foraneo" label="SI / NO" />
       <div>
         <label>Trabajas Actualmente ?</label>
       <q-toggle v-model="trabajador" label="SI / NO" />
       </div>
      <div>
        <q-btn label="GUARDAR DATOS" type="submit" color="primary"/>
        <q-btn label="CANCELAR" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  matricula:"41801722"
})
</script>
