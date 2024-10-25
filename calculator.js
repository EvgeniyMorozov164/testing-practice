const calculator = {
  add: function(a, b) {
    if (!arguments) {
      return null;
    }

    if (arguments.length === 1) {
      return arguments[0];
    }

    return a + b;
  },
};

export { calculator };