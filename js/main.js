function addTask(){
    const input = document.getElementById("textInput");  // burada ise ben textInput alanımı çağırdım.
    const value = input.value; // burada da input alanımın içine oluşturduğum value değerimi girmeye başladım.
    
    if (value === "") return; // burada ise kullanıcı değer girmezse ekran bir şey dönmez.

    const li = document.createElement("li"); // burada ise yeni bir li elemanı oluşturdum.
    li.textContent = value; // burada ise li içine yazılacak text content alanına value değeri yazsın dedim.

    const btn = document.createElement("button"); // burada ise yeni bir buton oluşturdum.
    btn.textContent = "SİL"; // burada ise butonun text contenti SİL olarak ayarlandı.

    btn.onclick = function(){ // burada ise sil butonum için bir fonskiyon oluşturdum.
        li.remove(); // burada fonksiyonun işlevi yani buton li elemanını kaldırsın dedim.
    }

    li.appendChild(btn); // burada ise her liste elemanım için birer silme butonu oluşturduk.

    document.getElementById("taskList").appendChild(li); // burada ise taskList yani bizim görevlerimiz yeni li elemanları üzerine eklenecek.
    input.value = ""; // burada ise her ekleme sonrası input alanı boş olsun istiyoruz.
}

