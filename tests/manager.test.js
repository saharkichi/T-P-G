//manager test
//require employee and manager lib.js
//input office number for manager card
const Manager = require ("../lib/Manager.js");
const Employee = require("../lib/Employee.js");
describe("OfficeNumber", () => {
    it("Can set Office Number via constructor", () => {
      const testValue = 607;
      const n = new Manager("Tormund", 666, "tormund@email.com", testValue);
      expect(n.officeNumber).toBe(testValue);
     });
  
     it("should throw a specific error if 'OfficeNumber' is not a number", () => {
        const callback = () => new Manager("Tormund", 666, "tormund@email.com", "69");
        const error = new Error("Expected parameter 'OfficeNumber' to be a number");
  
        expect(callback).toThrowError(error);
      });
  
      it("should throw a specific error if 'OfficeNumber' is less than 0", () => {
        const callback = () => new Manager("Tormund", 666, "tormund@email.com", -7);
        const error = new Error("Expected parameter 'OfficeNumber' to be a non-negative number");
  
        expect(callback).toThrowError(error);
      });


    describe("getRole", () => {
    it("should return \"Manager\"", () => {
      const testValue = "Manager";
      const n = new Manager("Tormund", 666, "tormund@email.com", 678);
      expect(n.getRole()).toBe(testValue);
    });
    });
    describe ("getOfficeNumber", () => {
    it("Can get Office Number via getOfficeNumber()", () => {
      const testValue = 678;
      const n = new Manager("Sansa", 213, "sansa@email.com", testValue);
      expect(n.getofficeNumber()).toBe(testValue);
    });  
    });
  });

  //insterted tests w dummy data to account for all errors