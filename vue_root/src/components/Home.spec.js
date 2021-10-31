import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

import { Constants } from "@/constants"

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Home)

    const header = wrapper.find('h1')
    expect(header.text()).toMatch(Constants['HomeTitle'])
  })
})
