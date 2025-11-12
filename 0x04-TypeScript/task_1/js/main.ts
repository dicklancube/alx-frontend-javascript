// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // cannot be changed after initialization
    readonly lastName: string;   // cannot be changed after initialization
    fullTimeEmployee: boolean;   // must always be defined
    yearsOfExperience?: number;  // optional
    location: string;            // must always be defined
    [key: string]: any;          // allow adding any other property (like contract)
  }
  
  // Example usage
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // custom property allowed
  };
  
  console.log(teacher3);
  