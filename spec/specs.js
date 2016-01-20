describe('palindrome', function() {
  it("will compare original string to its reversed string and return true if its a palindrome", function() {
    expect(palindrome("hannah")).to.equal(true);
  });

  it("will return false if the input is not a palindrome", function() {
    expect(palindrome("bear")).to.equal(false);
  });

});
