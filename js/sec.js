function log(){
    var user,pass;
    user=String(document.getElementById("username").value);
    pass=String(document.getElementById("password").value);
    if(user=="root"){
        if(pass=="root"){
            thank();
        }
        else{
            window.alert("Check your Password");
        }
    }
    else{
        window.alert("Check your Username");
    }
}
function thank(){
    window.alert("Thank You For Login Have A Nice Day");
}