import Vue from "vue";

Vue.component('event', {
  template: `
    <section class="container--left" :class="{ active: isActive }">
      <button class="icon-close" @click="close">
          <span></span>
      </button>
      <div class="container--left-inner">
          <h1>{{ title }}</h1>
          <p v-for="line in description">{{ line }}</p>
          <p v-for="source in sources"><a href="{{ source }}">{{ source }}</a></p>
      </div>
    </section>
`,
  data() {
    return {
      isActive: false,
      title: '',
      description: [],
      sources: []
    };
  },
  methods: {
    close() {
      this.isActive = false;
      Broadcast.send('EventClosed', {
        title: this.title,
        description: this.description,
        sources: this.sources
      });
    }
  },
  created() {
    Broadcast.listen('EventClosed', () => {
      this.isActive = false;
      this.title = '';
      this.description = [];
      this.sources = [];

      History.reset();
    });

    Broadcast.listen('EventViewed', (item) => {
      this.isActive = true;
      this.title = item.title;
      this.description = item.description;
      this.sources = item.sources;

      History.change(this.title);
    });
  }
});
