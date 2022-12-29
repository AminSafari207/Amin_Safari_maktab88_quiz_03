const data = ["a", "b", "c", "c", "arman", "armin", "hello world"];

const list = document.getElementById("list");
const input = document.getElementById("input");

const addNewItem = (el) => {
  const node = document.createElement("li");
  node.className = "list-group-item";
  const itemNode = document.createTextNode(el);
  node.appendChild(itemNode);
  list.appendChild(node);
};
const removeListItems = () => {
  const listItems = Array.from(
    document.getElementsByClassName("list-group-item")
  );
  listItems.forEach((e) => e.remove());
};

// Initial list built
const showAll = () => {
  data.forEach((el) => {
    addNewItem(el);
  });
};
showAll();

input.addEventListener("input", function (e) {
  removeListItems();
  const value = e.currentTarget.value;
  console.log(value);

  if (value === "") {
    showAll();
  } else {
    let hasItem = false;
    data.forEach((el) => {
      if (el.includes(value)) hasItem = true;
    });
    if (hasItem === true) {
      data.forEach((el) => {
        if (el.includes(value)) addNewItem(el);
      });
    } else {
      addNewItem("Nothing Found!");
    }
  }
});
