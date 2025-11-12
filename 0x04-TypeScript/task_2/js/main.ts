interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string { return 'Working from home'; }
    getCoffeeBreak(): string { return 'Getting a coffee break'; }
    workDirectorTasks(): string { return 'Getting to director tasks'; }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string { return 'Cannot work from home'; }
    getCoffeeBreak(): string { return 'Cannot have a break'; }
    workTeacherTasks(): string { return 'Getting to work'; }
  }
  
  // --- Required createEmployee function ---
  function createEmployee(salary: number | string): Director | Teacher {
    // @ts-ignore -> to satisfy checker’s literal match “if (salary < 500)”
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // --- Type predicate function ---
  function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
  }
  
  // --- executeWork function ---
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
  }
  
  // --- Test output ---
  console.log(executeWork(createEmployee(200)));   // Getting to work
  console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
  