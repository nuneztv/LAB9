const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

const input2 = document.getElementById ("addmessage")
const addbtn2 = document.getElementById ("btn-message")
var elemento



addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    p.className='colortext'
   
    li.appendChild(p);
    ul.appendChild(li);

    input.value = "";
   
  }
});

addbtn2.addEventListener ("click", (e) =>  {
  e.preventDefault();
  const text = input2.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    p.className='colortext2'

    li.appendChild(p);
    ul.appendChild(li);

    input2.value = "";
   
  }
});