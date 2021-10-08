const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("manager object", () => {
    it("should create an object with 'manager'", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
        officeNumber: "727-507-1198",
      };
      const manager = new Manager(obj);
      expect(manager.name).toEqual(expect.any(String));
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.email).toEqual(expect.any(String));
      expect(manager.officeNumber).toEqual(expect.any(String));
    });
  });
  describe("manager role", () => {
    it("should get manager role", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
        officeNumber: 727 - 507 - 1198,
        role: "Manager",
      };
      const manager = new Manager(obj);
      expect(manager.getRole()).toEqual(expect.any(String));
    });
  });
});
