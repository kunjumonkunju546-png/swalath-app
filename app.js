let count = 0;

function increaseCount() {
    count++;

    document.getElementById("count").textContent = count;
}

function showMessage(section) {
    alert(section + " will be available soon, InshaAllah.");
}

function searchSwalath() {

    let input =
        document.getElementById("searchSwalath")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".swalath-card");

    cards.forEach(function(card) {

        let text =
            card.textContent.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}