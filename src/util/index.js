function debounce(fn, delay, context) {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context || this, args);
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.apply(context || this, args);
      }, delay);
    }
  };
}

export { debounce };