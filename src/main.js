import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'vue-toastification'
import Datepicker from '@vuepic/vue-datepicker'
import DropDownComponent from '@/components/ui/DropDown/DropDownComponent'
import InputComponent from '@/components/ui/Input/InputComponent'
import RadioComponent from '@/components/ui/Radio/RadioComponent'
import TableComponent from '@/components/ui/Table/TableComponent'

import ClickOutside from '@/directives/click-outside'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'

import 'vue-toastification/dist/index.css'
import '@vuepic/vue-datepicker/dist/main.css'
import './styles/tailwind.scss'
import './styles/index.scss'

const app = createApp(App)

library.add(faXmark, faAngleDown, faPlus)

app.component('drop-down-component', DropDownComponent)
app.component('input-component', InputComponent)
app.component('radio-component', RadioComponent)
app.component('table-component', TableComponent)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('DatePicker', Datepicker)

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

app.use(store).use(router).mount('#app')
