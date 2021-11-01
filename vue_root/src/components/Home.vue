<template>
  <div class="home">
    <h1>{{ $constLib('HomeTitle') }}</h1>
    <form class="tweeterbox-form" @submit.prevent="sendTweet">
      <input v-model="name" class="namebox" placeholder="name"/>
      <textarea v-model="tweet" class="tweeterbox" placeholder="tweet!"/>
      <button />
    </form>
    <div class="boxotweets">
      {{ form.tweet }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data: function() {
    return {
      form: {
        name: '',
        tweet: ''
      }
    }
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
