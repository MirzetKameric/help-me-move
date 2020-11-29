import { shallowMount } from '@vue/test-utils'
import LocationSelector from '@/components/LocationSelector.vue'

describe('LocationSelector.vue', () => {
    const msg = 'label'
    const locations = [
        {
            name: 'Amsterdam',
            cityCode: 'AMS',
            locationKey: 249758
        },
        {
            name: 'Budapest',
            cityCode: 'BUD',
            locationKey: 187423
        }
    ]
    let model = locations[1].locationKey // Budapest
    const wrapper = shallowMount(LocationSelector, {
        propsData: {
            value: model,
            locations: locations,
        },
        slots: {
            default: msg
        }
    })

    it('renders label based on default slot', () => {
        expect(wrapper.find('label').text()).toMatch(msg)
    })

    it('changes v-model value and emits input event', async () => {
        const newModel = locations[0].locationKey // Amsterdam
        const input = wrapper.find('select')
        await input.setValue(newModel)
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted().input).toBeTruthy()
    })
})
