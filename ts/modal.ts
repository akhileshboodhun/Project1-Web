// var modal_callers = document.querySelector('.modal-caller');
// function modal(obj){
//     console.log(obj);
// }

// function Hide(obj){
//     console.log("hiding...");
//     console.log(obj);
//     obj.style.display = "none";
// }

function AddEmployee(obj){
    Modal(obj);
}

function AssignEquipments(obj){
    var parent = obj.parentNode;
    var emp_field = parent.childNodes[1];
    var emp_id = emp_field.firstChild.textContent;
    var empIdInput = document.getElementById('EmployeeId') as HTMLInputElement;
    empIdInput.value = emp_id;

    Modal(obj);
}

function Modal(obj){
    var modal_classes = document.getElementsByClassName('modal');
    for( var i=0; i<modal_classes.length;i++){  //set all modals hidden
        var curr_modal = modal_classes[i] as HTMLElement;
        // curr_modal.addEventListener("click",Hide);

        curr_modal.style.display ="none";
    }
    var modal_name = obj.getAttribute("modal");
    console.log(modal_name);
    var modal = document.getElementById(modal_name);
    console.log(modal);
    var container = modal.childNodes[1] as HTMLDivElement;
    console.log(container);
    var form = container.childNodes[1] as HTMLFormElement;
    console.log(form);
    window.onkeyup = function(event) {
        if (event.key == "Escape"){
            modal.style.display = "none";
            form.reset();
        }
    }
    window.onclick = function(event) {
        if ((event.target == modal) || event.target == container) {
            modal.style.display = "none";
            form.reset();
        }
      }
    modal.style.display = "block"; //set corresponding modal visible
}