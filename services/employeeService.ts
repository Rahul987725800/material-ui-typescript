import { EmployeeType } from '@components/types';

const KEYS = {
  employees: 'employees',
};
export const getDepartmentCollection = () => [
  { id: 1, title: 'Development' },
  { id: 2, title: 'Marketing' },
  { id: 3, title: 'Accounting' },
  { id: 4, title: 'HR' },
];
export function insertEmployee(employee: EmployeeType) {
  let employees = getAllEmployees();
  employee.id = employees.length;
  employees.push(employee);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) === null) {
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  }
  let employees: EmployeeType[] = JSON.parse(
    localStorage.getItem(KEYS.employees)!
  );
  const departments = getDepartmentCollection();
  employees = employees.map((employee: EmployeeType) => {
    return {
      ...employee,
      department: departments.find(
        (department) => department.id == employee.departmentId
      )!.title,
    };
  });
  // console.log(employees);
  return employees;
}
