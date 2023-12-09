function submitForm() {
  // Get form values
  let namaProduct = document.getElementById("namaProduct").value;
  let namaUser = document.getElementById("namaUser").value;
  let email = document.getElementById("email").value;
  let jmlOrder = document.getElementById("jmlOrder").value;

  // Validate form fields
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

   // Clear the form fields
 document.getElementById("namaProduct").value = "";
 document.getElementById("namaUser").value = "";
 document.getElementById("email").value = "";
 document.getElementById("jmlOrder").value = "";
}


