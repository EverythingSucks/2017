import Vue from "vue";

Vue.component('event', {
  template: `
    <section class="container--left" :class="{ active: isActive }">
      <button class="icon-close" @click="close">
          <span></span>
      </button>
      <div class="container--left-inner">
          <h1>{{ title }}</h1>
          <div>{{ description }}</div>
      </div>
    </section>
`,
  data() {
    return {
      isActive: false,
      title: '',
      description: ''
    };
  },
  methods: {
    close() {
      this.isActive = false;
    }
  },
  created() {
    Broadcast.listen('EventViewed', (item) => {
      this.isActive = true;
      this.title = item.title;
      this.description = item.description;
    });
  }
});