//employee test
const Employee = require ("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
     
      it("Can instantiate Employee instance", () => {
        const n = new Employee("Sahar", 11, "sahar@email.com");
        expect(typeof(n)).toBe("object");
        });  
     
        it("should create an employee object with a name, id and email if provided with valid arguments", () => {
            // testing employee sahar and inputting expected data
            const employee = new Employee("Sahar", 11, "sahar@email.com");

            expect(employee.name).toEqual("Sahar");
            expect(employee.id).toEqual(11);
            expect(employee.email).toEqual("sahar@email.com");
        });

        it("should throw an error if provided no arguments", () => {
            // make sure an error is returned if no string, id, or number is provided
            const callback = () => new Employee();
            expect(callback).toThrowError();
        });

        it("should throw a specific error if 'name' is not a string", () => {
            const callback = () => new Employee(55, 321, "email@email.com");
            const error = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(callback).toThrowError(error);
          });

        it("should throw a specific error if not provided an id", () => {
            // test these errors through line 57
            const callback = () => new Employee("Cam", "cam@email.com");
            const error = new Error("Expected parameter 'id' to be a non-negative number");
            expect(callback).toThrowError(error);
        });

        it("should throw a specific error if 'id' is not a number", () => {
            const callback = () => new Employee("Bob", "5", "email@email.com");
            const error = new Error("Expected parameter 'id' to be a non-negative number");
            expect(callback).toThrowError(error);
          });
      
          it("should throw a specific error if 'id' is less than 0", () => {
            const callback = () => new Employee("Bob", -1, "email@email.com");
            const error = new Error("Expected parameter 'id' to be a non-negative number");
            expect(callback).toThrowError(error);
          });

          it("should throw a specific error if 'email' is not a string", () => {
            const callback = () => new Employee("Bob", 555, 666);
            const error = new Error("Expected parameter 'email' to be a non-empty string");
            expect(callback).toThrowError(error);
          });

    })

  describe("getName", () => {
      it("Can get name via getName() function", () => {
          const testValue = "Sahar";
          const n = new Employee(testValue, 11, "sahar@email.com");
          expect(n.getName()).toBe(testValue);
      });
  });
      
  describe("getId", () => {
      it("Can get id via getId()", () => {
          const testValue = 123;
          const n = new Employee("Bob", testValue, "email@email.com");
          expect(n.getId()).toBe(testValue);
      });
  });
      
  describe("getEmail", () => {
      it("Can get email via getEmail()", () => {
          const testValue = "email@email.com";
          const n = new Employee("Bob", 123, testValue);
          expect(n.getEmail()).toBe(testValue);
      });
  });
      
  describe("getRole", () => {
      it("getRole() should return \"Employee\"", () => {
          const testValue = "Employee";
          const n = new Employee("Sahar", 11, "sahar@email.com");
          expect(n.getRole()).toBe(testValue);
      });
  });
  })

  //insterted tests w dummy data to account for all errors