(function () {
    "use strict";

    const LANGUAGES = {
        ml: {
            name: "മലയാളം",
            dir: "ltr",
            translations: {}
        },

        en: {
            name: "English",
            dir: "ltr",
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
                language: "🌐 Language",

                duaPageTitle: "Duas",
                duaPageSubtitle: "Supplications for different situations in life",
                duaIntroTitle: "🤲 Duas for Our Daily Life",
                duaIntroText: "Let us seek help from Allah and place our trust in Him in all our affairs.",
                duaHome: "🏠 Swalath Home",

                duaGeneral: "🌿 General Duas",
                duaDebt: "💰 Debt and Financial Difficulties",
                duaRizq: "💼 Provision and Sustenance",
                duaHouse: "🏠 Home and Life",
                duaTravel: "🚗 Vehicle and Travel",
                duaWorry: "😟 Worries and Difficulties",
                duaProtection: "🛡️ Protection",
                duaParents: "❤️ For Parents",
                duaHealth: "🤍 Health and Illness",
                duaForgiveness: "🤍 Forgiveness and Repentance",
                duaSleep: "🌙 Before Sleeping",
                duaMorning: "🌅 Morning",
                duaGoodLife: "🌿 For a Good Life",

                duaTitle1: "1. Goodness in This World and the Hereafter",
                duaTitle2: "2. Seeking Help from Allah",
                duaTitle3: "3. For Ease in Affairs",
                duaTitle4: "4. For Debt Relief and Halal Wealth",
                duaTitle5: "5. Seeking Relief from Debt",
                duaTitle6: "6. Seeking Good Provision",
                duaTitle7: "7. Beneficial Knowledge and Halal Provision",
                duaTitle8: "8. Blessings for the Family",
                duaTitle9: "9. For Making Things Easy",
                duaTitle10: "10. When Getting into a Vehicle",
                duaTitle11: "11. When Beginning a Journey",
                duaTitle12: "12. For Protection During Travel",
                duaTitle13: "13. During Worry and Hardship",
                duaTitle14: "14. Seeking Help in Difficulties",
                duaTitle15: "15. Protection from All Harm",
                duaTitle16: "16. Seeking Allah's Protection",
                duaTitle17: "17. Seeking Mercy for Parents",
                duaTitle18: "18. For Good Health",
                duaTitle19: "19. For Healing",
                duaTitle20: "20. Seeking Forgiveness",
                duaTitle21: "21. Sayyidul Istighfar",
                duaTitle22: "22. Before Sleeping",
                duaTitle23: "23. Praising Allah in the Morning",
                duaTitle24: "24. For Steadfastness of the Heart",
                duaTitle25: "25. Help in Remembrance and Worship"
            }
        },

        ar: {
            name: "العربية",
            dir: "rtl",
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
                language: "🌐 اللغة",

                duaPageTitle: "الأدعية",
                duaPageSubtitle: "أدعية لمختلف مواقف الحياة",
                duaIntroTitle: "🤲 أدعية لحياتنا اليومية",
                duaIntroText: "لنسأل الله العون ونتوكل عليه في جميع أمورنا.",
                duaHome: "🏠 الصفحة الرئيسية",

                duaGeneral: "🌿 أدعية عامة",
                duaDebt: "💰 الديون والصعوبات المالية",
                duaRizq: "💼 الرزق والمعيشة",
                duaHouse: "🏠 المنزل وشؤون الحياة",
                duaTravel: "🚗 المركبة والسفر",
                duaWorry: "😟 الهموم والصعوبات",
                duaProtection: "🛡️ الحماية",
                duaParents: "❤️ للوالدين",
                duaHealth: "🤍 الصحة والمرض",
                duaForgiveness: "🤍 المغفرة والتوبة",
                duaSleep: "🌙 قبل النوم",
                duaMorning: "🌅 الصباح",
                duaGoodLife: "🌿 لحياة طيبة",

                duaTitle1: "1. الخير في الدنيا والآخرة",
                duaTitle2: "2. طلب العون من الله",
                duaTitle3: "3. لتيسير الأمور",
                duaTitle4: "4. لقضاء الدين ونيل الرزق الحلال",
                duaTitle5: "5. طلب الخلاص من الديون",
                duaTitle6: "6. طلب الرزق الطيب",
                duaTitle7: "7. العلم النافع والرزق الحلال",
                duaTitle8: "8. الخير للأسرة",
                duaTitle9: "9. لتسهيل الأمور",
                duaTitle10: "10. عند ركوب المركبة",
                duaTitle11: "11. عند بدء السفر",
                duaTitle12: "12. للحماية أثناء السفر",
                duaTitle13: "13. عند الهم والضيق",
                duaTitle14: "14. طلب العون في الشدائد",
                duaTitle15: "15. الاستعاذة من كل شر",
                duaTitle16: "16. طلب حماية الله",
                duaTitle17: "17. طلب الرحمة للوالدين",
                duaTitle18: "18. لطلب الصحة والعافية",
                duaTitle19: "19. لطلب الشفاء",
                duaTitle20: "20. طلب المغفرة",
                duaTitle21: "21. سيد الاستغفار",
                duaTitle22: "22. قبل النوم",
                duaTitle23: "23. حمد الله في الصباح",
                duaTitle24: "24. لثبات القلب",
                duaTitle25: "25. طلب العون على الذكر والشكر والعبادة"
            }
        },

        hi: {
            name: "हिन्दी",
            dir: "ltr",
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
                language: "🌐 भाषा",

                duaPageTitle: "दुआएँ",
                duaPageSubtitle: "जीवन की विभिन्न परिस्थितियों के लिए दुआएँ",
                duaIntroTitle: "🤲 हमारे दैनिक जीवन की दुआएँ",
                duaIntroText: "आइए, अल्लाह से मदद माँगें और सभी मामलों में उसी पर भरोसा रखें।",
                duaHome: "🏠 स्वलात होम",

                duaGeneral: "🌿 सामान्य दुआएँ",
                duaDebt: "💰 कर्ज़ और आर्थिक कठिनाइयाँ",
                duaRizq: "💼 रोज़ी और आजीविका",
                duaHouse: "🏠 घर और जीवन",
                duaTravel: "🚗 वाहन और यात्रा",
                duaWorry: "😟 चिंता और कठिनाइयाँ",
                duaProtection: "🛡️ सुरक्षा",
                duaParents: "❤️ माता-पिता के लिए",
                duaHealth: "🤍 स्वास्थ्य और बीमारी",
                duaForgiveness: "🤍 माफ़ी और तौबा",
                duaSleep: "🌙 सोने से पहले",
                duaMorning: "🌅 सुबह",
                duaGoodLife: "🌿 अच्छे जीवन के लिए",

                duaTitle1: "1. दुनिया और आख़िरत की भलाई",
                duaTitle2: "2. अल्लाह से मदद माँगना",
                duaTitle3: "3. काम आसान होने के लिए",
                duaTitle4: "4. कर्ज़ चुकाने और हलाल धन के लिए",
                duaTitle5: "5. कर्ज़ से मुक्ति के लिए",
                duaTitle6: "6. अच्छी रोज़ी के लिए",
                duaTitle7: "7. लाभकारी ज्ञान और हलाल रोज़ी",
                duaTitle8: "8. परिवार की भलाई के लिए",
                duaTitle9: "9. काम आसान होने के लिए",
                duaTitle10: "10. वाहन में बैठते समय",
                duaTitle11: "11. यात्रा शुरू करते समय",
                duaTitle12: "12. यात्रा में सुरक्षा के लिए",
                duaTitle13: "13. चिंता और परेशानी के समय",
                duaTitle14: "14. कठिनाई में मदद माँगना",
                duaTitle15: "15. हर बुराई से सुरक्षा",
                duaTitle16: "16. अल्लाह की सुरक्षा माँगना",
                duaTitle17: "17. माता-पिता पर रहमत के लिए",
                duaTitle18: "18. अच्छे स्वास्थ्य के लिए",
                duaTitle19: "19. शिफ़ा के लिए",
                duaTitle20: "20. माफ़ी माँगना",
                duaTitle21: "21. सय्यिदुल इस्तिग़फ़ार",
                duaTitle22: "22. सोने से पहले",
                duaTitle23: "23. सुबह अल्लाह की प्रशंसा",
                duaTitle24: "24. दिल की स्थिरता के लिए",
                duaTitle25: "25. ज़िक्र और इबादत में मदद"
            }
        },

        ur: {
            name: "اردو",
            dir: "rtl",
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
                language: "🌐 زبان",

                duaPageTitle: "دعائیں",
                duaPageSubtitle: "زندگی کے مختلف حالات کے لیے دعائیں",
                duaIntroTitle: "🤲 ہماری روزمرہ زندگی کی دعائیں",
                duaIntroText: "آئیے اللہ سے مدد مانگیں اور اپنے تمام معاملات میں اسی پر بھروسا کریں۔",
                duaHome: "🏠 صلوٰۃ ہوم",

                duaGeneral: "🌿 عمومی دعائیں",
                duaDebt: "💰 قرض اور مالی مشکلات",
                duaRizq: "💼 رزق اور روزی",
                duaHouse: "🏠 گھر اور زندگی کے معاملات",
                duaTravel: "🚗 سواری اور سفر",
                duaWorry: "😟 پریشانیاں اور مشکلات",
                duaProtection: "🛡️ حفاظت",
                duaParents: "❤️ والدین کے لیے",
                duaHealth: "🤍 صحت اور بیماری",
                duaForgiveness: "🤍 مغفرت اور توبہ",
                duaSleep: "🌙 سونے سے پہلے",
                duaMorning: "🌅 صبح",
                duaGoodLife: "🌿 اچھی زندگی کے لیے",

                duaTitle1: "1. دنیا اور آخرت کی بھلائی",
                duaTitle2: "2. اللہ سے مدد مانگنا",
                duaTitle3: "3. کام آسان ہونے کے لیے",
                duaTitle4: "4. قرض کی ادائیگی اور حلال مال کے لیے",
                duaTitle5: "5. قرض سے نجات کے لیے",
                duaTitle6: "6. اچھے رزق کے لیے",
                duaTitle7: "7. نفع بخش علم اور حلال رزق",
                duaTitle8: "8. خاندان کی بھلائی کے لیے",
                duaTitle9: "9. کام آسان ہونے کے لیے",
                duaTitle10: "10. سواری پر بیٹھتے وقت",
                duaTitle11: "11. سفر شروع کرتے وقت",
                duaTitle12: "12. سفر میں حفاظت کے لیے",
                duaTitle13: "13. پریشانی اور مشکل کے وقت",
                duaTitle14: "14. مشکل میں مدد مانگنا",
                duaTitle15: "15. ہر برائی سے حفاظت",
                duaTitle16: "16. اللہ کی حفاظت طلب کرنا",
                duaTitle17: "17. والدین کے لیے رحمت کی دعا",
                duaTitle18: "18. صحت کے لیے",
                duaTitle19: "19. شفا کے لیے",
                duaTitle20: "20. مغفرت طلب کرنا",
                duaTitle21: "21. سید الاستغفار",
                duaTitle22: "22. سونے سے پہلے",
                duaTitle23: "23. صبح اللہ کی حمد",
                duaTitle24: "24. دل کے ثابت قدم رہنے کے لیے",
                duaTitle25: "25. ذکر اور عبادت میں مدد"
            }
        },

        ta: {
            name: "தமிழ்",
            dir: "ltr",
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
                language: "🌐 மொழி",

                duaPageTitle: "துஆக்கள்",
                duaPageSubtitle: "வாழ்க்கையின் பல்வேறு சூழ்நிலைகளுக்கான துஆக்கள்",
                duaIntroTitle: "🤲 நம் அன்றாட வாழ்க்கைக்கான துஆக்கள்",
                duaIntroText: "அல்லாஹ்விடம் உதவி கேட்டு, நமது எல்லா காரியங்களிலும் அவனையே நம்புவோம்.",
                duaHome: "🏠 ஸலவாத் முகப்பு",

                duaGeneral: "🌿 பொதுவான துஆக்கள்",
                duaDebt: "💰 கடன் மற்றும் பொருளாதார சிரமங்கள்",
                duaRizq: "💼 வாழ்வாதாரம் மற்றும் உணவாதாரம்",
                duaHouse: "🏠 வீடு மற்றும் வாழ்க்கை",
                duaTravel: "🚗 வாகனம் மற்றும் பயணம்",
                duaWorry: "😟 கவலைகள் மற்றும் சிரமங்கள்",
                duaProtection: "🛡️ பாதுகாப்பு",
                duaParents: "❤️ பெற்றோருக்காக",
                duaHealth: "🤍 ஆரோக்கியம் மற்றும் நோய்",
                duaForgiveness: "🤍 மன்னிப்பும் தவ்பாவும்",
                duaSleep: "🌙 உறங்குவதற்கு முன்",
                duaMorning: "🌅 காலை",
                duaGoodLife: "🌿 நல்ல வாழ்க்கைக்காக",

                duaTitle1: "1. இம்மையிலும் மறுமையிலும் நன்மை",
                duaTitle2: "2. அல்லாஹ்விடம் உதவி கேட்பது",
                duaTitle3: "3. காரியங்கள் எளிதாக",
                duaTitle4: "4. கடனை அடைத்து ஹலாலான செல்வம் பெற",
                duaTitle5: "5. கடனிலிருந்து விடுபட",
                duaTitle6: "6. நல்ல வாழ்வாதாரத்திற்காக",
                duaTitle7: "7. பயனுள்ள கல்வியும் ஹலாலான வாழ்வாதாரமும்",
                duaTitle8: "8. குடும்ப நலனுக்காக",
                duaTitle9: "9. காரியங்கள் எளிதாக",
                duaTitle10: "10. வாகனத்தில் ஏறும்போது",
                duaTitle11: "11. பயணத்தைத் தொடங்கும்போது",
                duaTitle12: "12. பயணத்தில் பாதுகாப்பிற்காக",
                duaTitle13: "13. கவலையும் துன்பமும் ஏற்படும்போது",
                duaTitle14: "14. சிரமத்தில் உதவி கேட்பது",
                duaTitle15: "15. எல்லாத் தீமைகளிலிருந்தும் பாதுகாப்பு",
                duaTitle16: "16. அல்லாஹ்வின் பாதுகாப்பைக் கோருதல்",
                duaTitle17: "17. பெற்றோருக்கு அருள் வேண்டுதல்",
                duaTitle18: "18. நல்ல ஆரோக்கியத்திற்காக",
                duaTitle19: "19. நோய் குணமடைய",
                duaTitle20: "20. பாவமன்னிப்புக் கோருதல்",
                duaTitle21: "21. ஸய்யிதுல் இஸ்திக்ஃபார்",
                duaTitle22: "22. உறங்குவதற்கு முன்",
                duaTitle23: "23. காலையில் அல்லாஹ்வைப் புகழ்தல்",
                duaTitle24: "24. உள்ளம் நிலைத்திருக்க",
                duaTitle25: "25. திக்ர் மற்றும் வணக்கத்தில் உதவி"
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
                if (original !== null) {
                    el.textContent = original;
                }
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
                if (original !== null) {
                    el.placeholder = original;
                }
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
            if (!LANGUAGES[code]) {
                return false;
            }

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
