//将频繁DOM操作改为一次性操作
const listNode = document.getElementById("list");

//创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment();

//执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement("li");
  li.innerHTML = "List item" + x;
  frag.appendChild(li);
}

//都完成后，再插入到DOM树中
listNode.appendChild(frag);
