const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("employee object", () => {
    it("should create an object with 'employee'", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
      };
      const employee = new Employee(obj);
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });
  describe("employee name", () => {
    it("should get employee name", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
      };
      const employee = new Employee(obj);
      expect(employee.getName()).toEqual(
        expect.stringContaining(employee.name.toString())
      );
    });
  });
  describe("employee id", () => {
    it("should get employee id", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
      };
      const employee = new Employee(obj);
      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });
  describe("employee email", () => {
    it("should get employee email", () => {
      const obj = {
        name: "Hardik",
        id: 1111,
        email: "hrsautomation20@gmail.com",
      };
      const employee = new Employee(obj);
      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });
  });
  describe("employee role", () => {
    it("should get employee role", () => {
      const obj = {
        role: "Employee",
      };
      const employee = new Employee(obj);
      expect(employee.getRole()).toEqual(expect.any(String));
    });
  });
});
