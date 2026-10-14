function convert(){
    let rupees=document.getElementById("rupees").value;
    let dollars=rupees/276;
    document.getElementById("result").innerText="Dollars:$" +dollars.toFixed(2)
}