class Dictionary {
  options = {};

  constructor(options) {
    this.options = options;
    Object.assign(this, options);
  }

  asArray() {
    const array = Object.keys(this.options);
    return array.map((key) => ({
      key,
      value: key,
      ...this.options[key],
    }));
  }

  keys() {
    return Object.keys(this.options);
  }

  values() {
    return Object.values(this.options);
  }

  title(key) {
    if (!this.options[key]) return 'Нет элемента';

    return this.options[key].title || this.options[key];
  }
}

export { Dictionary };
