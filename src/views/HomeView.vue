<template>
    <div class="home">
        <h1 class="mb-3">Choose where you want to live</h1>
        <form @submit.prevent="submit">
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
import CONFIG from '@root/config'
export default {
    name: 'HomeView',
    components: { LocationSelector },
    data () {
        return {
            locations: [
                {
                    name: 'Amsterdam',
                    locationKey: 249758
                },
                {
                    name: 'Madrid',
                    locationKey: 308526
                },
                {
                    name: 'Budapest',
                    locationKey: 187423
                }
            ],
            locationFrom: null,
            locationTo: null,
            weatherInfo: null
        }
    },
    methods: {
        submit () {
            this.getWeatherInfo()
        },
        getWeatherInfo () {
            const url = CONFIG.API.WEATHER.ROUTES.FORECASTS.DAILY.DAY1.replace('{locationKey}', this.locationTo)
            console.log(url)
            this.$weatherApi.get(url).then(( {data }) => {
                this.$set(this, 'weatherInfo', data)
            })
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
