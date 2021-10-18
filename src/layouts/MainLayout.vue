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
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/perfil">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Perfil
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="picture_as_pdf" />
              </q-item-section>

              <q-item-section>
                Manual del Sistema
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/captura">
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>

              <q-item-section>
                Captura tus datos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Estatus de solicitud
              </q-item-section>
            </q-item>
            
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contacto" />
              </q-item-section>

              <q-item-section>
                Contacto
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Cerrar sesión
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/back.png" style="height: 135px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="80px" class="q-mb-sm">
              
            </q-avatar>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
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
