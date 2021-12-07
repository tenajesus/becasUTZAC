<template>
  <div class="q-pa-md">
    <q-form>
      <label>Tienes Alguna discapacidad motriz ?</label>
      <q-select
        filled
        v-model="disc"
        :options="discapacidad"
        bg-color="teal-1"
      />
      <label>Eres Integrante de algún grupo indigena ?</label>
      <q-select
        filled
        v-model="model"
        :options="discapacidad"
        bg-color="teal-1"
      />
      <label>Tu Familia recibe apoyo del programa oportunidades</label>
      <q-select
        filled
        v-model="model"
        :options="discapacidad"
        bg-color="teal-1"
      />
      <label
        >¿Eres beneficiario de algún apoyo (beca) Federal, Estatal y/o Municipal
        ?</label
      >
      <q-select
        filled
        v-model="model"
        :options="discapacidad"
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
        v-model="model"
        :options="discapacidad"
        bg-color="teal-1"
      />
      <label>¿ Estado Civil ?</label>
      <q-select
        filled
        v-model="model"
        :options="estadocivil"
        bg-color="teal-1"
      />
      <label>¿ Número de Hijos ?</label>
      <q-select filled v-model="model" :options="hijos" bg-color="teal-1" />
      <label>¿ Trabajas Actualmente ?</label>
      <q-select filled v-model="model" :options="trabajas" bg-color="teal-1" />
      <label
        >¿ Cuantos miembros de tu familia dependen económicamente de ti ?</label
      >
      <q-select
        filled
        v-model="model"
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
        v-model="model"
        :options="habitantes"
        bg-color="teal-1"
      />
      <label>Telefóno de contacto de tus padres/tut@r/algún familiar </label>
      <q-input filled v-model="telefono" />
      <label
        >¿ Para acudir a la Universidad tienes que rentar cuarto o casa, o vivir
        con algún familiar ?</label
      >
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <hr />
      ¿Tipos de servicios que existen en el lugar donde vives?
      <hr />
      <label>Agua Potable</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Alumbrado Publico</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Drenaje</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Escuela</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Centro de Salud u Hospital</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Pavimento</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Tranporte público</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Internet</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>¿ La casa donde vive tu familia es ?</label>
      <q-select
        filled
        v-model="model"
        :options="estatushome"
        bg-color="teal-1"
      /><label>Alumbrado Publico</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <hr />
      Características de la Casa
      <hr />
      <label>Sala</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Comedor</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Cocina</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Recamaras</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Cochera</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Patio</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Jardín</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>¿El material del techo de la vivienda es de...?</label>
      <q-select
        filled
        v-model="model"
        :options="techo"
        bg-color="teal-1"
      /><label>¿ El material del piso de la vivienda es de… ?</label>
      <q-select filled v-model="model" :options="piso" bg-color="teal-1" />
      <hr />
      Señala si cuentas con los siguientes aparatos o muebles
      <hr />
      <label>Cama</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Lavadora de Ropa</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>Secadora de Ropa</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Calentador de Agua</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Televisor</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Computadora Personal</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Teléfono local y/o celular</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Estufa</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Horno (microondas/tostador)</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Refrigerador</label>
      <q-select
        filled
        v-model="model"
        :options="acudir"
        bg-color="teal-1"
      /><label>Computadora Personal</label>
      <q-select filled v-model="model" :options="acudir" bg-color="teal-1" />
      <label>¿Qué tipo de combustible que utilizan en tu casa?</label>
      <q-select
        filled
        v-model="model"
        :options="combustible"
        bg-color="teal-1"
      />
      <label
        >¿Qué medio de transportes utilizas para llegar a la Universidad
        ?</label
      >
      <q-select
        filled
        v-model="model"
        :options="transportacion"
        bg-color="teal-1"
      />
      <label>¿ Viven tus padres ?</label>
      <q-select filled v-model="model" :options="padres" bg-color="teal-1" />
      <label>¿ Actualmente trabajan tus padres ?</label>
      <q-select
        filled
        v-model="model"
        :options="transportacion"
        bg-color="teal-1"
      />
      <label
        >¿ Tu familia cuenta con atención médica (por parte de alguna
        institución de salud: IMSS, ISSSTE, Seguro Popular, Particular) ?</label
      >
      <q-select filled v-model="model" :options="salud" bg-color="teal-1" />
      <label
        >¿ Cuál es la razón más importante que te impulsó a solicitar la
        condonación de colegiatura ?</label
      >
      <q-select filled v-model="model" :options="impulso" bg-color="teal-1" />
      <div>
        <q-btn label="Guardar Datos" type="submit" @click="guardarDatos()" color="teal" /> &nbsp;
        <q-btn label="Cancelar" type="reset" color="red" />
        <q-btn round color="amber" glossy text-color="black" icon="delete" @click="elimina()" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios'

export default defineComponent({
  setup(){
  const $q = useQuasar()
  },
  data(){
  return{
  disc:'',
  model:ref(null),
  discapacidad:['Si','No'],
  estadocivil:['Soltero','Casado','Union Libre','Separado / Viudo / Divorciado'],
  hijos:['Ninguno','Uno','Dos','Tres o mas'],
  trabajas:['Nunca he trabajado','He trabajado anteriormente pero ahora no','Si, con mas de 20 horas a la semana'],
  dependientes:['No hay','Uno','Dos','Tres','Mas de Tres'],
  habitantes:['Uno','Dos','Tres','Cuatro','Cinco o más'],
  acudir:['Si','No'],
  estatushome:['Propia','Rentada','Prestada'],
  techo:['Lámina(cartón, asbesto, madera)','Concreto(colado,teja)'],
  piso:['Tierra','Cemento','Mosaico,loseta,madera laminada'],
  combustible:['Gas','Petroleo','Leña','Carbón'],
  transportacion:['Automovil propio','Automovil Prestado','Transporte Publico','Moto','Bicicleta','Caminando'],
  padres:['Si','No'],
  salud:['Si','No'],
  impulso:['No alcanzo a cubrir mis gastos para estudiar y requiero de un apoyo adicional','La situación económica familiar',
  'Por sugerencia de mis padres','Me impulsaron mis compañeros']
    }
  },methods:{
    guardarDatos(){
      //axios.method(url,{ 
      //   http://localhost/stpsback/public/index.php/api/alumnos/
      //   http://localhost/stpsback/public/index.php/api/alumnos/id
      //   
      //   
      //})
      axios.post('http://localhost/stpsback/public/index.php/api/estudio/add',{
        disc:this.disc,
      }).then((res => {
        console.log(res)
        this.disc ='';
        this.$q.notify({
          message: 'Tu datos se han registrado con éxito',
          color: 'positive',
          position:'center'
        })
      } ))
     
  },elimina(){
      this.$q.notify({
          message: 'Tu datos se han eliminado',
          color: 'danger',
          position:'center'
        })
  }
  }
})
</script>
