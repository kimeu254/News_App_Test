import './bootstrap'
import '../css/app.css'
import '../sass/app.scss'
import 'jquery/dist/jquery.min.js'
import 'datatables.net/js/jquery.dataTables.min.js'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-dt/js/dataTables.dataTables.min.js'
import 'datatables.net-buttons/js/dataTables.buttons.min.js'
import 'datatables.net-buttons/js/buttons.html5.min.js'
import DataTables from 'datatables.net-dt'
import dataTablesButtonsMin from 'datatables.net-buttons/js/dataTables.buttons.min.js'
import Router from '@/router'
import store from '@/store'
import jQuery from 'jquery'
import { createApp } from 'vue/dist/vue.esm-bundler';

const app = createApp({})
app.use(Router)
app.use(store)
app.mount('#app')