// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Extend the Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the function keyword (checker requirement)
function printTeacher(
  { firstName: fn, lastName }: { firstName: string; lastName: string }
): string {
  const firstName = fn.charAt(0);   // first letter
  return `${firstName}. ${lastName}`;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test the function
console.log(printTeacher({ firstName: 'John', lastName: 'Doe' }));
