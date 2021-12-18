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
        <div class="text-h4">Apoyos de Colegiatura</div>
        <div class="text-subtitle1">
          {{ fecha }}
        </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple to="/app">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Inicio </q-item-section>
          </q-item>
          <!-- <q-item clickable v-ripple to="/perfil">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>
                Perfil
              </q-item-section>
            </q-item> -->
          <q-item
            v-ripple
            tag="a"
            target="_blank"
            href="https://drive.google.com/file/d/19tGEEo0c_zGSz13YrrpwASPc2kXA1oDc/view?usp=sharing"
          >
            <q-item-section avatar>
              <q-icon name="picture_as_pdf" />
            </q-item-section>

            <q-item-section> Manual del Sistema </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/captura" v-show="!limpio">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>

            <q-item-section> Estudio Socioeconómico </q-item-section>
          </q-item>
          <q-item active clickable v-ripple to="/files">
            <q-item-section avatar>
              <q-icon name="file_upload" />
            </q-item-section>

            <q-item-section> Cargar Comprobantes </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/status">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>

            <q-item-section> Estatus de solicitud </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/contacto">
            <q-item-section avatar>
              <q-icon name="contact_support" />
            </q-item-section>

            <q-item-section> Contacto </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="logout()">
            <q-item-section avatar>
              <q-icon name="logout" @click="logout()" />
            </q-item-section>

            <q-item-section> Cerrar sesión </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="~assets/back.png" style="height: 135px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm"> </q-avatar>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title class="text-caption">
          Universidad Tecnológica del Estado de Zacatecas
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
import axios from "axios";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      limpio: false,
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {
    console.log(this.$route.params.logueado);
    if (this.$route.params.logueado == undefined) {
      this.$router.push({ path: "/" });
    }
    this.solicitado();
  },
  methods: {
    logout() {
      this.$route.params.logueado = false;
      console.log(this.$route.params.logueado);
      this.$router.push({ path: "/" });
    },
    solicitado() {
      // console.log(
      //   "Ya registraste tu solicitud por tal motivo no podrás capturar nuevamente"
      // );
      axios
        .get(
          "http://apoyos.utzac.edu.mx/stpsback/public/index.php/api/solicitudes/" +
            this.$route.params.matriculauser
        )
        .then((res) => {
          const data = res.data;
          console.log(data);

          if (data.length > 0) {
            this.limpio = true;
            this.folio = data[0].id;
            this.fecha_captura = data[0].fechacaptura;
            this.name = data[0].nombre;
            this.estatus = data[0].status_solicitud;
            this.$q.notify({
              message:
                "Ya haz capturado una solicitud el dia: " + this.fecha_captura,
              type: "negative",
              position: "center",
              actions: [
                {
                  label: "De acuerdo",
                  color: "white",
                  handler: () => {
                    /* ... */
                  },
                },
              ],
            });
          }
        });
    },
  },
  computed: {
    fecha() {
      const timeStamp = Date.now();
      return (date.formattedString = date.formatDate(timeStamp, "DD-MM-YYYY"));
    },
  },
});
</script>
