var employeeList = [
    new Employee(1, "Akhilesh", "Boodhun", "59028880", "Riv Du Rempart", "1999-04-26", "Developer"),
    new Employee(2, "Bousun", "Teeluck", "87654321", "Vacoas", "1999-06-30", "Tester"),
    new Employee(3, "Geesham", "Hosanee", "12345678", "Rose Hill", "1999-02-28", "SysAdmin"),
];
var equipmentList = [
    new Equipment(10, "Headset"),
    new Equipment(11, "Mouse"),
    new Equipment(12, "Keyboard"),
];
var equipmentEmployeeList = [
    new EquipmentEmployee(10, 1),
    new EquipmentEmployee(12, 1),
    new EquipmentEmployee(11, 2),
    new EquipmentEmployee(11, 3),
    new EquipmentEmployee(12, 3),
];
var filteredList = employeeList;
var searchBy = document.querySelector('#SearchBy');
searchBy.onchange = function (event) {
    var searchInput = document.querySelector('input[name="SearchValue"]');
    searchInput.value = '';
    filteredList = employeeList;
    GenTable();
};
function Search(obj) {
    var selectedIndex = searchBy.selectedIndex;
    var searchValue = obj.value.toLowerCase();
    console.log(searchValue);
    switch (selectedIndex) {
        case 1:
            break;
        case 2:
            filteredList = employeeList.filter(function (emp) { return emp.FirstName.toLowerCase().includes(searchValue) || emp.LastName.toLowerCase().includes(searchValue); });
            break;
        case 3:
            filteredList = employeeList.filter(function (emp) { return emp.DateOfBirth.toLowerCase().includes(searchValue); });
            break;
    }
    console.log(filteredList);
    GenTable();
}
function GenTable() {
    var displayDetails = document.querySelector('#table-body');
    displayDetails.innerHTML = '';
    filteredList.forEach(function (emp) {
        var text = "<div class=\"row-wrapper\">\n     <h4>" + emp.EmployeeId + "</h4>\n     <h4>" + emp.FirstName + "</h4>\n     <h4>" + emp.LastName + "</h4>\n     <h4>" + emp.PhoneNo + "</h4>\n     <h4>" + emp.Address + "</h4>\n     <h4>" + emp.DateOfBirth + "</h4>\n     <h4>" + emp.Role + "</h4>\n     <button class=\"btn\" onclick=\"AssignEquipments(this)\">Manage Equipments</button>\n </div>";
        displayDetails.innerHTML += text;
    });
}
GenTable();
//  JSON.parse('[{"EmployeeId":1,"FirstName":"Akhilesh","LastName":"Boodhun","PhoneNo":"59028880","Address":"Riv Du Rempart","DateOfBirth":"1999-04-26","Role":"Developer"},{"EmployeeId":2,"FirstName":"Bousun","LastName":"Teeluck","PhoneNo":"87654321","Address":"Vacoas","DateOfBirth":"1999-06-30","Role":"Tester"},{"EmployeeId":3,"FirstName":"Geesham","LastName":"Hosanee","PhoneNo":"12345678","Address":"Rose Hill","DateOfBirth":"1999-02-28","Role":"SysAdmin"}]').map(emp => new Employee(emp.EmployeeId,emp.FirstName,emp.LastName,emp.PhoneNo,emp.Address,emp.DateOfBirth,emp.Role))
