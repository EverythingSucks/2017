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
      events: [],
      last_modified: null
    }
  },
  methods: {
    poll() {
      axios.head('/data/events.json')
        .then(response => {
          let current_modified = new Date(response.headers['last-modified']);

          if(current_modified > this.last_modified) {
            this.fetchData();
          }
        })
        .catch((e) => {
          throw e;
        });
    },

    fetchData(callback) {
      callback = callback || function () {};

      axios.get('/data/events.json')
        .then(response => {
          this.events = response.data.reverse();
          this.last_modified = new Date(response.headers['last-modified']);
          callback();
        }).catch((e) => {
        throw e;
      });
    }
  },
  mounted() {
    this.fetchData(() => {
      Core.setup();
    })
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

    setInterval(() => {
      this.poll();
    }, 30 * 1000);
  }
});
