(function () {
    "use strict";

    const LANGUAGES = {
        ml: { name: "മലയാളം", dir: "ltr", translations: {} },

        en: {
            name: "English", dir: "ltr",
            translations: {
                greeting: "Peace be upon you",
                intro: "Start reading and reciting Swalaath here",
                today: "TODAY",
                todayCount: "Swalaath recited today",
                saySwalaath: "Recite Swalaath",
                darkMode: "🌙 Dark Mode",
                lightMode: "☀️ Light Mode",
                quranDesc: "The Holy Quran",
                swalaathTitle: "Swalaaths",
                swalaathDesc: "Read various Swalaaths",
                backButton: "← Back",
searchSwalaath: "🔍 Search Swalaath...",
                mp3Title: "Quran MP3",
                mp3Desc: "Listen to the Quran",
                prayerTitle: "Prayer Times",
                prayerDesc: "Prayer times and Adhan",
                duasTitle: "Duas",
                duasDesc: "Various supplications",
                dhikrTitle: "Dhikr",
                dhikrDesc: "Recite Dhikr",
                favouritesTitle: "My Favourites",
                favouritesDesc: "Your saved favourites",
                umrahTitle: "Umrah",
                umrahDesc: "Information about Umrah",
                advertisingTitle: "Advertise With Us",
                advertisingDesc: "Reach Malayali Audience",
                language: "🌐 Language"
            }
        },

        ar: {
            name: "العربية", dir: "rtl",
            translations: {
                greeting: "السلام عليكم",
                intro: "ابدأ قراءة الصلاة على النبي وترديدها هنا",
                today: "اليوم",
                todayCount: "عدد الصلوات المقروءة اليوم",
                saySwalaath: "صلِّ على النبي ﷺ",
                darkMode: "🌙 الوضع الداكن",
                lightMode: "☀️ الوضع الفاتح",
                quranDesc: "القرآن الكريم",
                swalaathTitle: "الصلوات",
                swalaathDesc: "اقرأ صيغًا متنوعة من الصلاة",
                backButton: "← رجوع",
searchSwalaath: "🔍 ابحث عن الصلاة على النبي...",
                mp3Title: "القرآن MP3",
                mp3Desc: "استمع إلى القرآن",
                prayerTitle: "مواقيت الصلاة",
                prayerDesc: "مواقيت الصلاة والأذان",
                duasTitle: "الأدعية",
                duasDesc: "أدعية متنوعة",
                dhikrTitle: "الذكر",
                dhikrDesc: "ردّد الأذكار",
                favouritesTitle: "المفضلة",
                favouritesDesc: "العناصر المحفوظة",
                umrahTitle: "العمرة",
                umrahDesc: "معلومات عن العمرة",
                advertisingTitle: "أعلن معنا",
                advertisingDesc: "الوصول إلى الجمهور",
                language: "🌐 اللغة"
            }
        },

        hi: {
            name: "हिन्दी", dir: "ltr",
            translations: {
                greeting: "आप पर सलामती हो",
                intro: "यहाँ सलावत पढ़ना और सुनना शुरू करें",
                today: "आज",
                todayCount: "आज पढ़ी गई सलावतें",
                saySwalaath: "सलावत पढ़ें",
                darkMode: "🌙 डार्क मोड",
                lightMode: "☀️ लाइट मोड",
                quranDesc: "पवित्र कुरआन",
                swalaathTitle: "सलावतें",
                swalaathDesc: "विभिन्न सलावतें पढ़ें",
                backButton: "← वापस जाएँ",
searchSwalaath: "🔍 सलावत खोजें...",
                mp3Title: "कुरआन MP3",
                mp3Desc: "कुरआन सुनें",
                prayerTitle: "नमाज़ का समय",
                prayerDesc: "नमाज़ का समय और अज़ान",
                duasTitle: "दुआएँ",
                duasDesc: "विभिन्न दुआएँ",
                dhikrTitle: "ज़िक्र",
                dhikrDesc: "ज़िक्र करें",
                favouritesTitle: "मेरी पसंद",
                favouritesDesc: "सहेजी गई पसंद",
                umrahTitle: "उमराह",
                umrahDesc: "उमराह की जानकारी",
                advertisingTitle: "हमारे साथ विज्ञापन दें",
                advertisingDesc: "मलयाली दर्शकों तक पहुँचें",
                language: "🌐 भाषा"
            }
        },

        ur: {
            name: "اردو", dir: "rtl",
            translations: {
                greeting: "السلام علیکم",
                intro: "یہاں درود پڑھنا اور سننا شروع کریں",
                today: "آج",
                todayCount: "آج پڑھے گئے درود",
                saySwalaath: "درود پڑھیں",
                darkMode: "🌙 ڈارک موڈ",
                lightMode: "☀️ لائٹ موڈ",
                quranDesc: "قرآن مجید",
                swalaathTitle: "درود شریف",
                swalaathDesc: "مختلف درود پڑھیں",
                backButton: "← واپس جائیں",
searchSwalaath: "🔍 درود تلاش کریں...",
                mp3Title: "قرآن MP3",
                mp3Desc: "قرآن سنیں",
                prayerTitle: "نماز کے اوقات",
                prayerDesc: "نماز کے اوقات اور اذان",
                duasTitle: "دعائیں",
                duasDesc: "مختلف دعائیں",
                dhikrTitle: "ذکر",
                dhikrDesc: "ذکر کریں",
                favouritesTitle: "پسندیدہ",
                favouritesDesc: "محفوظ کردہ پسندیدہ",
                umrahTitle: "عمرہ",
                umrahDesc: "عمرہ کے بارے میں معلومات",
                advertisingTitle: "ہمارے ساتھ اشتہار دیں",
                advertisingDesc: "ملیالم سامعین تک پہنچیں",
                language: "🌐 زبان"
            }
        },

        ta: {
            name: "தமிழ்", dir: "ltr",
            translations: {
                greeting: "உங்கள் மீது சாந்தி உண்டாகட்டும்",
                intro: "இங்கே ஸலவாத்தைப் படிக்கவும் ஓதவும் தொடங்குங்கள்",
                today: "இன்று",
                todayCount: "இன்று ஓதிய ஸலவாத்துகள்",
                saySwalaath: "ஸலவாத் ஓதுங்கள்",
                darkMode: "🌙 இருண்ட பயன்முறை",
                lightMode: "☀️ ஒளி பயன்முறை",
                quranDesc: "திருக்குர்ஆன்",
                swalaathTitle: "ஸலவாத்துகள்",
                swalaathDesc: "பல்வேறு ஸலவாத்துகளைப் படிக்கவும்",
                backButton: "← திரும்பு",
searchSwalaath: "🔍 ஸலவாத்தைத் தேடுங்கள்...",
                mp3Title: "குர்ஆன் MP3",
                mp3Desc: "குர்ஆனைக் கேளுங்கள்",
                prayerTitle: "தொழுகை நேரங்கள்",
                prayerDesc: "தொழுகை நேரமும் பாங்கும்",
                duasTitle: "துஆக்கள்",
                duasDesc: "பல்வேறு துஆக்கள்",
                dhikrTitle: "திக்ர்",
                dhikrDesc: "திக்ர் சொல்லுங்கள்",
                favouritesTitle: "எனது விருப்பங்கள்",
                favouritesDesc: "சேமித்த விருப்பங்கள்",
                umrahTitle: "உம்ரா",
                umrahDesc: "உம்ரா பற்றிய தகவல்கள்",
                advertisingTitle: "எங்களுடன் விளம்பரம் செய்யுங்கள்",
                advertisingDesc: "மலையாள மக்களைச் சென்றடையுங்கள்",
                language: "🌐 மொழி"
            }
        }
    };

    function getLanguage() {
        const saved = localStorage.getItem("swalath-language");
        return LANGUAGES[saved] ? saved : "ml";
    }

    function applyLanguage(code) {
        const lang = LANGUAGES[code] || LANGUAGES.ml;

        document.documentElement.lang = code;
        document.documentElement.dir = lang.dir;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            const original = el.getAttribute("data-ml");
            const translated = lang.translations[key];

            if (code === "ml") {
                if (original !== null) el.textContent = original;
            } else if (translated) {
                el.textContent = translated;
            } else if (original !== null) {
                el.textContent = original;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            const key = el.getAttribute("data-i18n-placeholder");
            const original = el.getAttribute("data-ml-placeholder");
            const translated = lang.translations[key];

            if (code === "ml") {
                if (original !== null) el.placeholder = original;
            } else if (translated) {
                el.placeholder = translated;
            } else if (original !== null) {
                el.placeholder = original;
            }
        });

        document.dispatchEvent(new CustomEvent("swalath-language-changed", {
            detail: { language: code }
        }));
    }

    window.SwalathLanguage = {
        supported: LANGUAGES,
        getCurrent: getLanguage,

        setLanguage: function (code) {
            if (!LANGUAGES[code]) return false;
            localStorage.setItem("swalath-language", code);
            applyLanguage(code);
            return true;
        },

        apply: applyLanguage,

        t: function (key) {
            const lang = LANGUAGES[getLanguage()];
            return lang.translations[key] || key;
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        applyLanguage(getLanguage());
    });
})();
