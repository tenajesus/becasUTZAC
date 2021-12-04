<template>
  <div class="q-pa-md">

    <q-form>
  
  <label>Tienes Alguna discapacidad motriz ?</label>
      <q-select
        filled
        v-model="model" :options="discapacidad"
    />
    <label>Eres Integrante de algún grupo indigena ?</label>
      <q-select
        filled
        v-model="model" :options="discapacidad"
    />
      <label>Tu Familia recibe apoyo del programa oportunidades</label>
      <q-select
        filled
        v-model="model" :options="discapacidad"
    />
      <label>¿Eres beneficiario de algún apoyo (beca) Federal, Estatal y/o Municipal ?</label>
      <q-select
        filled
        v-model="model" :options="discapacidad"
    />
      <label>Nombre de la Beca</label>
      <q-input
        filled
        type="text"
        v-model="apoyoadicional"
      />
      <label>Periodicidad con que recibes el apoyo</label>
      <q-input
        filled
        type="text"
        v-model="periodicidad"
      />
      <label>Monto recibido</label>
      <q-input
        filled
        v-model="monto"
    />
    <label>¿ Dependes económicamente de tus padres ?</label>
      <q-select
        filled
        v-model="model" :options="discapacidad"
    />
      <label>¿ Estado Civil ?</label>
      <q-select
        filled
        v-model="model" :options="estadocivil"
    />
    <label>¿ Número de Hijos ?</label>
      <q-select
        filled
        v-model="model" :options="hijos"
    />
    <label>¿ Trabajas Actualmente ?</label>
      <q-select
        filled
        v-model="model" :options="trabajas"
    />
    <label>¿ Cuantos miembros de tu familia dependen económicamente de ti ?</label>
      <q-select
        filled
        v-model="model" :options="dependientes"
    />
      <label>Domicilio en el que habitas Actualmente</label>
       <q-input filled v-model="domicilio" label="Calle, numero, colonia, CP" />
      <label>¿Cuántos miembros son en tu familia, contando a todos los familares que viven en la misma casa?</label>
      <q-select
        filled
        v-model="model" :options="habitantes"
    />
    <label>Telefóno de contacto de tus padres/tut@r/algún familiar </label>
       <q-input filled v-model="telefono" />
    <label>¿ Para acudir a la Universidad tienes que rentar cuarto o casa, o vivir con algún familiar ?</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <hr> 
     ¿Tipos de servicios que existen en el lugar donde vives?
     <hr>
    <label>Agua Potable</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Alumbrado Publico</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Drenaje</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Escuela</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Centro de Salud u Hospital</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Pavimento</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Tranporte público</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Internet</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>¿ La casa donde vive tu familia es ?</label>
      <q-select
        filled
        v-model="model" :options="estatushome"
    /><label>Alumbrado Publico</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <hr> 
     Características de la Casa
     <hr>
    <label>Sala</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Comedor</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Cocina</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Recamaras</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Cochera</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Patio</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Jardín</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>¿El material del techo de la vivienda es de...?</label>
      <q-select
        filled
        v-model="model" :options="techo"
    /><label>¿ El material del piso de la vivienda es de… ?</label>
      <q-select
        filled
        v-model="model" :options="piso"
    /><hr> 
     Señala si cuentas con los siguientes aparatos o muebles
     <hr>
    <label>Cama</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Lavadora de Ropa</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>Secadora de Ropa</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Calentador de Agua</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Televisor</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Computadora Personal</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Teléfono local y/o celular</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Estufa</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Horno (microondas/tostador)</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Refrigerador</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    /><label>Computadora Personal</label>
      <q-select
        filled
        v-model="model" :options="acudir"
    />
    <label>¿Qué tipo de combustible que utilizan en tu casa?</label>
      <q-select
        filled
        v-model="model" :options="combustible"
    />
    <label>¿Qué medio de transportes utilizas para llegar a la Universidad ?</label>
      <q-select
        filled
        v-model="model" :options="transportacion"
    />
    <label>¿ Viven tus padres ?</label>
      <q-select
        filled
        v-model="model" :options="padres"
    />
    <label>¿ Actualmente trabajan tus padres ?</label>
      <q-select
        filled
        v-model="model" :options="transportacion"
    />
    <label>¿ Tu familia cuenta con atención médica (por parte de alguna institución de salud: IMSS, ISSSTE, Seguro Popular, Particular) ?</label>
      <q-select
        filled
        v-model="model" :options="salud"
    />
    <label>¿ Cuál es la razón más importante que te impulsó a solicitar la condonación de colegiatura ?</label>
      <q-select
        filled
        v-model="model" :options="impulso"
    />
      <div>
        <q-btn label="Guardar Datos" type="submit" color="primary"/> &nbsp;
        <q-btn label="Cancelar" type="reset" color="red"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  setup(){
  return{
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
}
})
</script>
