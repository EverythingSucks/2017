import Vue from "vue";
require('./TimelineEventRow');
let moment = require('moment');

Vue.component('timeline-event', {
  template: `
  <li class="timeline--date">
    <ul class="timeline--date-group">
        <span class="date">{{ date }}</span>
        <timeline-event-row v-for="item in event.items" :item="item"></timeline-event-row>
    </ul>
  </li>
`,
  computed: {
    date() {
      let splitDate = this.event.date.split('-');

      let format = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      return moment(format).format("Do MMMM YYYY");
    }
  },
  props: ['event']
});