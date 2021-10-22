// import { Employee } from "./employee";
// import { Equipment } from "./Equipment";
// import { EquipmentEmployee } from "./EquipmentEmployee";

class Employee {
    EmployeeId: number;
    FirstName: string;
    LastName: string;
    PhoneNo: string;
    Address: string;
    DateOfBirth: string;
    Role: string;
    constructor(EmployeeId: number,
        FirstName: string,
        LastName: string,
        PhoneNo: string,
        Address: string,
        DateOfBirth: string,
        Role: string) {
        this.EmployeeId = EmployeeId;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.PhoneNo = PhoneNo;
        this.Address = Address;
        this.DateOfBirth = DateOfBirth;
        this.Role = Role;
    }
}

class Equipment{
    EquipId: number;
    EquipName : string;

    constructor(EquipId: number, EquipName : string){
        this.EquipId = EquipId;
        this.EquipName = EquipName;
    }
}

class EquipmentEmployee{
    EquipId: number;
    EmployeeId : number;

    constructor(EquipId: number, EmployeeId : number){
        this.EquipId = EquipId;
        this.EmployeeId = EmployeeId;
    }
}

var employeeList : Array<Employee> = [
    new Employee(1,"Akhilesh","Boodhun","59028880","Riv Du Rempart","1999-04-26","Developer"),
    new Employee(2,"Bousun","Teeluck","87654321","Vacoas","1999-06-30","Tester"),
    new Employee(3,"Geesham","Hosanee","12345678","Rose Hill","1999-02-28","SysAdmin"),
];

var equipmentList : Array<Equipment> = [
    new Equipment(10,"Headset"),
    new Equipment(11,"Mouse"),
    new Equipment(12,"Keyboard"),
]


var equipmentEmployeeList : Array<EquipmentEmployee> =[
    new EquipmentEmployee(10,1),
    new EquipmentEmployee(12,1),
    new EquipmentEmployee(11,2),
    new EquipmentEmployee(11,3),
    new EquipmentEmployee(12,3),
];

 var assignedList : Array<Equipment> = [];

 var displayDetails = document.querySelector('#table-body');
 displayDetails.innerHTML = '';
 employeeList.forEach(emp => {
     var text = `<div class="row-wrapper">
     <h4>${emp.EmployeeId}</h4>
     <h4>${emp.FirstName}</h4>
     <h4>${emp.LastName}</h4>
     <h4>${emp.PhoneNo}</h4>
     <h4>${emp.Address}</h4>
     <h4>${emp.DateOfBirth}</h4>
     <h4>${emp.Role}</h4>
     <button class="btn assign-equipments" onclick="AssignEquipments(this)" modal="modalEquipments">Manage Equipments</button>
 </div>`;
     displayDetails.innerHTML += text;
 });


//  JSON.parse('[{"EmployeeId":1,"FirstName":"Akhilesh","LastName":"Boodhun","PhoneNo":"59028880","Address":"Riv Du Rempart","DateOfBirth":"1999-04-26","Role":"Developer"},{"EmployeeId":2,"FirstName":"Bousun","LastName":"Teeluck","PhoneNo":"87654321","Address":"Vacoas","DateOfBirth":"1999-06-30","Role":"Tester"},{"EmployeeId":3,"FirstName":"Geesham","LastName":"Hosanee","PhoneNo":"12345678","Address":"Rose Hill","DateOfBirth":"1999-02-28","Role":"SysAdmin"}]').map(emp => new Employee(emp.EmployeeId,emp.FirstName,emp.LastName,emp.PhoneNo,emp.Address,emp.DateOfBirth,emp.Role))