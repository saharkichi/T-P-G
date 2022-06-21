//engineer test
//input Github for engineer
const Engineer = require("../lib/Engineer.js");
describe("GitHub", () => {
  it("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const n = new Engineer("Dany", 999, "dany@email.com", testValue);
    expect(n.GitHub).toBe(testValue);
  });

  describe("getRole", () => {
    it("should return \"Engineer\"", () => {
      const testValue = "Engineer";
      const n = new Engineer("Dany", 999, "dany@email.com", "GitHubUser");
      expect(n.getRole()).toBe(testValue);
    });
  });
  //gitHub input
  describe("getGitHub", () => {
    it("Can get GitHub username via getGitHub()", () => {
      const testValue = "GitHubUser";
      const n = new Engineer("Dany", 999, "email@email.com", testValue);
      expect(n.getGitHub()).toBe(testValue);
    });
  });
});

//insterted tests w dummy data to account for all errors