function submitForm() {
  // Get form values
  var namaProduct = document.getElementById("namaProduct").value;
  var namaUser = document.getElementById("namaUser").value;
  var email = document.getElementById("email").value;
  var jmlOrder = document.getElementById("jmlOrder").value;

  // You can perform further validation or processing here

  // Display the values (for demonstration purposes)
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

  // You can also send the data to the server using AJAX or other methods
}
