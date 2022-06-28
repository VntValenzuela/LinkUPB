describe('login.cy.js', () => {
    it('should visit login page', () => {

        cy.visit('http://localhost:3000/home')
        cy.get('button').click()
        //cy.login("datapiratesgroup3@gmail.com","DATApirates3")
        //cy.loginByGoogleApi()
        cy.wait(3000);
    })


    it('Should login to app', () => {
        cy.visit("https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=885824092476-41mofdk05rsdnvq9i2raej76peh1jj3n.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=nnJiGDPGaDHFoRmsJiznEXXiCIZh_6t3qgBK8Kylgr4&code_challenge=Ewq6X6jLvpRjCKfnyNIY4iKuzmKrKoiqTK_AMEF8KtA&code_challenge_method=S256&flowName=GeneralOAuthFlow")
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Google Login -> uncaught:exception', err);
            // Skip test from https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/fundamentals__errors
            return false;
          });

        cy.url().should('contain', 'accounts.google.com')
        .get('input[type="email"]').type('datapiratesgroup3@gmail.com')
        .type('{enter}').wait(3000);

      // Google Login Redirection: Password Input
      cy.url().should('contain', 'accounts.google.com')
        .get('input[type="password"]').type('DATApirates3')
        .type('{enter}').wait(3000);
    })
}



)

// describe("Login page", () => {

//     it('should visit login page', () => {
//         cy.visit('http://localhost:3000/home')
//         cy.get('button').click()

//     })
//     it("Login with Google", () => {
//       cy.visit("https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=885824092476-41mofdk05rsdnvq9i2raej76peh1jj3n.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=nnJiGDPGaDHFoRmsJiznEXXiCIZh_6t3qgBK8Kylgr4&code_challenge=Ewq6X6jLvpRjCKfnyNIY4iKuzmKrKoiqTK_AMEF8KtA&code_challenge_method=S256&flowName=GeneralOAuthFlow")
//       const username = "datapiratesgroup3@gmail.com"
//       const password = "DATApirates3"
//       const loginUrl = "https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=885824092476-41mofdk05rsdnvq9i2raej76peh1jj3n.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=nnJiGDPGaDHFoRmsJiznEXXiCIZh_6t3qgBK8Kylgr4&code_challenge=Ewq6X6jLvpRjCKfnyNIY4iKuzmKrKoiqTK_AMEF8KtA&code_challenge_method=S256&flowName=GeneralOAuthFlow"
//       const cookieName = "next-auth.session-token"
//       const socialLoginOptions = {
//         username,
//         password,
//         loginUrl,
//         headless: true,
//         logs: false,
//         isPopup: true,
//         loginSelector: `a[href="${Cypress.env(
//           "SITE_NAME"
//         )}/api/auth/signin/google"]`,
//         postLoginSelector: ".unread-count",
//       }
  
//       return cy
//         .task("GoogleSocialLogin", socialLoginOptions)
//         .then(({ cookies }) => {
//           cy.clearCookies()
  
//           const cookie = cookies
//             .filter((cookie) => cookie.name === cookieName)
//             .pop()
//           if (cookie) {
//             cy.setCookie(cookie.name, cookie.value, {
//               domain: cookie.domain,
//               expiry: cookie.expires,
//               httpOnly: cookie.httpOnly,
//               path: cookie.path,
//               secure: cookie.secure,
//             })
  
//             Cypress.Cookies.defaults({
//               preserve: cookieName,
//             })
  
//           }
//         })
//     })
//   })