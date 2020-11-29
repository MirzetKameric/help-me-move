<template>
    <component class="c-flight-info" :is="isListItem ? 'li' : 'div'">
        <div class="d-flex">
            <div class="flex-grow-1">
                {{ flight.flyFrom }} - {{ flight.flyTo }}
            </div>
            <span class="text-primary"><strong>{{ flight.price }} {{ currency }}</strong></span>
        </div>
        <div class="c-flight-info__duration text-secondary">{{ flight.fly_duration}}</div>
    </component>
</template>

<script>
    export default {
        name: 'FlightInfo',
        props: {
            flight: {
                required: true,
                default: {}
            },
            isListItem: {
                default: true
            },
            currency: {
                default: 'EUR'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .c-flight-info {
        &__duration {
            font-size: 14px;
            line-height: 16px;
            margin-top: -5px;
        }
    }
</style>