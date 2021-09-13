<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        
        <!-- <q-toolbar-title>
          Condonación de Colegiatura
        </q-toolbar-title> -->

        
      </q-toolbar>
      <div class="q-px-lg q-mb-md">
      <div class="text-h4">
          Condonación de Colegiatura
        </div>
        <div class="text-subtitle1">
          {{fecha}}
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [
  {
    title: 'Manual',
    caption: 'Manual de Captura',
    icon: 'picture_as_pdf',
    link: 'https://quasar.dev'
  },
  {
    title: 'Solicitud',
    caption: 'Capturar Solicitud',
    icon: 'edit',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Status',
    caption: 'Status de Solicitud',
    icon: 'info',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Documentación Personal',
    caption: 'Mis documentos comprobatorios',
    icon: 'folder_shared',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Salir del Sistema',
    caption: 'Cerrar Sesión',
    icon: 'logout',
    link: 'https://twitter.quasar.dev'
  },
];

import { defineComponent, ref } from 'vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
      
    }
  },
  computed:{
    fecha(){
      const timeStamp = Date.now()
      return date.formattedString = date.formatDate(timeStamp, 'DD-MM-YYYY')
    }
  }
})
</script>
