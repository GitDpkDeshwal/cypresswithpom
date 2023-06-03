/*
  Calling the key-values from Cypress.env.json file
 */
import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.number('501-###-###'); 

const url = Cypress.env('url');
const formPageUrl = Cypress.env('formPageUrl');

export default class formPage {

    static successfullLoginForm() {
        this.maximizePage();
        this.selectFormTab();
        this.selectPracticeForm();
        this.verifyFormPageURL();
        this.selectGenderRadioButton();
        this.enterFirstNameField();
        this.enterLastNameField();
        this.enterEmailField();
        this.enterMobNumberField();
        this.enterDateOfBirthField();
        this.enterSubjectNameField();
        this.selectHobbiesCheckbox();
        this.enterCurrentAddressField();
        this.selectStateField();
        this.selectCityField();
        this.clickSubmitButton();
    }

    static visitHomePage() {
        cy.visit(url);
        return this;
    }

    static maximizePage() {
        cy.viewport(1920, 1080);
        return this;
    }

    static selectFormTab() {
        cy.get('#app div.home-body  div:nth-child(2) > div').click();
        return this;
    }

    static selectPracticeForm() {
        cy.get('div[class="element-list collapse show"] li#item-0 > span').click();
        return this;
    }

    static verifyFormPageURL() {
        cy.url().should('include', formPageUrl);
    }

    static enterFirstNameField() {
        cy.get('input#firstName').should('be.visible').type(randomName);
        return this;
    }

    static enterLastNameField() {
        cy.get('input#lastName').should('be.visible').type('Test');
        return this;
    }

    static selectGenderRadioButton() {
        cy.get('input#gender-radio-1').click({ force: true });
        return this;
    }

    static enterEmailField() {
        cy.get('input#userEmail').should('be.visible').type(randomEmail);
        return this;
    }

    static enterMobNumberField() {
        cy.get('input#userNumber').should('be.visible').type(randomPhoneNumber);
        return this;
    }

    static enterDateOfBirthField() {
        // Get the current date
        const currentDate = new Date();

        // Extract the year, month, and day from the current date
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');

        // Construct the date string in the desired format
        const dateStr = `${day}-${month}-${year}`;

        // Use Cypress commands to interact with the date input field
        cy.get('input#dateOfBirthInput').type(dateStr);

    }

    static enterSubjectNameField() {
        cy.get('#subjectsContainer input').type('Test',{force: true});
        return this;
    }

    static selectHobbiesCheckbox() {
        cy.get('#hobbies-checkbox-3').click({ force: true });
        return this;
    }

    static enterCurrentAddressField() {
        cy.get('#currentAddress').type('Testing');
        return this;
    }

    static selectStateField() {
        cy.get('div#state').type('Haryana{enter}');
        return this;
    }

    static selectCityField() {
        cy.get('div#city').type('Karnal{enter}');
        return this;
    }

    static clickSubmitButton() {
        cy.get('button[type="submit"]').should('be.visible').click();
        return this;
    }
}