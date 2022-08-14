import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import en from '@/locales/en'

import Toast from 'vue-toastification'
import Datepicker from '@vuepic/vue-datepicker'
import vSelect from 'vue-select'
import BtnComponent from '@/components/ui/Btn/BtnComponent'
import DialogComponent from '@/components/ui/Dialog/DialogComponent'
import DropDownComponent from '@/components/ui/DropDown/DropDownComponent'
import InputComponent from '@/components/ui/Input/InputComponent'
import RadioComponent from '@/components/ui/Radio/RadioComponent'
import TableComponent from '@/components/ui/Table/TableComponent'

import ClickOutside from '@/directives/click-outside'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faAngleDown, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

import 'vue-toastification/dist/index.css'
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-select/dist/vue-select.css'
import './styles/tailwind.scss'
import './styles/index.scss'

const app = createApp(App)

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
  },
})

library.add(faXmark, faAngleDown, faPlus, faCheck)

app.component('btn-component', BtnComponent)
app.component('dialog-component', DialogComponent)
app.component('drop-down-component', DropDownComponent)
app.component('input-component', InputComponent)
app.component('radio-component', RadioComponent)
app.component('table-component', TableComponent)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('date-picker-component', Datepicker)
app.component('v-select', vSelect)

app.directive('click-outside', ClickOutside)

app.use(Toast, {
  position: 'bottom-center',
  transition: 'Vue-Toastification__fade',
  timeout: 2500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.1,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
})

app.use(i18n)

app.use(store).use(router).mount('#app')
