<template>
    <button 
        class="fixed bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded bg-slate-800 text-white transition-transform shadow"
        :class="{
            'translate-y-[150%]': !visible,
            'translate-y-0': visible
        }"
        @click="goToTop"
    >
        <span>↑ Back to top</span>
    </button>
</template>

<script setup>
const props = defineProps({
    threshold: {
        type: Number,
        default: 1000,
    }
})

const top = ref(0)
const visible = ref(false)


watch(
    () => top.value,
    (value) => {
        if (value > props.threshold) {
            visible.value = true
        } else {
            visible.value = false
        }
    }
)

onMounted(() => {
    window.addEventListener('scroll', () => {
        top.value = window.scrollY
    })
})

const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>

</style>