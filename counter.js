let counterValue = document.getElementById("counterValue");
let saved = localStorage.getItem("counter");
if(saved === null)
{
    saved = 0;
    localStorage.setItem("counter",saved);
}
counterValue.textContent = saved;
saveItems(counterValue.textContent)
function increaseBtn()
{
    let increaseCounterValue = parseInt(localStorage.getItem("counter")) + 1;
    counterValue.textContent = increaseCounterValue;
    saveItems(increaseCounterValue);
}
function decreaseBtn()
{
    let decreaseCounterValue = parseInt(localStorage.getItem("counter")) - 1;
    counterValue.textContent = decreaseCounterValue;
    saveItems(decreaseCounterValue);
}
function resetBtn()
{
    counterValue.textContent = 0;
    saveItems(0);
}
function saveItems(savedValue)
{
    localStorage.setItem("counter",savedValue);
    if(savedValue>0)
    {
        counterValue.style.color = "green"   
    }
    else if(savedValue<0)
    {
        counterValue.style.color = "red"
    }
    else 
    {
        counterValue.style.color = "yellow"
    }
}