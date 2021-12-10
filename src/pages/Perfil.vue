<template>
  <center>
    <div class="q-pa-md">
      <q-btn
        color="secondary"
        icon-right="restart_alt"
        label="Cargar Datos"
        @click="confirmarmatricula()"
      />
    </div>
  </center>
  <div class="q-pa-md">
    <q-form>
      <label>Nombre del Alumno</label>
      <q-input filled v-model="nombre" bg-color="teal-1" />
      <label>Unidad</label>
      <q-input filled v-model="unidad" bg-color="teal-1" />
      <label>Especialidad</label>
      <q-input filled type="email" v-model="especialidad" bg-color="teal-1" />
      <label>Matricula</label>
      <q-input filled type="text" v-model="matricula" bg-color="teal-1" />
      <label>Grupo</label>
      <q-input filled type="text" v-model="grupo" bg-color="teal-1" />
      <label>Carrera</label>
      <q-input filled type="text" v-model="carrera" bg-color="teal-1" />
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      carrera: "",
      grupo: "",
      matricula: "",
      unidad: "",
      especialidad: "",
      nombre: "",
    };
  },
  methods: {
    confirmarmatricula() {
      // this.registros = [];
      axios
        .get("http://localhost/stpsback/public/index.php/api/alumnos")
        .then((res) => {
          const data = res.data;
          this.matricula = data[0].matricula;
          this.carrera = data[0].carrera;
          this.grupo = data[0].grupo;
          this.unidad = data[0].unidad;
          this.especialidad = data[0].especialidad;
          this.nombre = data[0].nombre;

          // console.log(data);
          // console.log(res);
        });
    },
  },
});
</script>
