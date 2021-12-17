document.getElementById("cardButton").addEventListener("click", function(alert("hello")));

function balanceQuery(){
    const coolNumber = await window.contract.methods.balanceOf("0x9dAF9C4F7e9235D750Fc557c83b2436767aE3086", 0).call();
}