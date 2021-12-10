<template>
  <center>
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
        color="amber"
        glossy
        text-color="black"
        icon-right="touch_app"
        label="Confirmar Datos"
        @click="confirmarmatricula(this.matriculauser)"
      />
            </div>
            <div class="col-4">
            </div>    
      </div>   
    <br>
    <q-card class="my-card text-black">
      <q-card-section>
        <div class="row">
            <div class="col-6">
              <label>Matricula</label>
              <q-input bg-color="teal-1" disable outlined v-model="this.matricula"/>
            </div>
            <div class="col-6">
              <label>Status</label>
              <q-input bg-color="teal-1" disable outlined v-model="statusmatricula"/>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label>Nombre del Alumno</label>
              <q-input bg-color="teal-1" disable outlined v-model="nombre"/>
            </div>
            <div class="col-6">
              <label>Carrera</label>
              <q-input bg-color="teal-1" disable outlined v-model="carrera"/>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label>Cuatrimestre</label>
              <q-input bg-color="teal-1" disable outlined v-model="cuatri"/>
            </div>
            <div class="col-6">
              <label>Grupo</label>
              <q-input bg-color="teal-1" disable outlined v-model="grupo"/>
            </div>
          </div>
      </q-card-section>
      <q-separator dark />
    </q-card>
  </div>
  </center>
  <div class="q-pa-md">
    <q-form>
      <label>Tienes Alguna discapacidad motriz ?</label>
      <q-select filled v-model="disc" :options="sino" bg-color="teal-1" />
      <label>Eres Integrante de algún grupo indigena ?</label>
      <q-select filled v-model="indigena" :options="sino" bg-color="teal-1" />
      <label>Tu Familia recibe apoyo del programa oportunidades</label>
      <q-select
        filled
        v-model="oportunidades"
        :options="nosi"
        bg-color="teal-1"
      />
      <label
        >¿Eres beneficiario de algún apoyo (beca) Federal, Estatal y/o Municipal
        ?</label
      >
      <q-select
        filled
        v-model="becafederal"
        :options="nosi"
        bg-color="teal-1"
      />
      <label>Nombre de la Beca</label>
      <q-input filled type="text" v-model="apoyoadicional" bg-color="teal-1" />
      <label>Periodicidad con que recibes el apoyo</label>
      <q-input filled type="text" v-model="periodicidad" bg-color="teal-1" />
      <label>Monto recibido</label>
      <q-input filled v-model="monto" bg-color="teal-1" />
      <label>¿ Dependes económicamente de tus padres ?</label>
      <q-select
        filled
        v-model="dependiente"
        :options="sino"
        bg-color="teal-1"
      />
      <label>¿ Estado Civil ?</label>
      <q-select
        filled
        v-model="estadoc"
        :options="estadocivil"
        bg-color="teal-1"
      />
      <label>¿ Número de Hijos ?</label>
      <q-select
        filled
        v-model="tienehijos"
        :options="hijos"
        bg-color="teal-1"
      />
      <label>¿ Trabajas Actualmente ?</label>
      <q-select
        filled
        v-model="alumnotrabaja"
        :options="sino"
        bg-color="teal-1"
      />
      <label
        >¿ Cuantos miembros de tu familia dependen económicamente de ti ?</label
      >
      <q-select
        filled
        v-model="dependen"
        :options="dependientes"
        bg-color="teal-1"
      />
      <label>Domicilio en el que habitas Actualmente</label>
      <q-input filled v-model="domicilio" label="Calle, numero, colonia, CP" />
      <label
        >¿Cuántos miembros son en tu familia, contando a todos los familares que
        viven en la misma casa?</label
      >
      <q-select
        filled
        v-model="miembros"
        :options="habitantes"
        bg-color="teal-1"
      />
      <label>Telefóno de contacto de tus padres/tut@r/algún familiar </label>
      <q-input filled v-model="telefono" />
      <label
        >¿ Para acudir a la Universidad tienes que rentar cuarto o casa, o vivir
        con algún familiar ?</label
      >
      <q-select filled v-model="renta" :options="sino" bg-color="teal-1" />
      <hr />
      ¿Tipos de servicios que existen en el lugar donde vives?
      <hr />
      <label>Agua Potable</label>
      <q-select filled v-model="agua" :options="nosi" bg-color="teal-1" />
      <label>Alumbrado Publico</label>
      <q-select filled v-model="alumbrado" :options="nosi" bg-color="teal-1" />
      <label>Drenaje</label>
      <q-select
        filled
        v-model="drenaje"
        :options="nosi"
        bg-color="teal-1"
      /><label>Escuela</label>
      <q-select
        filled
        v-model="escuela"
        :options="nosi"
        bg-color="teal-1"
      /><label>Centro de Salud u Hospital</label>
      <q-select
        filled
        v-model="centrosalud"
        :options="nosi"
        bg-color="teal-1"
      /><label>Pavimento</label>
      <q-select filled v-model="pavimento" :options="nosi" bg-color="teal-1" />
      <label>Tranporte público</label>
      <q-select
        filled
        v-model="transporte"
        :options="nosi"
        bg-color="teal-1"
      /><label>Internet</label>
      <q-select
        filled
        v-model="internet"
        :options="nosi"
        bg-color="teal-1"
      /><label>¿ La casa donde vive tu familia es ?</label>
      <q-select
        filled
        v-model="estatuscasa"
        :options="estatushome"
        bg-color="teal-1"
      />
      <hr />
      Características de la Casa
      <hr />
      <label>Sala</label>
      <q-select filled v-model="sala" :options="nosi" bg-color="teal-1" />
      <label>Comedor</label>
      <q-select filled v-model="comedor" :options="nosi" bg-color="teal-1" />
      <label>Cocina</label>
      <q-select
        filled
        v-model="cocina"
        :options="nosi"
        bg-color="teal-1"
      /><label>Recamaras</label>
      <q-select
        filled
        v-model="recamaras"
        :options="nosi"
        bg-color="teal-1"
      /><label>Cochera</label>
      <q-select
        filled
        v-model="cochera"
        :options="nosi"
        bg-color="teal-1"
      /><label>Patio</label>
      <q-select filled v-model="patio" :options="nosi" bg-color="teal-1" />
      <label>Jardín</label>
      <q-select
        filled
        v-model="jardin"
        :options="nosi"
        bg-color="teal-1"
      /><label>¿El material del techo de la vivienda es de...?</label>
      <q-select
        filled
        v-model="materialtecho"
        :options="techo"
        bg-color="teal-1"
      /><label>¿ El material del piso de la vivienda es de… ?</label>
      <q-select
        filled
        v-model="materialpiso"
        :options="piso"
        bg-color="teal-1"
      />
      <hr />
      Señala si cuentas con los siguientes aparatos o muebles
      <hr />
      <label>Cama</label>
      <q-select filled v-model="cama" :options="nosi" bg-color="teal-1" />
      <label>Lavadora de Ropa</label>
      <q-select filled v-model="lavadora" :options="nosi" bg-color="teal-1" />
      <label>Secadora de Ropa</label>
      <q-select
        filled
        v-model="secadora"
        :options="nosi"
        bg-color="teal-1"
      /><label>Calentador de Agua</label>
      <q-select
        filled
        v-model="calentador"
        :options="nosi"
        bg-color="teal-1"
      /><label>Televisor</label>
      <q-select
        filled
        v-model="television"
        :options="nosi"
        bg-color="teal-1"
      /><label>Computadora Personal</label>
      <q-select
        filled
        v-model="computadora"
        :options="nosi"
        bg-color="teal-1"
      /><label>Teléfono local y/o celular</label>
      <q-select
        filled
        v-model="celular"
        :options="nosi"
        bg-color="teal-1"
      /><label>Estufa</label>
      <q-select
        filled
        v-model="estufa"
        :options="nosi"
        bg-color="teal-1"
      /><label>Horno (microondas/tostador)</label>
      <q-select
        filled
        v-model="horno"
        :options="nosi"
        bg-color="teal-1"
      /><label>Refrigerador</label>
      <q-select
        filled
        v-model="refrigerador"
        :options="nosi"
        bg-color="teal-1"
      />
      <label>¿Qué tipo de combustible que utilizan en tu casa?</label>
      <q-select
        filled
        v-model="tipcombustible"
        :options="combustible"
        bg-color="teal-1"
      />
      <label
        >¿Qué medio de transportes utilizas para llegar a la Universidad
        ?</label
      >
      <q-select
        filled
        v-model="transporteutzac"
        :options="transportacion"
        bg-color="teal-1"
      />
      <label>¿ Viven tus padres ?</label>
      <q-select
        filled
        v-model="vivenpadres"
        :options="nosi"
        bg-color="teal-1"
      />
      <label>¿ Actualmente trabajan tus padres ?</label>
      <q-select
        filled
        v-model="trabajanpadres"
        :options="nosi"
        bg-color="teal-1"
      />
      <label
        >¿ Tu familia cuenta con atención médica (por parte de alguna
        institución de salud: IMSS, ISSSTE, Seguro Popular, Particular) ?</label
      >
      <q-select
        filled
        v-model="atencionmedica"
        :options="nosi"
        bg-color="teal-1"
      />
      <label
        >¿ Cuál es la razón más importante que te impulsó a solicitar la
        condonación de colegiatura ?</label
      >
      <q-select filled v-model="razon" :options="impulso" bg-color="teal-1" />
      <div>
        <q-btn
          label="Guardar Datos"
          type="submit"
          @click="guardarDatos()"
          color="teal"
        />
        &nbsp;
        <q-btn label="Cancelar" type="reset" color="red" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";

