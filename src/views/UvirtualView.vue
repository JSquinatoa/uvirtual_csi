<template>
    <divc class="container_view">
        <Uvirtual/>
    </divc>
</template>

<script>
import Uvirtual from "@/components/Uvirtual.vue"

export default {
    components:{
        Uvirtual
    }

}
</script>

<style scoped>
.container_view{
    width: 100%;
    height: 100%;
    margin: 0;
}

</style>