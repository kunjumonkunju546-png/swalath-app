let count = 0;

function increaseCount() {
    count++;
    document.getElementById("count").textContent = count;
}

function showMessage(section) {
    alert(section + " will be available soon, InshaAllah.");
}

function searchSwalath() {
    let input = document.getElementById("searchSwalath").value.toLowerCase();
    let cards = document.querySelectorAll(".swalath-card");

    cards.forEach(function(card) {
        let text = card.textContent.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// പ്രാർത്ഥനാ സമയം ആകുമ്പോൾ ആൻഡ്രോയിഡ് ആപ്പിലേക്ക് സിഗ്നൽ അയക്കാനുള്ള ഫങ്ഷൻ
function triggerAdhan() {
    if (window.AndroidAdhan) {
        window.AndroidAdhan.playAdhan();
    } else {
        // ആപ്പിലല്ലാതെ ബ്രൗവറിൽ തുറക്കുമ്പോൾ പ്ലേ ചെയ്യാൻ
        let audio = new Audio('azan.mp3');
        audio.play().catch(e => console.log(e));
    }
}
