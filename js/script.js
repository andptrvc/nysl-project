// Navbar mobile activate
const toggleNavbar = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar-items");

toggleNavbar.addEventListener("click", function () {
    navbar.classList.toggle("show-items");
});

// Games Schools Tabs
const btns = document.querySelectorAll(".tab-btn");
const schoolsHolder = document.querySelector(".school-tabs");
const schools = document.querySelectorAll(".school");

if (schoolsHolder != null) {
    schoolsHolder.addEventListener("click", function (e) {
        const id = e.target.dataset.id;

        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        schools.forEach(function (sch) {
            sch.classList.remove("active");
        });

        document.getElementById(id).classList.add("active");
    });
}

// Rules dropdowns
const ruleItems = document.querySelectorAll(".rule-item");
ruleItems.forEach(function (rule) {
    const ruleHeading = rule.querySelector(".rule-heading");
    const ruleText = rule.querySelector(".rule-text");
    ruleHeading.addEventListener("click", function () {
        ruleItems.forEach(function (item) {
            if (item != rule) {
                const itemText = item.querySelector(".rule-text");
                itemText.classList.remove("active");
            }
        });
        ruleText.classList.add("active");
    });
});

// Show all rules
const showAllRulesBtn = document.getElementById("showAllRules");
if (showAllRulesBtn) {
    showAllRulesBtn.addEventListener("click", function () {
        ruleItems.forEach(function (rule) {
            const ruleHeading = rule.querySelector(".rule-heading");
            const ruleText = rule.querySelector(".rule-text");
            ruleText.classList.add("active");
        });
    });
};

// Define season
defineSeason();

function defineSeason() {
    var today = new Date();
    var mm = today.getMonth() + 1;
    if (mm >= 12 || mm <= 5) {
        if (document.getElementById("season"))
            document.getElementById("season").value = "Spring";
    } else {
        if (document.getElementById("season"))
            document.getElementById("season").value = "Fall";
    }
}

// Autofill date
createDate()

function createDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    const signatureDate = document.getElementById("signatureDate");
    if (signatureDate != null) {
        signatureDate.value = today;
    }
}

// Uniform checkbox
const checkbox = document.getElementById("alreadyHaveUniform");
if (null != checkbox) {
    checkbox.addEventListener("click", function () {
        const uniform = document.querySelectorAll(".uniform");
        if (checkbox.checked) {
            uniform.forEach(function (item) {
                item.style.display = "none";
            });
        } else {
            uniform.forEach(function (item) {
                item.style.display = "block";
            });
        }
    });
}