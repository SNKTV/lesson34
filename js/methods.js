export {
    totalSalary,
    departmentsQuantity,
    departmentsSalary
}

// Завдання 1

function totalSalary(employees) {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
}

// Завдання 2

function departmentsQuantity(employees) {
    const departments = new Set();
    for (let i = 0; i < employees.length; i++) {
        departments.add(employees[i].department);
    }
    return departments.size;
}

// Завдання 3

function departmentsSalary(employees) {
    const result = {};
    for (let i = 0; i < employees.length; i++) {
      const department = employees[i].department;
      if (!result[department]) {
        result[department] = employees[i].salary;
      } else {
        result[department] += employees[i].salary;
      }
    }
    return result;
  }
  