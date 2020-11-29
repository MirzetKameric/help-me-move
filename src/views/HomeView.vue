<template>
    <div class="home">
        <h1 class="mb-3">Choose where you want to live</h1>
        <form>
            <div class="row">
                <div class="col-5">
                    <location-selector v-model="locationFrom" :locations="locations">Where do you live?</location-selector>
                </div>
                <div class="col-5">
                    <location-selector v-model="locationTo" :locations="locations">Where do you live?</location-selector>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-dark btn-explore">Explore</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import LocationSelector from "@/components/LocationSelector";
export default {
    name: 'HomeView',
    components: { LocationSelector },
    data () {
        return {
            locations: [
                'Amsterdam',
                'Madrid',
                'Budapest'
            ],
            locationFrom: null,
            locationTo: null
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn-explore {
        margin-top: 36px;
        width: 100%;
    }
</style>
