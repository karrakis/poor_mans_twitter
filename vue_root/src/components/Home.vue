<template>
  <div class="home">
    <h1>{{ $constLib('HomeTitle') }}</h1>
    <div>
      <form class="tweeterbox-form" @submit.prevent="sendTweet">
        <input name="name" v-model="name" class="namebox" placeholder="name"/>
        <textarea name="tweet" v-model="tweet" class="tweeterbox" placeholder="tweet!"/>
        <button data-testid="postTweetButton" class="submit-button">Submit</button>
      </form>
    </div>
    <button data-testid="getTweetsButton" class="submit-button" @click="fetchTweets">Refresh</button>
    <input v-model="searchText" class="form-control" placeholder="Search table">
    <div class="boxotweets">
      {{sortKey}}
      <table>
        <tr>
          <th>
            <a href="#" @click="sortBy('name')">Name</a>
          </th>
          <th>Tweet</th>
          <th>
            <a href="#" @click="sortBy('timestamp')">Posted At</a>
          </th>
        </tr>
        <tr v-for="tweet in tweets" :key="tweet.timestamp">
          <td>{{tweet.name}}</td>
          <td>{{tweet.tweet}}</td>
          <td>{{tweet.timestamp}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {},
  data: function() {
    return {
      searchText: '',
      sortKey: 'timestamp',
      tweets: []
    }
  },
  methods: {
    async sendTweet (event) {
      await this.$http.post(
        '/tweetstweets/', 
        { 
          name: event.target.elements.name.value,
          tweet: event.target.elements.tweet.value 
        }
      );
    },
    fetchTweets () {
      this.$http.get(
        '/tweetstweets/'
      ).then(response => this.tweets = response.data);
    },
    sortBy: function(sortKey) {
      this.tweets = this.tweets.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
  }

  .submit-button {
    padding: 2rem 4rem;
  }

  .tweeterbox-form {
    width: 50%;
    min-height: 100px;
  }
  .tweeterbox {
    width: 100%;
    height: 100%;
    border: solid 1px blue;
  }

  .boxotweets {
    margin-top: 7px;
    width: 50%;
    height: auto;
    min-height: 100px;
    min-width: 100px;
    border: solid 1px blue;
    background: lightgray;
  }
</style>
