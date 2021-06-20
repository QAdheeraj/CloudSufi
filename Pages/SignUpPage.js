var SignUpPage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    var email = element(by.id('email_create'));
    var createButton = element(by.id('SubmitCreate'));

    var gender = element(by.id('id_gender1'));
    var firstName = element(by.id('customer_firstname'));
    var lastName = element(by.id('lastname'));
 
    var password = element(by.id('passwd'));
    var days = element(by.id('days'));
    var months = element(by.id('months'));
    var years = element(by.id('years'));
 
    var address = element(by.id('address1'));
      
    var city = element(by.id('city'));
    var state = element(by.id('id_state'));
    var pincode = element(by.id('postcode'));
      
    var mobileNumber = element(by.id('phone_mobile'));
    var alias = element(by.id('alias'));
      
      
    var submit = element(by.id('submitAccount'));
  
    this.get = async function() {
      await browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    };
  
     this.fillSignUpForm = async function() {
        await email.sendKeys('testeamil@gmail.com');
        await createButton.click();

        await gender.click();
        await firstName.sendKeys('Test');
        await lastName.sendKeys('Last');
        await password.sendKeys('password');
        await days.sendKeys('10');
        await months.sendKeys('May');
        await years.sendKeys('1990');
        await address.sendKeys('address 11 11')

        await city.sendKeys('TestCity');
        await state.sendKeys('Florida');
        await pincode.sendKeys('400012');

        await mobileNumber.sendKeys('9090909090');
        await alias.sendKeys('alias');

        
        await submit.click();

    };
  
  };

  module.exports = new SignUpPage();
 