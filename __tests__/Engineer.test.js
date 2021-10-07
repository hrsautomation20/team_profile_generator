const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("engineer object", () => {
    it("should create an object with 'engineer'", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
      };
      const engineer = new Engineer(obj);
      expect(engineer.name).toEqual(expect.any(String));
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.gitHub).toEqual(expect.any(String));
    });
  });
  describe("github url", () => {
    it("should get github URL", () => {
      const engineer = new Engineer(this.obj);
      expect(engineer.getGitHub()).toEqual(expect.any(String));
    //   console.log(engineer.getGitHub());
    });
  });
  describe("engineer role", () => {
    it("should get engineer role", () => {
      const engineer = new Engineer(this.obj);
      expect(engineer.getRole()).toEqual(expect.any(String));
    });
  });
});
