<template>
    <div class="home">
        <hello-world class="mb-3" msg="Choose where you want to live"/>
        <form>
            <div class="row">
                <div class="col-5">
                    <div class="form-group">
                        <label for="location">Where do you live?</label>
                        <select class="form-control" v-model="locationFrom" name="location" id="location" required>
                            <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-5">
                    <div class="form-group">
                        <label for="locationTo">Where do you want to live?</label>
                        <select class="form-control" v-model="locationTo" name="locationTo" id="locationTo" required>
                            <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-dark btn-explore">Explore</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
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
