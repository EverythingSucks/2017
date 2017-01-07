import Vue from "vue";

Vue.component('timeline-event-row', {
  template: `
  <li class="timeline--date-row">
      <button class="name js-name" :class="{ active : isActive }" @click="fired">{{ item.title }}</button>
  </li>
`,
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    fired() {
      if(this.isActive) {
        Broadcast.send('EventClosed', this.item);
      } else {
        Broadcast.send('EventViewed', this.item);
      }
    }
  },
  created() {
    Broadcast.listen('EventViewed', (item) => {
      this.isActive = item.title === this.item.title;
    });

    Broadcast.listen('EventClosed', () => {
      this.isActive = false;
    });
  },
  props: ['item']
});
