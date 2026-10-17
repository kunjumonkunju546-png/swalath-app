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

// ----------------------------------------------------
// പുതിയതായി ചേർത്ത ഭാഗം: ഓരോ മിനിറ്റിലും സമയം ചെക്ക് ചെയ്ത് പ്രാർത്ഥനാ സമയമായാൽ അദാൻ വിളിക്കാൻ
// ----------------------------------------------------
function checkPrayerTimes(prayerTimesList) {
    // prayerTimesList ഉദാഹരണത്തിന് [{hour: 5, minute: 15}, {hour: 12, minute: 30}, ...] എന്ന ഫോർമാറ്റിൽ ആകാം.
    // നിങ്ങളുടെ വെബ്‌സൈറ്റിലെ പ്രാർത്ഥനാ സമയ വേരിയബിളുകൾ ഇതിലേക്ക് നൽകാം.
    
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();

    if (typeof prayerTimesList !== 'undefined' && Array.isArray(prayerTimesList)) {
        prayerTimesList.forEach(time => {
            if (time.hour === currentHour && time.minute === currentMinute) {
                // ഒരു മിനിറ്റിൽ ഒന്നിപ്പതവണമാത്രം അടിക്കാൻ ഫ്ലാഗ് വെക്കാം അല്ലെങ്കിൽ നേരിട്ട് വിളിക്കാം
                triggerAdhan();
            }
        });
    }
}

// ഓരോ 60 സെക്കൻഡിലും (1 മിനിറ്റിൽ) സമയം പരിശോധിക്കും
setInterval(function() {
    // നിങ്ങളുടെ വെബ്‌സൈറ്റിൽ കാൽക്കുലേറ്റ് ചെയ്യുന്ന പ്രാർത്ഥനാ സമയങ്ങൾ ഇവിടെ നൽകാം
    // ഉദാഹരണത്തിന്: checkPrayerTimes(calculatedPrayerTimes);
}, 60000);
