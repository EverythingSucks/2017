import Vue from "vue";

Vue.component('timeline-event-row', {
  template: `
  <li class="timeline--date-row">
      <button class="name js-name" @click="fired">{{ item.title }}</button>
  </li>
`,
  methods: {
    fired() {
      Broadcast.send('EventViewed', this.item);
    }
  },
  props: ['item']
});