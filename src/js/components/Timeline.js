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
        Core.setup();
      }).catch((e) => {
        throw e;
      });
  },
  created() {
    Broadcast.listen('LoadEvent', (slug) => {
      let found = false;
      this.events.forEach(function (event) {
        event.items.forEach(function (item) {
          if (item.title.slugify() === slug) {
            found = true;
            Broadcast.send('EventViewed', item);
          }
        });
      });

      if (!found) {
        History.reset();
      }
    });
  }
});