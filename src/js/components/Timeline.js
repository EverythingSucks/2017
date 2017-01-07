import Vue from "vue";
import axios from "axios";

require('./TimelineEvent');

Vue.component('timeline', {
  template: `
  <ul class="timeline">
    <timeline-event v-for="event in events" :event="event"></timeline-event>
  </ul>
`,
  data() {
    return {
      events: []
    }
  },
  mounted() {
    axios.get('/data/events.json')
      .then(response => {
        this.events = response.data;
      }).catch(() => {
      console.error('Something went wrong loading the json file.');
    });
  }
});