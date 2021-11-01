import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

import { Constants } from "@/constants"


describe('Home.vue', () => {
  const wrapper = mount(Home)
  it('renders props.msg when passed', () => {
    const header = wrapper.find('h1')
    expect(header.text()).toMatch(Constants['HomeTitle'])
  })
  it('renders a box for tweeting', () => {
    const tweeterbox = wrapper.find('.tweeterbox')
    expect(tweeterbox.exists()).toBe(true)
  })
  it('renders a box for the display of tweets', () => {
    const boxotweets = wrapper.find('div .boxotweets')
    expect(boxotweets.exists()).toBe(true)
  })

  it('has all the interaction buttons', () => {
    wrapper.find('input').setValue('Bob')
    wrapper.find('textarea').setValue('Bob says a tweet')
    const postButton = wrapper.find('button[data-testid="postTweetButton"]')
    const getButton = wrapper.find('button[data-testid="getTweetsButton"]')
    expect(postButton.exists()).toBe(true)
    expect(getButton.exists()).toBe(true)    
    expect(wrapper.find('.boxotweets').text()).toBe('[]')
  })

})
