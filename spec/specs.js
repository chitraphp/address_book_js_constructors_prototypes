describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("chitra", "atmakuru");
    expect(testContact.firstName).to.equal("chitra");
    expect(testContact.lastName).to.equal("atmakuru");
    expect(testContact.address).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("chitra", "atmakuru");
    expect(testContact.fullName()).to.equal("chitra atmakuru");
  });

  it("adds the fullAddress method to all contacts", function() {
    var testAddress = new Address("123 Main Street", "Test City", "Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main Street, Test City, Test State");
  });

});
