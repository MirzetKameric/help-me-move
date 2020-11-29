<template>
    <div class="form-group">
        <label for="locationSelector">
            <slot></slot>
        </label>
        <select class="form-control" v-model="localValue" name="locationSelector" id="locationSelector" :disabled="disabled" required>
            <option v-for="location in locations"
                    :key="location.name"
                    :value="reduce ? location[reduce] : location.locationKey"
            >{{ location.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'LocationSelector',
        props: {
            value: {
                required: true
            },
            locations: {
                required: true,
                default: () => []
            },
            reduce: {
                default: null
            },
            disabled: {
                default: false
            }
        },
        computed: {
            localValue: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                }
            }
        },
    }
</script>