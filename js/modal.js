// var modal_callers = document.querySelector('.modal-caller');
// function modal(obj){
//     console.log(obj);
// }
// function Hide(obj){
//     console.log("hiding...");
//     console.log(obj);
//     obj.style.display = "none";
// }
function AddEmployee(obj) {
    Modal(obj);
}
function AssignEquipments(obj) {
    Modal(obj);
}
function Modal(obj) {
    var modal_classes = document.getElementsByClassName('modal');
    for (var i = 0; i < modal_classes.length; i++) { //set all modals hidden
        var curr_modal = modal_classes[i];
        // curr_modal.addEventListener("click",Hide);
        curr_modal.style.display = "none";
    }
    var modal_name = obj.getAttribute("modal");
    console.log(modal_name);
    var modal = document.getElementById(modal_name);
    console.log(modal);
    var container = modal.childNodes[1];
    console.log(container);
    var form = container.childNodes[1];
    console.log(form);
    window.onkeyup = function (event) {
        if (event.key == "Escape") {
            curr_modal.style.display = "none";
            form.reset();
        }
    };
    window.onclick = function (event) {
        if ((event.target == curr_modal) || event.target == container) {
            curr_modal.style.display = "none";
            form.reset();
        }
    };
    modal.style.display = "block"; //set corresponding modal visible
}
