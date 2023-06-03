import formPage from "../FomePage/fomePage";

describe('Submit Form Scenario', () => {
    beforeEach(() => {
        formPage.visitHomePage();
    });

    it('Successfully Submit Form scenario', () => {
        formPage.successfullLoginForm();
    });
});
