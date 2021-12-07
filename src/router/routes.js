
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/captura', component: () => import('pages/Captura.vue') },
      { path: '/perfil', component: () => import('pages/Perfil.vue') },
      { path: '/contacto', component: () => import('pages/Contacto.vue') },
      { path: '/files', component: () => import('pages/Files.vue') },
      { path: '/status', component: () => import('pages/Status.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
