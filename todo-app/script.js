const form =document.getElementById('form');
const input=document.getElementById('input');
const tasks=document.getElementById('tasks');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const taskText=input.value;

    if(taskText){
        const val=document.createElement("li");
        val.innerText=taskText;

        val.addEventListener('click',()=>{
val.classList.toggle('completed');
        });
        tasks.appendChild(val);
        input.value="";
    }
});