function addTask(){
    const input = document.getElementById("textInput");
    const value = input.value;

    if (value === "") return;

    const li = document.createElement("li");
    li.textContent = value;

    const btn = document.createElement("button");
    btn.textContent = "SİL";

    btn.onclick = function(){
        li.remove();
    }

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}