const arr = [];
function rendertable() {
    var id = document.getElementById("PId").value;
    var name = document.getElementById("PName").value;
    var price = document.getElementById("pPrice").value;
    obj = { "id": id, "name": name, "price": price }
    arr.push(obj);
    var text = ""
    var text = "<table><tr><th>product ID</th><th>Product Name</th><th>Product price</th></tr>"
    for (i = 0; i < arr.length; i++) {
        text += "<tr><td>" + arr[i].id + "</td><td>" + arr[i].name + "</td><td>" + arr[i].price + "</td></tr>";
    }

    document.getElementById("divDisp").innerHTML =text;
    document.getElementById("PId").value ="";
    document.getElementById("PName").value ="";
    document.getElementById("pPrice").value ="";
};













