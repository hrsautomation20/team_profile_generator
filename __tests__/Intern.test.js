const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("intern object", () => {
    it("should create an object with 'intern'", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
        school: "University Of NorthCarolina",
      };
      const intern = new Intern(obj);
      expect(intern.name).toEqual(expect.any(String));
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.school).toEqual(expect.any(String));
    });
  });
  describe("intern school", () => {
    it("should get intern's school name", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
        school: "University Of NorthCarolina",
      };
      const school = "University Of NorthCarolina";
      const intern = new Intern(obj, school);
      expect(intern.getSchool()).toEqual(expect.any(String));
    });
  });
  describe("intern role", () => {
    it("should get intern's role", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
        school: "University Of NorthCarolina",
        role: "Intern",
      };
      const gitHub = "hrsautomation20";
      const intern = new Intern(obj, gitHub);
      expect(intern.getRole()).toEqual(expect.any(String));
    });
  });
});
