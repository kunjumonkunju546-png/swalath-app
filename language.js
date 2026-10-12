
/* =========================================
   SWALATH APP - LANGUAGE SYSTEM
   Malayalam = Keep Existing App Unchanged
========================================= */

const SWALATH_LANGUAGES = {
    ml: {
        name: "മലയാളം",
        direction: "ltr",
        preserveOriginal: true,
        translations: {}
    },

    en: {
        name: "English",
        direction: "ltr",
        translations: {
            selectLanguage: "Select Language",
            continue: "Continue",
            home: "Home",
            quran: "Quran",
            swalath: "Swalathukal",
            quranMP3: "Quran MP3",
            prayerTimes: "Prayer Times",
            duas: "Duas",
            dhikr: "Dhikr",
            favourites: "My Favourites",
            asma: "Asmaul Husna",
            umrah: "Umrah",
            advertising: "Advertising With Us",
            language: "Language",
            settings: "Settings",
            back: "Back",
            search: "Search",
            save: "Save",
            cancel: "Cancel"
        }
    },

    ar: {
        name: "العربية",
        direction: "rtl",
        translations: {
            selectLanguage: "اختر اللغة",
            continue: "متابعة",
            home: "الرئيسية",
            quran: "القرآن الكريم",
            swalath: "الصلوات",
            quranMP3: "القرآن صوتياً",
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
            cancel: "إلغاء"
        }
    },

    hi: {
        name: "हिन्दी",
        direction: "ltr",
        translations: {
            selectLanguage: "भाषा चुनें",
            continue: "जारी रखें",
            home: "होम",
            quran: "क़ुरआन",
            swalath: "स्वलात",
            quranMP3: "क़ुरआन MP3",
            prayerTimes: "नमाज़ का समय",
            duas: "दुआएँ",
            dhikr: "ज़िक्र",
            favourites: "मेरी पसंद",
            asma: "अस्माउल हुस्ना",
            umrah: "उमराह",
            advertising: "हमारे साथ विज्ञापन करें",
            language: "भाषा",
            settings: "सेटिंग्स",
            back: "वापस",
            search: "खोजें",
            save: "सेव करें",
            cancel: "रद्द करें"
        }
    },

    ur: {
        name: "اردو",
        direction: "rtl",
        translations: {
            selectLanguage: "زبان منتخب کریں",
            continue: "جاری رکھیں",
            home: "ہوم",
            quran: "قرآن",
            swalath: "صلوات",
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
            cancel: "منسوخ کریں"
        }
    },

    ta: {
        name: "தமிழ்",
        direction: "ltr",
        translations: {
            selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
            continue: "தொடரவும்",
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
            back: "பின்செல்",
            search: "தேடு",
            save: "சேமி",
            cancel: "ரத்துசெய்"
        }
    }
};

const SwalathLanguage = {
    supported: SWALATH_LANGUAGES,

    getCurrent() {
        try {
            return localStorage.getItem("swalath-language") || "ml";
        } catch (error) {
            return "ml";
        }
    },

    setLanguage(code) {
        if (!SWALATH_LANGUAGES[code]) {
            code = "ml";
        }

        try {
            localStorage.setItem("swalath-language", code);
        } catch (error) {
            // App can still work if storage is unavailable.
        }

        this.apply(code);
    },

    apply(code) {
        const language = SWALATH_LANGUAGES[code] || SWALATH_LANGUAGES.ml;

        document.documentElement.lang = code;
        document.documentElement.dir = language.direction;

        /*
         * Malayalam is intentionally untouched.
         * The existing app text and design remain as they are.
         */
        if (language.preserveOriginal) {
            document.dispatchEvent(
                new CustomEvent("swalath-language-changed", {
                    detail: { language: code }
                })
            );
            return;
        }

        const translations = language.translations;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");

            if (
                translations[key] &&
                element.children.length === 0
            ) {
                element.textContent = translations[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            const key = element.getAttribute("data-i18n-placeholder");

            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });

        document.dispatchEvent(
            new CustomEvent("swalath-language-changed", {
                detail: { language: code }
            })
        );
    },

    t(key) {
        const code = this.getCurrent();
        const language = SWALATH_LANGUAGES[code];

        if (!language || language.preserveOriginal) {
            return key;
        }

        return language.translations[key] || key;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    SwalathLanguage.apply(SwalathLanguage.getCurrent());
});
