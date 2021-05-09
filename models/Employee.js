function Employee() {
  // Prototype => instance
  this.employeeCode = "";
  this.employeeName = "";
  this.employeePostion = "";
  this.employeeSalary = "";
  this.employeeTimeWork = "";
  this.indexPosition = "";

  this.caculateEmployeeSalary = function () {
    var sumSalary = this.employeeSalary * this.indexPosition;

    return sumSalary;
  };

  this.caculateEmployeeLevel = function () {
    var level = "";

    if (this.employeeTimeWork >= 120) {
      level = "Xuất sắc";
    } else if (100 <= this.employeeTimeWork && this.employeeTimeWork < 120) {
      level = "Giỏi";
    } else if (75 <= this.employeeTimeWork && this.employeeTimeWork < 100) {
      level = "Khá";
    } else {
      level = "Trung bình";
    }

    return level;
  };
}
