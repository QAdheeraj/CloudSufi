var signUpPage = require('../Pages/SignUpPage');
// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', async function() {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(5000);
    
    signUpPage.get();
    signUpPage.fillSignUpForm();
    
  });
});