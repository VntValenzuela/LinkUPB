const { defineConfig } = require("cypress");
const { GoogleSocialLogin } = require("cypress-social-logins").plugins

module.exports = defineConfig({
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET

  },

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        GoogleSocialLogin: GoogleSocialLogin,
      })
    },
  },
});
