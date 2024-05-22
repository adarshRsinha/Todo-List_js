const container = document.querySelector(".container");
const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("text");

const task = [];

function showAllTask(){
    task.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const p = document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span = document.createElement("span");
        span.innerText=value.description;
        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deletebtn");

        btn.innerText="-";
    
        btn.addEventListener("click",()=>{
            removeDuplicate();
            task.splice(index, 1);
            showAllTask();
        });

        div.append(btn);
        container.append(div);
    });
    
}

function removeDuplicate(){
    task.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // removeDuplicate();
    
    task.push({
        title: title.value,
        description: description.value,
    });

    title.value='';
    description.value='';
    console.log(task);
    showAllTask();
});