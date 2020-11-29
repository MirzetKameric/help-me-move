<template>
    <div class="home">
        <h1 class="mb-3">Choose where you want to move</h1>
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-5">
                    <location-selector v-model="locationFromKey" :locations="locations" :disabled="loading">Where do you live?</location-selector>
                </div>
                <div class="col-5">
                    <location-selector v-model="locationToKey" :locations="locations" :disabled="loading">Where do you want to live?</location-selector>
                </div>
                <div class="col-2">
                    <button type="submit" :disabled="loading" class="btn btn-dark btn-explore">Explore</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="mb-5" v-if="Object.keys(draft).length">
            <h3 class="mt-2 mb-3" v-if="weatherInfo || flightsInfo">Helpful info for moving to {{ draft.locationTo.name }}</h3>
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5>Weather in {{ draft.locationTo.name }}</h5>
                            <ul class="list-group" v-if="weatherInfo">
                                <li class="list-group-item">
                                    {{ weatherInfo.Headline.Text }}
                                </li>
                                <li class="list-group-item" v-if="weatherInfo.Headline.Category">
                                    Category: <strong>{{ weatherInfo.Headline.Category }}</strong>
                                </li>
                                <li class="list-group-item" v-if="weatherInfo.Headline.Severity">
                                    Severity: <span class="badge badge-pill badge-primary">{{ weatherInfo.Headline.Severity }}</span>
                                </li>
                                <template v-for="(forecast, index) in weatherInfo.DailyForecasts">
                                    <li class="list-group-item" :key="`min-${index}`">
                                        Minimum temperature:
                                        <strong>{{ forecast.Temperature.Minimum.Value | celsius }}&#176;C</strong>
                                    </li>
                                    <li class="list-group-item" :key="`max-${index}`">
                                        Maximum temperature:
                                        <strong>{{ forecast.Temperature.Maximum.Value | celsius }}&#176;C</strong>
                                    </li>
                                </template>
                            </ul>
                            <div v-else-if="loading && !weatherInfo" class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="alert alert-danger" v-else role="alert">
                                There was an error fetching weather data!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <h5>Flights from {{ draft.locationFrom.name }} to {{ draft.locationTo.name }}</h5>
                            <ul class="list-group" v-if="flightsInfo">
                                <flight-info class="list-group-item" v-for="flight in flightsInfo.data" :key="flight.id" :flight="flight" />
                            </ul>
                            <div v-else-if="loading && !flightsInfo" class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { jsonToQueryString } from "@/utils/helpers";
import CONFIG from '@root/config'
import LocationSelector from "@/components/LocationSelector";
import FlightInfo from "@/components/flight/Info"
export default {
    name: 'HomeView',
    components: { LocationSelector, FlightInfo },
    data () {
        return {
            locations: [
                {
                    name: 'Amsterdam',
                    cityCode: 'AMS',
                    locationKey: 249758
                },
                {
                    name: 'Madrid',
                    cityCode: 'MAD',
                    locationKey: 308526
                },
                {
                    name: 'Budapest',
                    cityCode: 'BUD',
                    locationKey: 187423
                }
            ],
            locationFromKey: null,
            locationToKey: null,
            weatherInfo: null,
            flightsInfo: null,
            loading: false,
            draft: {}
        }
    },
    computed: {
        locationFrom () {
            return this.locations.find(e => e.locationKey === this.locationFromKey)
        },
        locationTo () {
            return this.locations.find(e => e.locationKey === this.locationToKey)
        }
    },
    methods: {
        submit () {
            this.loading = true
            const promises = []
            promises.push(this.getWeatherInfo())
            promises.push(this.getFlightsInfo())

            this.$set(this.draft, 'locationFrom', JSON.parse(JSON.stringify(this.locationFrom)))
            this.$set(this.draft, 'locationTo', JSON.parse(JSON.stringify(this.locationTo)))

            Promise.all(promises).finally(() => {
                this.loading = false
            })
        },
        getWeatherInfo () {
            this.$set(this, 'weatherInfo', null)
            const url = CONFIG.API.WEATHER.ROUTES.FORECASTS.DAILY.DAY1.replace('{locationKey}', this.locationTo.locationKey)
            return new Promise((resolve, reject) => {
                this.$weatherApi.get(url).then(( {data }) => {
                    this.$set(this, 'weatherInfo', data)
                    resolve(data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
            })
        },
        getFlightsInfo () {
            let url = CONFIG.API.FLIGHT.ROUTES.FLIGHTS
            const options = {
                fly_from: `city:${this.locationFrom.cityCode}`,
                fly_to: `city:${this.locationTo.cityCode}`,
                date_from: moment().format('D/M/YYYY'),
                date_to: moment().add(7, 'd').format('D/M/YYYY'),
                sort: 'price',
                max_stopovers: 0,
                partner: 'picky'
            }

            url += '?' + jsonToQueryString(options)
            this.$set(this, 'flightsInfo', null)
            return new Promise((resolve, reject) => {
                this.$flightApi.get(url).then(({ data }) => {
                    this.$set(this, 'flightsInfo', data)
                    resolve(data)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
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
