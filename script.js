var addButton = document.getElementById("btnadd");

addButton.addEventListener("click", addToList);

function addToList () {
    var newLine = document.createElement("li");
    newLine.className = "items";
    var inputValue = document.getElementById("textinput").value;
    var inputText = document.createTextNode(inputValue);

    newLine.appendChild(inputText);

    if (inputValue === "") {

        alert("You must type something!")
    } else {

        document.getElementById("mainlist").appendChild(newLine);
    }

    document.getElementById("textinput").value = "";

    var close = document.createElement("span");
    var sign = document.createTextNode("\u00D7");
    close.className = "btnclose";

    close.appendChild(sign);
    newLine.appendChild(close);

    var closeButtons = document.getElementsByClassName("btnclose");

    for (var i = 0; i < closeButtons.length; i++) {

        closeButton = closeButtons[i];
        closeButton.addEventListener("click", deleteListItem);
    }

    function deleteListItem (event) {
        var buttonClicked = event.target;

        buttonClicked.parentElement.remove();

    }

    var itemsList = document.getElementsByTagName("li");

    for (var i = 0; i < itemsList.length; i++) {

        var itemList = itemsList[i];
        itemList.addEventListener("click", styleText);

    }

}

function styleText (event) {

    var eventStyle = event.target;

    eventStyle.classList.toggle("checked");

}