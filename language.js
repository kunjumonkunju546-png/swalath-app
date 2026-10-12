(function () {
    "use strict";

    const LANGUAGES = {
        ml: {
            name: "മലയാളം",
            dir: "ltr",
            original: true
        },
        en: {
            name: "English",
            dir: "ltr",
            translations: {
                home: "Home",
                quran: "Quran",
                swalath: "Swalath",
                quranMP3: "Quran MP3",
                prayerTimes: "Prayer Times",
                duas: "Duas",
                dhikr: "Dhikr",
                favourites: "My Favourites",
                asma: "Asmaul Husna",
                umrah: "Umrah",
                advertising: "Advertise With Us",
                language: "Language",
                settings: "Settings",
                back: "Back",
                search: "Search",
                save: "Save",
                cancel: "Cancel",
                selectLanguage: "Select Your Language",
                continue: "Continue",
                darkMode: "Dark Mode"
            }
        },
        ar: {
            name: "العربية",
            dir: "rtl",
            translations: {
                home: "الرئيسية",
                quran: "القرآن الكريم",
                swalath: "الصلاة على النبي ﷺ",
                quranMP3: "القرآن صوتي",
                prayerTimes: "أوقات الصلاة",
                duas: "الأدعية",
                dhikr: "الأذكار",
                favourites: "المفضلة",
                asma: "أسماء الله الحسنى",
                umrah: "العمرة",
                advertising: "أعلن معنا",
                language: "اللغة",
                settings: "الإعدادات",
                back: "رجوع",
                search: "بحث",
                save: "حفظ",
                cancel: "إلغاء",
                selectLanguage: "اختر لغتك",
                continue: "متابعة",
                darkMode: "الوضع الداكن"
            }
        },
        hi: {
            name: "हिन्दी",
            dir: "ltr",
            translations: {
                home: "होम",
                quran: "क़ुरआन",
                swalath: "स्वलात",
                quranMP3: "क़ुरआन MP3",
                prayerTimes: "नमाज़ का समय",
                duas: "दुआएँ",
                dhikr: "ज़िक्र",
                favourites: "मेरी पसंद",
                asma: "अस्माउल हुस्ना",
                umrah: "उमरा",
                advertising: "हमारे साथ विज्ञापन करें",
                language: "भाषा",
                settings: "सेटिंग्स",
                back: "वापस",
                search: "खोजें",
                save: "सहेजें",
                cancel: "रद्द करें",
                selectLanguage: "अपनी भाषा चुनें",
                continue: "जारी रखें",
                darkMode: "डार्क मोड"
            }
        },
        ur: {
            name: "اردو",
            dir: "rtl",
            translations: {
                home: "ہوم",
                quran: "قرآن کریم",
                swalath: "درود و سلام",
                quranMP3: "قرآن MP3",
                prayerTimes: "نماز کے اوقات",
                duas: "دعائیں",
                dhikr: "ذکر",
                favourites: "پسندیدہ",
                asma: "اسماء الحسنیٰ",
                umrah: "عمرہ",
                advertising: "ہمارے ساتھ اشتہار دیں",
                language: "زبان",
                settings: "ترتیبات",
                back: "واپس",
                search: "تلاش",
                save: "محفوظ کریں",
                cancel: "منسوخ کریں",
                selectLanguage: "اپنی زبان منتخب کریں",
                continue: "جاری رکھیں",
                darkMode: "ڈارک موڈ"
            }
        },
        ta: {
            name: "தமிழ்",
            dir: "ltr",
            translations: {
                home: "முகப்பு",
                quran: "திருக்குர்ஆன்",
                swalath: "ஸலவாத்துகள்",
                quranMP3: "குர்ஆன் MP3",
                prayerTimes: "தொழுகை நேரங்கள்",
                duas: "துஆக்கள்",
                dhikr: "திக்ர்",
                favourites: "விருப்பமானவை",
                asma: "அஸ்மாவுல் ஹுஸ்னா",
                umrah: "உம்ரா",
                advertising: "எங்களுடன் விளம்பரம் செய்யுங்கள்",
                language: "மொழி",
                settings: "அமைப்புகள்",
                back: "பின் செல்ல",
                search: "தேடுக",
                save: "சேமி",
                cancel: "ரத்து செய்",
                selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
                continue: "தொடரவும்",
                darkMode: "இருண்ட பயன்முறை"
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

        if (lang.original) return;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            const value = lang.translations && lang.translations[key];

            if (value && el.children.length === 0) {
                el.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            const key = el.getAttribute("data-i18n-placeholder");
            const value = lang.translations && lang.translations[key];

            if (value) el.placeholder = value;
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
            return (lang.translations && lang.translations[key]) || key;
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        applyLanguage(getLanguage());
    });
})();
