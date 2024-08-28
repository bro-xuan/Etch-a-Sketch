const container = document.querySelector("#container"); 
for (i=0;i<16*16;i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add('gridStyle');
    container.appendChild(gridItem);
}
