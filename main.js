// $(function() {
 
//     $.getJSON('list.json', function(data) {
//         $.each(data, function(i, f) {
            
//            var to_do_list = "<div  class='list'><a href=''>"+ f.title + "</a></div>"
//            var ul=document.getElementById("myUL");
//             $(to_do_list).appendTo(ul);
//       });
 
//     });
 
// });

let availableTasks=[];

window.onload = () => {
    generateDummyTodo();
};

function generateDummyTodo() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
    xhttp.onload = () => {
        let dummyTasks = JSON.parse(xhttp.response);
        for (var task of dummyTasks) {
            availableTasks.push(task.title);
        }
        displayAllTasks();
        deleteTask();
    };
}

function displayAllTasks() {
    let toDo=document.querySelector('div#taskList ul');
    let ddl=document.querySelector('#ddlList');
    toDo.innerHTML='';
    ddl.innerHTML='';

    for(let todo of availableTasks){
        let task = `<li class='list'>${todo}</li>`;
        let ddlTask = `<li>${todo}</li>`
        toDo.innerHTML += task;
        ddl.innerHTML +=ddlTask;
    }
}

function deleteTask(){
    var myNodelist = document.getElementsByClassName("list");
    console.log(myNodelist.length);
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

function searchList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().startsWith(filter)) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    document.getElementById("myInput").value = "";
}

function dropdownListShow() {
    input = document.getElementById('myInput');
    
    if (input.value == "") {
        document.getElementById("ddlList").style.display = "none";
        return;
    }

    document.getElementsByClassName("dropdown-content")[0].style.display="block";
    var input, filter, ul, li, a, i, txtValue;
    filter = input.value.toUpperCase();
    ul = document.getElementById("ddlList");
    ul.style.display = "block";
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filter)) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }    
    
}

function dropdownListHide(){
    document.getElementsByClassName("dropdown-content")[0].style.display="none";
}

