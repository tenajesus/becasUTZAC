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

        <q-toolbar-title>
          Condonación de Colegiatura
        </q-toolbar-title>

        
      </q-toolbar>
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
          Essential Links
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
    title: 'Exit del Siistem',
    caption: 'Sierrar el system',
    icon: 'logout',
    link: 'https://twitter.quasar.dev'
  },
];

import { defineComponent, ref } from 'vue'

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
  }
})
</script>
