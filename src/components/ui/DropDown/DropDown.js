import { ref, computed } from 'vue'

export default (props, emits) => {
  const show = ref(false)

  const emptyValue = {
    label: 'None',
    id: 0,
  }

  const toggleMenu = () => (show.value = !show.value)
  const closeMenu = () => (show.value = false)
  const changeValue = (value) => {
    closeMenu()
    emits('change', value)
  }

  const currentLabel = computed(() => {
    if (!props.value) {
      return emptyValue
    }
    return props.items.find((item) => item.id === props.value)
  })

  return {
    show,
    emptyValue,
    currentLabel,
    changeValue,
    toggleMenu,
    closeMenu,
  }
}
