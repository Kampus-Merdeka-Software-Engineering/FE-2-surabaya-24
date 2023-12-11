function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


function submitForm() {
  let namaProduct = document.getElementById("namaProduct").value;
  let namaUser = document.getElementById("namaUser").value;
  let email = document.getElementById("email").value;
  let jmlOrder = document.getElementById("jmlOrder").value;

  if (
    namaProduct === "" ||
    namaUser === "" ||
    email === "" ||
    jmlOrder === ""
  ) {
    alert("Semua form harus terisi.");
    return;
  }
  alert(
    "\nNama Product: " +
      namaProduct +
      "\nNama User: " +
      namaUser +
      "\nEmail: " +
      email +
      "\nJumlah Order: " +
      jmlOrder
  );

  document.getElementById("namaProduct").value = "";
  document.getElementById("namaUser").value = "";
  document.getElementById("email").value = "";
  document.getElementById("jmlOrder").value = "";
}
