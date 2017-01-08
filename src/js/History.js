window.History = new class {
  constructor() {
    this.history = window.history;
  }

  change(page) {
    ga('set', 'page', page.slugify(page));
    ga('send', 'pageview');
    this.history.replaceState(null, null, '#/' + page.slugify(page));
  }

  reset() {
    ga('send', 'page', '/');
    ga('send', 'pageview');
    this.history.replaceState(null, null, '#/');
  }
};