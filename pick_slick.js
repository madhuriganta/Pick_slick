function addUser() {
    user_name = document.getElementById("usr").value;
    password = document.getElementById("pwd").value;

    localStorage.setItem("username" , user_name);
    localStorage.setItem("password" , password);

    window.location = "pick_slick_room.html";
}