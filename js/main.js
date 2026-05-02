let tasks = []; // burada global değişken tanımladım. Burası görevlerimizi tutar.
window.onload = function () {
  const data = localStorage.getItem("tasks");

  // üst kısım ise tarayıcıdan tasks verilerini çeker. Ama string gelir.

  if (data) {
    tasks = JSON.parse(data);

    // Burada ise string veriyi array yapıyoruz.

    renderTasks();

    // sayfa açılınca verileri ekrana yazdırma.
  }
};

function addTask() {
  const input = document.getElementById("textInput"); // burada ise ben textInput alanımı çağırdım.
  const value = input.value; // burada da input alanımın içine oluşturduğum value değerimi girmeye başladım.

  if (value === "") return; // burada ise kullanıcı değer girmezse ekran bir şey dönmez.

  const li = document.createElement("li"); // burada ise yeni bir li elemanı oluşturdum.
  li.textContent = value; // burada ise li içine yazılacak text content alanına value değeri yazsın dedim.

  // LOCALSTORAGE İÇİN EKLENECEK

  tasks.push(value);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const btn = document.createElement("button"); // burada ise yeni bir buton oluşturdum.
  btn.textContent = "SİL"; // burada ise butonun text contenti SİL olarak ayarlandı.

  btn.onclick = function () {
    tasks = tasks.filter((t) => t !== value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  };

  li.appendChild(btn); // burada ise her liste elemanım için birer silme butonu oluşturduk.

  renderTasks();
  input.value = ""; // burada ise her ekleme sonrası input alanı boş olsun istiyoruz.
}

// RENDER TASK EKLEMEK ZORUNDAYIM

function renderTasks(){
    const list = document.getElementById("taskList");
    //html deki liste alanını seçiyoruz.

    list.innerHTML = "";
    //eski tüm listeyi siliyoruz ki yeni listeyi ekleyebilelim.

    tasks.forEach(function (task){

        // array içindeki her görevi tek tek geziyoruz.

        const li = document.createElement("li");

        // Yeni bir liste elemanı oluşturuyoruz.

        li.textContent = "task";

        // görevin yazısını li içine koyuyoruz.

        const btn = document.createElement("button");

        //silme butonu oluşturduk.

        btn.textContent = "SİL";

        btn.onclick = function(){
            tasks = tasks.filter((t) => t !== task);

            //tıklanan görevi array den sildik.

            localStorage.setItem("tasks", JSON.stringify(tasks));

            // güncel listeyi tekrar kaydettik.
            
            renderTasks();

            //ekranı yeniden çizdik.
        }

        li.appendChild(btn);
        list.appendChild(li);
        
    })
}
