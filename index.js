// Write your solution in this file!

let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value){

  const updateEmployee = {...employee}
  updateEmployee[key] = value
  return updateEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee["streetAddress"] = "12 Broadway";
  return employee
}
function deleteFromEmployeeByKey(employee, key){
  const deleteEmployee = {...employee}
  delete deleteEmployee.name;
  return deleteEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee.name
   return employee

}







// let employee = {
//   name: "Sam",
//   streetAddress: "11 Broadway"
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   return {
//     ...employee,
//     [key]: value
//   };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//   let newEmployee = { ...employee };
//   delete newEmployee[key];
//   return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//   delete employee[key];
//   return employee;
// }

