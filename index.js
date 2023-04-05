// Your code here
// Create Employee Record
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// Create Employee Records
function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

// Create Time In Event
function createTimeInEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employee;
}

// Create Time Out Event
function createTimeOutEvent(employee, dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employee;
}

// Hours Worked on Date
function hoursWorkedOnDate(employee, date) {
  let timeIn = employee.timeInEvents.find((event) => event.date === date);
  let timeOut = employee.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// Wages Earned on Date
function wagesEarnedOnDate(employee, date) {
  let hoursWorked = hoursWorkedOnDate(employee, date);
  return hoursWorked * employee.payPerHour;
}

// All Wages For
function allWagesFor(employee) {
  let dates = employee.timeInEvents.map((event) => event.date);
  return dates.reduce(
    (total, date) => total + wagesEarnedOnDate(employee, date),
    0
  );
}

// Calculate Payroll
function calculatePayroll(employees) {
  return employees.reduce(
    (total, employee) => total + allWagesFor(employee),
    0
  );
}
