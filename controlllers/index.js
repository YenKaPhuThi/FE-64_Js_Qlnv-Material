// Bước 1: Định nghĩa event cho btn Confim
document.querySelector("#btnConfirm").onclick = function () {
  // Bước 2: Lấy thông tin từ input người dùng đưa vào đối tượng

  var employee = new Employee();

  var tagPosition = document.querySelector("#employeePosition");
  var selectedOption = tagPosition[tagPosition.selectedIndex];

  employee.employeeCode = document.querySelector("#employeeCode").value;
  employee.employeeName = document.querySelector("#employeeName").value;
  employee.employeePosition = selectedOption.innerHTML;
  employee.employeeSalary = document.querySelector("#employeeSalary").value;
  employee.indexPosition = document.querySelector("#employeePosition").value;
  employee.employeeTimeWork = document.querySelector("#employeeTimeWork").value;

  // Bước 3: Hiện thị thông tin
  document.querySelector("#employeeCodeTxt").innerHTML = employee.employeeCode;
  document.querySelector("#employeeNameTxt").innerHTML = employee.employeeName;
  document.querySelector("#employeePositionTxt").innerHTML =
    employee.employeePosition;
  document.querySelector(
    "#employeeSalaryTxt"
  ).innerHTML = employee.caculateEmployeeSalary();
  document.querySelector(
    "#employeeLevelTxt"
  ).innerHTML = employee.caculateEmployeeLevel();

  // * Note
  // SelectedIndex: là vị trí được chọn trong thẻ <select></select>
};
