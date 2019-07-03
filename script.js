var checkBox = document.getElementById("have_uniform");
if (null != checkBox) {

    checkBox.addEventListener("click", function () {
        var text = document.getElementById("flex_uniform1");
        var text2 = document.getElementById("flex_uniform2")
        if (checkBox.checked == false) {
            text.style.display = "block";
            text2.style.display = "block";
        } else {
            text.style.display = "none";
            text2.style.display = "none";
        }
    })

    createDate()

    function createDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        console.log(today)
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;


        document.getElementById("theDate").value = today;
    }

    defineSeason();

    function defineSeason() {
        var today = new Date();
        var mm = today.getMonth() + 1;
        if (mm >= 12 || mm <= 5) {
            document.getElementById("defineseason").value = "Spring";
        } else {
            document.getElementById("defineseason").value = "Fall";
        }
    }
}

var showHide = document.getElementById("sportsmanship");
var texthide = document.getElementById("sportsmanship_ul");
var texthide1 = document.getElementById("fifa_field_reg1_1");
var texthide2 = document.getElementById("equipment_1");
var texthide3 = document.getElementById("num_of_pl1");
var texthide4 = document.getElementById("substitution1");
var texthide5 = document.getElementById("confiscated1");
var texthide6 = document.getElementById("players_equipment1");
var texthide7 = document.getElementById("mixed_teams1")
var texthide8 = document.getElementById("coaching1")
var texthide9 = document.getElementById("termination1")
var texthide10 = document.getElementById("conditions_replay1")
var texthide11 = document.getElementById("all-play1");
var texthide12 = document.getElementById("responsibilities1")


showHide.addEventListener("click", function () {

    if (texthide.style.display == "none") {
        texthide.style.display = "block"
        texthide.classList.add("mystyle", "shadowsadd")
        showHide.classList.add("shadowsadd")

    } else {
        texthide.style.display = "none"
    }
    if (texthide.style.display == "block") {
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide5.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide1 = document.getElementById("fifa_field_reg1");


showHide1.addEventListener("click", function () {


    if (texthide1.style.display == "none") {
        texthide1.style.display = "block"
        texthide1.classList.add("mystyle", "shadowsadd")
        showHide1.classList.add("shadowsadd")
    } else {
        texthide1.style.display = "none"
    }
    if (texthide1.style.display == "block") {
        texthide.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide5.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }

})

var showHide2 = document.getElementById("equipment");


showHide2.addEventListener("click", function () {


    if (texthide2.style.display == "none") {
        texthide2.style.display = "block"
        texthide2.classList.add("mystyle", "shadowsadd")
        showHide2.classList.add("shadowsadd")
    } else {
        texthide2.style.display = "none"
    }
    if (texthide2.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide5.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide3 = document.getElementById("num_of_pl");


showHide3.addEventListener("click", function () {


    if (texthide3.style.display == "none") {
        texthide3.style.display = "block"
        texthide3.classList.add("mystyle", "shadowsadd")
        showHide3.classList.add("shadowsadd")
    } else {
        texthide3.style.display = "none"
    }
    if (texthide3.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide4.style.display = "none"
        texthide5.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide4 = document.getElementById("substitution");


showHide4.addEventListener("click", function () {

    if (texthide4.style.display == "none") {
        texthide4.style.display = "block"
        texthide4.classList.add("mystyle", "shadowsadd")
        showHide4.classList.add("shadowsadd")
    } else {
        texthide4.style.display = "none"
    }
    if (texthide4.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide5.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide5 = document.getElementById("confiscated");


showHide5.addEventListener("click", function () {


    if (texthide5.style.display == "none") {
        texthide5.style.display = "block"
        texthide5.classList.add("mystyle", "shadowsadd")
        showHide5.classList.add("shadowsadd")
    } else {
        texthide5.style.display = "none"
    }
    if (texthide5.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide11.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide11 = document.getElementById("all-play");


showHide11.addEventListener("click", function () {


    if (texthide11.style.display == "none") {
        texthide11.style.display = "block"
        texthide11.classList.add("mystyle", "shadowsadd")
        showHide11.classList.add("shadowsadd")
    } else {
        texthide11.style.display = "none"
    }
    if (texthide11.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide6 = document.getElementById("players_equipment");


showHide6.addEventListener("click", function () {


    if (texthide6.style.display == "none") {
        texthide6.style.display = "block"
        texthide6.classList.add("mystyle", "shadowsadd")
        showHide6.classList.add("shadowsadd")
    } else {
        texthide6.style.display = "none"
    }
    if (texthide6.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide7 = document.getElementById("mixed_teams");


showHide7.addEventListener("click", function () {


    if (texthide7.style.display == "none") {
        texthide7.style.display = "block"
        texthide7.classList.add("mystyle", "shadowsadd")
        showHide7.classList.add("shadowsadd")
    } else {
        texthide7.style.display = "none"
    }
    if (texthide7.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide6.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide8 = document.getElementById("coaching");


showHide8.addEventListener("click", function () {


    if (texthide8.style.display == "none") {
        texthide8.style.display = "block"
        texthide8.classList.add("mystyle", "shadowsadd")
        showHide8.classList.add("shadowsadd")
    } else {
        texthide8.style.display = "none"
    }
    if (texthide8.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide9.style.display = "none"
        texthide10.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide9 = document.getElementById("termination");


showHide9.addEventListener("click", function () {


    if (texthide9.style.display == "none") {
        texthide9.style.display = "block"
        texthide9.classList.add("mystyle", "shadowsadd")
        showHide9.classList.add("shadowsadd")
    } else {
        texthide9.style.display = "none"
    }
    if (texthide9.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide10.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide10 = document.getElementById("conditions_replay");


showHide10.addEventListener("click", function () {


    if (texthide10.style.display == "none") {
        texthide10.style.display = "block"
        texthide10.classList.add("mystyle", "shadowsadd")
        showHide10.classList.add("shadowsadd")
    } else {
        texthide10.style.display = "none"
    }
    if (texthide10.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide5.style.display = "none"
        texthide12.style.display = "none"
    }
})

var showHide12 = document.getElementById("responsibilities");


showHide12.addEventListener("click", function () {


    if (texthide12.style.display == "none") {
        texthide12.style.display = "block"
        texthide12.classList.add("mystyle", "shadowsadd")
        showHide12.classList.add("shadowsadd")
    } else {
        texthide12.style.display = "none"
    }
    if (texthide12.style.display == "block") {
        texthide.style.display = "none"
        texthide1.style.display = "none"
        texthide2.style.display = "none"
        texthide3.style.display = "none"
        texthide4.style.display = "none"
        texthide11.style.display = "none"
        texthide6.style.display = "none"
        texthide7.style.display = "none"
        texthide8.style.display = "none"
        texthide9.style.display = "none"
        texthide5.style.display = "none"
        texthide10.style.display = "none"
    }
})
