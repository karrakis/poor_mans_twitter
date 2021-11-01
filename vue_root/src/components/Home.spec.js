import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

import { Constants } from "@/constants"

describe('Home.vue', () => {
  const wrapper = shallowMount(Home)
  it('renders props.msg when passed', () => {
    const header = wrapper.find('h1')
    expect(header.text()).toMatch(Constants['HomeTitle'])
  })
  it('renders a box for tweeting', () => {
    const tweeterbox = wrapper.find('textarea .tweeterbox')
    expect(tweeterbox.exists()).toBe(true)
  })
  it('renders a box for the display of tweets', () => {
    const boxotweets = wrapper.find('textarea .boxotweets')
    expect(boxotweets.exists()).toBe(true)
  })
})
