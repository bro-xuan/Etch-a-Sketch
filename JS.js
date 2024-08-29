const container = document.querySelector("#container"); 
for (i=0;i<16*16;i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add('gridStyle');
    container.appendChild(gridItem);
}

const divs = document.querySelectorAll(".gridStyle");

for (let i=0;i<divs.length;i++) {
    divs[i].addEventListener("mouseenter", function() {
    this.style.backgroundColor="red"});
}

let gridSize;
function deleteAndCreateGrid() {
    let text;
    let number = prompt("How many squares you want per side?");
    if (number>100||number<=0||number%1!==0){
        text="Wrong input!";
        const p=document.querySelector("#number");
        p.textContent=text;
    }
    else {
        gridSize=number;
        text = `Enjoy ${number}*${number} grid!`
        const p=document.querySelector("#number");
        p.textContent=text;
    }

    if (number) {
        container.innerHTML='';
        newWidth=320/gridSize;
        newHeight=320/gridSize;

        for (i=0;i<gridSize*gridSize;i++){
            const gridItem = document.createElement("div");
            gridItem.style.width= `${newWidth}px`;
            gridItem.style.height=`${newHeight}px`;
            gridItem.style.border='1px solid black';
            gridItem.style.boxSizing='border-box'; 
            container.appendChild(gridItem);
        }

        const newDivs = document.querySelectorAll("#container > div");
        newDivs.forEach(div=>{
            div.addEventListener("mouseenter",function(){
                this.style.backgroundColor="red";
            });
        });
    }
}
btn=document.querySelector("#enter");
btn.addEventListener("click",deleteAndCreateGrid);


// function numberInput (){
//     let text;
//     let number = prompt("How many squares you want per side?");
//     if (number>100||number<=0||number%1!==0){
//         text="Wrong input!";
//         const p=document.querySelector("#number");
//         p.textContent=text;
//     }
//     else {
//         gridSize=number;
//         text = `Enjoy ${number}*${number} grid!`
//         const p=document.querySelector("#number");
//         p.textContent=text;
//     }

//     if (number) {
//         for (let i=0;i<16*16;i++){
//             divs[i].remove();
//         }
        
//         newWidth=320/gridSize;
//         newHeight=320/gridSize;

//         for (i=0;i<gridSize*gridSize;i++){
//             const gridItem = document.createElement("div");
//             gridItem.style.width= `${newWidth}px`;
//             gridItem.style.height=`${newHeight}px`;
//             gridItem.style.border='1px solid black';
//             gridItem.style.boxSizing='border-box'; 
//             container.appendChild(gridItem);
//         }

//         const newDivs = document.querySelectorAll("#container > div");
//         newDivs.forEach(div=>{
//             div.addEventListener("mouseenter",function(){
//                 this.style.backgroundColor="red";
//             });
//         });
//     }
// }



    

