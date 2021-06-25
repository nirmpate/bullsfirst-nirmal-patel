describe('Sign in page', function () {
  it('renders correctly', function () {
    // Go to home page
    cy.visit('/sign-in');

    //
    cy.contains('Sign In Works');
  });
});
