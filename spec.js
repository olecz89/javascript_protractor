/**
 * Created by czerwonkaa on 21/04/2017.
 */
//spec.js
describe('Super Calculator', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    /*beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });*/

    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add two numbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

});