const sharedConfig = require("tailwind-styled/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: "ui-",
  presets: [sharedConfig],
};
