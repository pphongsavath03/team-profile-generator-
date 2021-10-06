const Employee = require("../emp/employee");
const Manager = require("../emp/manager");
const Engineer = require("../emp/engineer");
const Intern = require("../emp/intern");

//test employee constructor

describe("Testing Employee inputs", () => {
    test("test employee constructor", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    test("Accept name via constructor", () => {
        const name = "Bob";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    test("accept employee ID via constructor", () => {
        const test = 100;
        const emp = new Employee("Foo", test);
        expect(emp.id).toBe(test);
    });

    test("accept email via constructor", () => {
        const test = "bob@gmail.com";
        const emp = new Employee("Foo", 1, test);
        expect(emp.email).toBe(test);
    });

    test("this function returns a name", () => {
        const test = "Bob";
        const emp = new Employee(test);
        expect(emp.getName()).toBe(test);
    });

    test("this function returns a number", () => {
        const test = 100;
        const emp = new Employee("Foo", test);
        expect(emp.getId()).toBe(test);
    });

    test("this function should return an email", () => {
        const test = "bob@gmail.com";
        const emp = new Employee("Foo", 1, test);
        expect(emp.getEmail()).toBe(test);
    });

    test("should return values for employee", () => {
        const test = "Employee";
        const emp = new Employee("Bob", 1, "bob@gmail.com");
        expect(emp.getRole()).toBe(test);
    });

});

// test manager
describe("Testing Manager Inputs", () => {
    test("should return manager office number", () => {
        const test = 100;
        const emp = new Manager("Foo", 1, "manager@gmail.com", test);
        expect(emp.officeNumber).toBe(test);
    });

    test("should return values for manager", () => {
        const test = "Manager";
        const emp = new Manager("Foo", 1, "manager@gmail.com", 100);
        expect(emp.getRole()).toBe(test);
    });

});

// test engineer
describe("Testing Engineer Inputs", () => {
    test("should return github values", () => {
        const test = "GitHubUser";
        const emp = new Engineer("Foo", 1, "engineer@gmail.com", test);
        expect(emp.github).toBe(test);
    });

    test("should return engineer values", () => {
        const test = "Engineer";
        const emp = new Engineer("Foo", 1, "engineer@gmail.com", "GitHubUser");
        expect(emp.getRole()).toBe(test);
    });
});

// test intern

describe("Testing Intern Inputs", () => {
    test("should return school value", () => {
        const test = "OSU";
        const emp = new Intern("Foo", 1, "inter@gmail.com", test);
        expect(emp.school).toBe(test);
    });

    test("should return intern values", () => {
        const test = "Intern";
        const emp = new Intern("Foo", 1, "inter@gmail.com", "OSU");
        expect(emp.getRole()).toBe(test);
    });

});
