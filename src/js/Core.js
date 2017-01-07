window.Core = new class {
  constructor() {
    this.location = window.location;
  }

  setup() {
    let slug = this.location.hash.split('#/')[1];

    if (typeof slug !== 'undefined') {
      Broadcast.send('LoadEvent', slug);
    }
  }
};