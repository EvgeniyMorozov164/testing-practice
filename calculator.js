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

  subtract: function(a, b) {
    if (!arguments) {
      return null;
    }

    if (arguments.length === 1) {
      return arguments[0];
    }

    return a - b;
  },

  divide: function(a, b) {
    if (!arguments) {
      return null;
    }

    if (arguments.length === 1) {
      return arguments[0];
    }

    if (b === 0) {
      return "You cant divide by ZERO";
    }

    return a / b;
  },

  multiply: function(a, b) {
    if (!arguments) {
      return null;
    }

    if (arguments.length === 1) {
      return arguments[0];
    }

    return a * b;
  },
};

export { calculator };