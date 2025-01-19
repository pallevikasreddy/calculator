const screen=document.querySelector(".screen");
const buttons=document.querySelectorAll(".box");
const equalbutton=document.querySelector(".equalto")
const deletebutton=document.querySelector(".del")
const clearbutton=document.querySelector(".cal")

let input="";

//function to update the screen
function updatescreen(value){
    screen.value=value !== undefined? value:"";
}//add event listeners to all numbers and operater buttion
buttons.forEach((button)=> {
    button.addEventListener('click',()=>{ 
        const value = button.textContent.trim();
        input += value;
        updatescreen(input);

    })
});
 //event listener for the equal buttion
 equalbutton.addEventListener('click',()=>{
    try{
        // Evaluate the expression in the input
        input = eval(input).toString();
        updatescreen(input);
    } catch (error) {
        updatescreen("Error");
        input = "";
    }
 });
// Event listener for the delete button (removes the last character)
deletebutton.addEventListener('click', () => {
    input = input.slice(0, -1);
    updatescreen(input)
});

// Event listener for the clear button (resets the calculator)
clearbutton.addEventListener('click', () => {
    input = "";
    updatescreen(input);
});


let 