export default defineComponent({
  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      disc: "",
      indigena: "",
      oportunidades: "",
      becafederal: "",
      apoyoadicional: "",
      periodicidad: "",
      monto: "",
      dependiente: "",
      estadoc: "",
      tienehijos: "",
      alumnotrabaja: "",
      dependen: "",
      domicilio: "",
      miembros: "",
      telefono: "",
      renta: "",
      agua: "",
      alumbrado: "",
      drenaje: "",
      escuela: "",
      centrosalud: "",
      pavimento: "",
      transporte: "",
      internet: "",
      estatuscasa: "",
      sala: "",
      comedor: "",
      cocina: "",
      recamaras: "",
      cochera: "",
      patio: "",
      jardin: "",
      materialtecho: "",
      materialpiso: "",
      cama: "",
      lavadora: "",
      secadora: "",
      calentador: "",
      television: "",
      computadora: "",
      celular: "",
      estufa: "",
      horno: "",
      refrigerador: "",
      tipcombustible: "",
      transporteutzac: "",
      vivenpadres: "",
      trabajanpadres: "",
      atencionmedica: "",
      razon: "",
      matricula: "",
      matriculauser:"",
      statusmatricula:"",
      nombre:"",
      carrera:"",
      cuatri:"",
      grupo:"",

      sino: [
        { label: "SI", value: 1 },
        { label: "NO", value: 0 },
      ],
      nosi: [
        { label: "SI", value: 0 },
        { label: "NO", value: 1 },
      ],
      estadocivil: [
        { label: "Soltero" , value: 0 },
        { label: "Casado" , value: 3 },
        { label: "Union Libre" , value: 1 },
        { label: "Separado / Viudo / Divorciado" , value: 2 }
      ],
      hijos: [
        { label: "Ninguno" , value: 0 },
        { label: "Uno" , value: 1 },
        { label: "Dos" , value: 2 },
        { label: "Tres o mas" , value: 3 }
        ],
      trabajas: [
        { label: "Nunca he trabajado" , value:0 },
        { label: "He trabajado anteriormente pero actualmente no" , value:1 },
        { label: "Si, con mas de 20 horas a la semana" , value:2 },
        //{ label: "" , value: }
      ],
      dependientes: [
        { label: "No hay" , value:0 },
        { label: "Uno" , value:1 },
        { label: "Dos" , value:2 },
        { label: "Tres" , value:3 },
        { label: "Mas de tres" , value:4 },
        ],
      habitantes: [
        { label: "Uno" , value:0 },
        { label: "Dos" , value:1 },
        { label: "Tres" , value:2 },
        { label: "Cuatro" , value:3 },
        { label: "Cinco" , value:4 }
        ],
      estatushome: [
        { label: "Propia" , value:0 },
        { label: "Rentada" , value:1 },
        { label: "Prestada" , value:2 }
        ],
      techo: [
        { label: "Lámina(cartón, asbesto, madera)" , value:1 },
        { label: "Concreto(colado,teja)" , value:0 }
        ],
      piso: [
        { label: "Tierra" , value:3 },
        { label: "Cemento" , value:2 },
        { label: "Mosaico,loseta,madera laminada" , value:1 },
        { label: "Parquet" , value:0 }
        ],

      combustible: [
        { label: "Gas" , value:0 },
        { label: "Petroleo" , value:1 },
        { label: "Leña" , value:2 },
        { label: "Carbón" , value:3 }
        ],
      transportacion: [
        { label: "Automovil propio" , value:0 },
        { label: "Automovil Prestado" , value:1 },
        { label: "Transporte Publico" , value:2 },
        { label: "Moto" , value:3 },
        { label: "Bicicleta" , value:4 },
        { label: "Caminando" , value:5 }
      ],
      impulso: [
        { label: "No alcanzo a cubrir mis gastos para estudiar y requiero de un apoyo adicional" , value:3 },
        { label: "La situación económica familiar" , value:2 },
        { label: "Por sugerencia de mis padres" , value:1 },
        { label: "Me impulsaron mis compañeros" , value:0 }
      ],
    };
  },
  methods: {
    guardarDatos() {
      axios
        .post("http://localhost/stpsback/public/index.php/api/estudio/add", {
          disc: this.disc.value,
          indigena: this.indigena.value,
          oportunidades: this.oportunidades.value,
          becafederal: this.becafederal.value,
          apoyoadicional: this.apoyoadicional,
          periodicidad: this.periodicidad,
          monto: this.monto,
          dependiente: this.dependiente.value,
          estadoc: this.estadoc.value,
          tienehijos: this.tienehijos.value,
          alumnotrabaja: this.alumnotrabaja.value,
          dependen: this.dependen.value,
          domicilio: this.domicilio,
          miembros: this.miembros.value,
          telefono: this.telefono,
          renta: this.renta.value,
          agua: this.agua.value,
          alumbrado: this.alumbrado.value,
          drenaje: this.drenaje.value,
          escuela: this.escuela.value,
          centrosalud: this.centrosalud.value,
          pavimento: this.pavimento.value,
          transporte: this.transporte.value,
          internet: this.internet.value,
          estatuscasa: this.estatuscasa.value,
          sala: this.sala.value,
          comedor: this.comedor.value,
          cocina: this.cocina.value,
          recamaras: this.recamaras.value,
          cochera: this.cochera.value,
          patio: this.patio.value,
          jardin: this.jardin.value,
          materialtecho: this.materialtecho.value,
          materialpiso: this.materialpiso.value,
          cama: this.cama.value,
          lavadora: this.lavadora.value,
          secadora: this.secadora.value,
          calentador: this.calentador.value,
          television: this.television.value,
          computadora: this.computadora.value,
          celular: this.celular.value,
          estufa: this.estufa.value,
          horno: this.horno.value,
          refrigerador: this.refrigerador.value,
          tipcombustible: this.tipcombustible.value,
          transporteutzac: this.transporteutzac.value,
          vivenpadres: this.vivenpadres.value,
          trabajanpadres: this.trabajanpadres.value,
          atencionmedica: this.atencionmedica.value,
          razon: this.razon.value,
          matricula: this.matricula,
          matriculauser: this.matriculauser
        })
        .then((res) => {
          console.log(res);
          this.$q.notify({
            message: "Tu datos se han registrado con éxito",
            color: "positive",
            position: "center",
          });
        });
    },
    elimina() {
      this.$q.notify({
        message: "Tu datos se han eliminado",
        color: "danger",
        position: "top-left",
      });
    },
    confirmarmatricula(matriculauser) {
      
      if(!this.matriculauser){
        this.$q.notify({
        message: "No se ha ingresado la matricula, o no se encontró tu registro",
        color: "red",
        position: "top-right",
      });
      } else {
        axios
          .get("http://localhost/stpsback/public/index.php/api/alumnos/"+matriculauser)
          .then((res) => {
            const data = res.data;
            this.matricula = data[0].matricula;
            this.nombre = data[0].nombre;
            this.carrera = data[0].carrera;
            this.cuatri = data[0].cuatrimestre;
            this.grupo = data[0].grupo;
            this.statusmatricula = "Confirmada"
            this.$q.notify({
              message: "Se ha localizado " + data.length + " registro",
              color: "teal",
              position: "top-right",
              icon:"done"
            });
            console.log(data.length);
            // console.log(res);
          });
      }
      
    },
  },
});
</script>
