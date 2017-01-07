window.History = new class {
  constructor() {
    this.history = window.history;
  }

  change(page) {
    this.history.replaceState(null, null, '#/' + page.slugify(page));
  }

  reset() {
    this.history.replaceState(null, null, '#/');
  }
};