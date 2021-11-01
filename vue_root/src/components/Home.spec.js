import { mount, shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

import { Constants } from "@/constants"

export default {
  get: () => Promise.resolve({ data: 'Mock Welcome!' })
};



describe('Home.vue', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
        $http: {
            get: function (url) {
              return Promise.resolve({ data: [
                {name: "a", tweet: "a tweet", timestamp: 1},
                {name: "c", tweet: "c tweet", timestamp: 3},
                {name: "b", tweet: "b tweet", timestamp: 20},
                {name: "d", tweet: "d tweet", timestamp: 4},
                {name: "f", tweet: "f tweet", timestamp: 6},
                {name: "g", tweet: "g tweet", timestamp: 5},
                {name: "e", tweet: "e tweet", timestamp: 7},
                {name: "h", tweet: "h tweet", timestamp: 12},
                {name: "i", tweet: "i tweet", timestamp: 9},
              ] });
            }
        }
    }
})
  
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

  it('has a post button', () => {
    wrapper.find('input').setValue('z')
    wrapper.find('textarea').setValue('z')
    const postButton = wrapper.find('button[data-testid="postTweetButton"]')
    expect(postButton.exists()).toBe(true)
  })

  it('displays a table sortable by name', async () => {
    await wrapper.find('th a[data-testid="sort-by-name"]').trigger('click')
    
    expect(wrapper.findAll('.boxotweets tr').at(0).text()).toBe("Name Tweet Posted At")
    expect(wrapper.findAll('.boxotweets tr').at(1).text()).toBe("a a tweet 1")
    expect(wrapper.findAll('.boxotweets tr').at(2).text()).toBe("b b tweet 20")
    expect(wrapper.findAll('.boxotweets tr').at(3).text()).toBe("c c tweet 3")
  })

  it('displays a table sortable by timestamp', async () => {
    await wrapper.find('th a[data-testid="sort-by-timestamp"]').trigger('click')
    
    expect(wrapper.findAll('.boxotweets tr').at(0).text()).toBe("Name Tweet Posted At")
    expect(wrapper.findAll('.boxotweets tr').at(1).text()).toBe("a a tweet 1")
    expect(wrapper.findAll('.boxotweets tr').at(2).text()).toBe("c c tweet 3")
    expect(wrapper.findAll('.boxotweets tr').at(3).text()).toBe("d d tweet 4")
  })
})
