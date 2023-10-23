function createLabel(text, htmlfor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlfor = htmlfor;
  return label;
}

function createInput(id, name, value, type = "text", placeholder = " ") {
  const input = document.createElement("input");
  input.id = id;
  input.name = name;
  input.value = value;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}
function createSpace(id, name, value) {
  const space = document.createElement("p");
  space.id = id;
  space.name = name;
  space.value = value;
  return space;
}
const toPut = document.getElementById("newTopic");
const newRow = document.createElement("li");

const newIten = document.getElementById("newIten");
newIten.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter") {
    const newLabel = createLabel("-Tarefa: ", "newlabel-");
    const newInput = createInput("inputone", null, newIten.value);
    const removeIten = document.createElement("button");
    removeIten.innerText = "remover";
    removeIten.type = "button";
    const toSet = document.createElement("button");
    toSet.innerText = "Concluido";
    toSet.type = "button";
    const newSpace = createSpace("spacenew", "spacenew", "  ");
    toPut.appendChild(newLabel);
    toPut.appendChild(newInput);

    toPut.appendChild(removeIten);
    removeIten.addEventListener("click", function (ev) {
      newRow.append(newLabel, newInput, removeIten, toSet);
      toPut.removeChild(newRow);
    });
    toSet.addEventListener("click", function (ev) {
      newInput.id = "sub";
    });
    toPut.appendChild(toSet);
    toPut.appendChild(newSpace);
    newInput.disabled = true;

    newIten.value = "";
  }
  const restart = document
    .getElementById("reStartButton")
    .addEventListener("click", function () {
      window.location.reload();
    });
});
