<!DOCTYPE html>
<html lang="ml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>സ്വലാത്ത് ശേഖരം</title>

<link rel="stylesheet" href="share-card.css">
<script src="share-card.js" defer></script>
<script src="language.js"></script>

<style>
*{box-sizing:border-box}
body{margin:0;font-family:Arial,"Noto Sans Malayalam",sans-serif;background:#f5f1e8;color:#26352d}
.app{max-width:430px;margin:auto;min-height:100vh;background:#fffdf8;box-shadow:0 0 20px rgba(0,0,0,.08)}
.header{background:linear-gradient(135deg,#064e3b,#0b6b50);color:white;padding:22px 18px;text-align:center}
.header h1{margin:0;font-size:24px}
.header p{margin:7px 0 0;font-size:14px;opacity:.9}
.home-button{display:block;margin:15px;padding:13px;text-align:center;text-decoration:none;color:white;background:#b58b32;border-radius:12px;font-weight:bold}
.search-box{padding:15px}
.search-box input{width:100%;padding:14px 16px;border:1px solid #ddd;border-radius:12px;font-size:15px;outline:none}
.search-box input:focus{border-color:#b58b32}
.collection{padding:0 15px 25px}
.collection-title{text-align:center;font-size:19px;font-weight:bold;color:#07543f;margin:5px 0 18px}
.swalath-card{background:white;border:1px solid #e5ddcc;border-radius:14px;padding:17px;margin-bottom:12px;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.05)}
.swalath-card:hover{border-color:#c29a45}
.swalath-card h3{margin:0;font-size:21px;color:#164f3d;text-align:right;direction:rtl}
.swalath-card span{display:block;margin-top:6px;font-size:12px;color:#8a7651;text-align:right;direction:rtl}
.detail{display:none;padding:15px}
.back-button{border:0;background:#07543f;color:white;padding:10px 15px;border-radius:10px;cursor:pointer;margin-bottom:15px;font-size:14px}
.detail-card{background:white;border-radius:16px;padding:18px;border:1px solid #e4dccb;box-shadow:0 4px 15px rgba(0,0,0,.06)}
.detail-title{text-align:center;color:#07543f;margin:0 0 20px;font-size:22px;direction:rtl}
.arabic{direction:rtl;text-align:center;font-size:27px;line-height:2.1;color:#172b23;background:#faf7ef;padding:20px 12px;border-radius:14px;margin-bottom:12px;white-space:pre-line}
.counter-box{text-align:center;background:#f1eadb;padding:15px;border-radius:14px;margin-bottom:18px}
.count-number{font-size:30px;font-weight:bold;color:#07543f;margin-bottom:10px}
.count-button{width:100%;border:0;background:#07543f;color:white;padding:14px;border-radius:12px;font-size:16px;font-weight:bold;cursor:pointer}
.reset-button{margin-top:8px;border:0;background:#ddd4c1;color:#403b31;padding:9px 15px;border-radius:9px;cursor:pointer}
.section{margin-top:18px}
.section-title{font-size:17px;font-weight:bold;color:#07543f;margin-bottom:8px}
.section-content{background:#faf7ef;padding:14px;border-radius:12px;line-height:1.8;font-size:15px;white-space:pre-line}
.fadheela{background:#f4ead3;border-left:4px solid #b58b32}
.favorite-button{width:100%;margin-top:18px;padding:14px;border-radius:12px;border:1px solid #c9aa68;background:white;color:#7b5d21;font-weight:bold;font-size:15px;cursor:pointer}
.favorite-button.active{background:#b58b32;color:white}
.pdf-button{display:block;text-align:center;text-decoration:none;background:#07543f;color:white;padding:14px;border-radius:12px;margin-top:20px;font-weight:bold}
.footer{text-align:center;padding:25px 15px;color:#817965;font-size:12px}
.share-card-actions{display:flex;gap:10px;margin-top:18px}
.share-card-btn{flex:1;padding:12px;border:0;border-radius:10px;cursor:pointer}
.share-card-share{background:#07543f;color:white}
.share-card-save{background:#b58b32;color:white}
</style>
</head>

<body>
<div class="app">

<div class="header">
<h1>🌿 സ്വലാത്ത് ശേഖരം</h1>
<p>സ്വലാത്തുകൾ • ദിക്ർ • ആത്മീയ സമാധാനം</p>
</div>

<a href="index.html" class="home-button">🏠 Home</a>

<div id="collectionPage">
<div class="search-box">
<input type="text" id="searchInput" 
       placeholder="🔍 സ്വലാത്ത് തിരയുക..." 
       data-ml-placeholder="🔍 സ്വലാത്ത് തിരയുക..." 
       data-i18n-placeholder="searchSwalaath" 
       oninput="searchSwalath()">
</div>

<div class="collection">
<div class="collection-title" id="collectionTitle" 
     data-ml="📖 21 സ്വലാത്തുകളുടെ ശേഖരം" 
     data-i18n="swalathListTitle">📖 21 സ്വലാത്തുകളുടെ ശേഖരം</div>

<div class="swalath-card" onclick="openSwalath('ibrahimiyya')"><h3 lang="ar" dir="rtl">الصلاة الإبراهيمية</h3><span lang="ar" dir="rtl">الصلاة الإبراهيمية</span></div>
<div class="swalath-card" onclick="openSwalath('nariya')"><h3 lang="ar" dir="rtl">الصلاة النارية</h3><span lang="ar" dir="rtl">الصلاة النارية</span></div>
<div class="swalath-card" onclick="openSwalath('tunjina')"><h3 lang="ar" dir="rtl">الصلاة المنجية</h3><span lang="ar" dir="rtl">الصلاة المنجية</span></div>
<div class="swalath-card" onclick="openSwalath('fatih')"><h3 lang="ar" dir="rtl">صلاة الفاتح</h3><span lang="ar" dir="rtl">صلاة الفاتح</span></div>
<div class="swalath-card" onclick="openSwalath('tibbiyya')"><h3 lang="ar" dir="rtl">صلاة طب القلوب</h3><span lang="ar" dir="rtl">صلاة طب القلوب</span></div>
<div class="swalath-card" onclick="openSwalath('nuraniyya')"><h3 lang="ar" dir="rtl">الصلاة النورانية</h3><span lang="ar" dir="rtl">الصلاة النورانية</span></div>
<div class="swalath-card" onclick="openSwalath('saadah')"><h3 lang="ar" dir="rtl">صلاة السعادة</h3><span lang="ar" dir="rtl">صلاة السعادة</span></div>
<div class="swalath-card" onclick="openSwalath('kamaliyya')"><h3 lang="ar" dir="rtl">صلاة الكمالية</h3><span lang="ar" dir="rtl">صلاة الكمالية</span></div>
<div class="swalath-card" onclick="openSwalath('dhatiyya')"><h3 lang="ar" dir="rtl">الصلاة الذاتية</h3><span lang="ar" dir="rtl">الصلاة الذاتية</span></div>
<div class="swalath-card" onclick="openSwalath('jawharat')"><h3 lang="ar" dir="rtl">جوهرة الكمال</h3><span lang="ar" dir="rtl">جوهرة الكمال</span></div>
<div class="swalath-card" onclick="openSwalath('taj')"><h3 lang="ar" dir="rtl">صلاة التاج</h3><span lang="ar" dir="rtl">صلاة التاج</span></div>
<div class="swalath-card" onclick="openSwalath('faraj')"><h3 lang="ar" dir="rtl">صلاة الفرج</h3><span lang="ar" dir="rtl">صلاة الفرج</span></div>
<div class="swalath-card" onclick="openSwalath('bashair')"><h3 lang="ar" dir="rtl">بشائر الخيرات</h3><span lang="ar" dir="rtl">بشائر الخيرات</span></div>
<div class="swalath-card" onclick="openSwalath('ahlam')"><h3 lang="ar" dir="rtl">صلاة الأحلام</h3><span lang="ar" dir="rtl">صلاة الأحلام</span></div>
<div class="swalath-card" onclick="openSwalath('hulo')"><h3 lang="ar" dir="rtl">صلاة الحضور</h3><span lang="ar" dir="rtl">صلاة الحضور</span></div>
<div class="swalath-card" onclick="openSwalath('friday')"><h3 lang="ar" dir="rtl">صلاة الجمعة</h3><span lang="ar" dir="rtl">صلاة الجمعة</span></div>
<div class="swalath-card" onclick="openSwalath('mashishiyya')"><h3 lang="ar" dir="rtl">الصلاة المشيشية</h3><span lang="ar" dir="rtl">الصلاة المشيشية</span></div>
<div class="swalath-card" onclick="openSwalath('ummiyya')"><h3 lang="ar" dir="rtl">الصلاة الأمية</h3><span lang="ar" dir="rtl">الصلاة الأمية</span></div>
<div class="swalath-card" onclick="openSwalath('shadhiliyya')"><h3 lang="ar" dir="rtl">الصلاة الشاذلية</h3><span lang="ar" dir="rtl">الصلاة الشاذلية</span></div>
<div class="swalath-card" onclick="openSwalath('anwar')"><h3 lang="ar" dir="rtl">صلاة الأنوار</h3><span lang="ar" dir="rtl">صلاة الأنوار</span></div>
<div class="swalath-card" onclick="openSwalath('yaqutat')"><h3 lang="ar" dir="rtl">ياقوتة الحقائق</h3><span lang="ar" dir="rtl">ياقوتة الحقائق</span></div>

</div>
</div>

<div id="detailPage" class="detail">
<button class="back-button" onclick="goBack()">← സ്വലാത്തുകളുടെ പട്ടിക</button>

<div class="detail-card">
<h2 id="detailTitle" class="detail-title" lang="ar" dir="rtl"></h2>
<div id="arabicText" class="arabic" lang="ar" dir="rtl"></div>

<div class="counter-box">
<div id="countNumber" class="count-number">0</div>
<button class="count-button" onclick="countSwalath()">📿 ചൊല്ലി — Count കൂട്ടുക</button>
<button class="reset-button" onclick="resetCount()">Reset</button>
</div>

<div class="section"><div class="section-title" id="pronunciationLabel">🗣️ മലയാളം ഉച്ചാരണം</div><div id="pronunciationText" class="section-content"></div></div>
<div class="section"><div class="section-title" id="meaningLabel">📖 മലയാളം അർത്ഥം</div><div id="meaningText" class="section-content"></div></div>
<div class="section"><div class="section-title" id="fadheelaLabel">🌿 ചൊല്ലുന്നതിന്റെ ഗുണങ്ങൾ / ഫദീലത്ത്</div><div id="fadheelaText" class="section-content fadheela"></div></div>
<div class="section"><div class="section-title" id="sourceLabel">📚 ഉറവിടം / കുറിപ്പ്</div><div id="sourceText" class="section-content"></div></div>

<button id="favoriteButton" class="favorite-button" onclick="favoriteSwalath()">♡ Favourite ആയി ചേർക്കുക</button>

<div class="share-card-actions">
<button type="button" class="share-card-btn share-card-share" onclick="shareCurrentSwalath()">📤 Share Card</button>
<button type="button" class="share-card-btn share-card-save" onclick="saveCurrentSwalathCard()">🖼️ Save Image</button>
</div>

<div id="pdfArea"></div>
</div>
</div>

<div class="footer">🌿 സ്വലാത്ത് ശേഖരം<br>Allahumma Salli Ala Sayyidina Muhammad ﷺ</div>
</div>

<script>
const swalathData = {
ibrahimiyya:{name:"الصلاة الإبراهيمية",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ،
كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ،
إِنَّكَ حَمِيدٌ مَجِيدٌ.
اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ،
كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ،
إِنَّكَ حَمِيدٌ مَجِيدٌ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ മുഹമ്മദിൻ വഅലാ ആലി മുഹമ്മദിൻ, കമാ സ്വല്ലയ്ത അലാ ഇബ്രാഹീമ വഅലാ ആലി ഇബ്രാഹീമ, ഇന്നക ഹമീദും മജീദ്. അല്ലാഹുമ്മ ബാരിക് അലാ മുഹമ്മദിൻ വഅലാ ആലി മുഹമ്മദിൻ, കമാ ബാരക്ത അലാ ഇബ്രാഹീമ വഅലാ ആലി ഇബ്രാഹീമ, ഇന്നക ഹമീദും മജീദ്.",meaning:"അല്ലാഹുവേ, ഇബ്രാഹീമിനും അദ്ദേഹത്തിന്റെ കുടുംബത്തിനും നീ അനുഗ്രഹം നൽകിയതുപോലെ മുഹമ്മദ് നബിക്കും അദ്ദേഹത്തിന്റെ കുടുംബത്തിനും അനുഗ്രഹം നൽകേണമേ. തീർച്ചയായും നീ സ്തുത്യർഹനും മഹത്വമുള്ളവനുമാകുന്നു.",fadheela:"നബി ﷺ പഠിപ്പിച്ച സ്വലാത്തിന്റെ പ്രസിദ്ധമായ രൂപമാണിത്.",source:"സഹീഹ് അൽ-ബുഖാരി, സഹീഹ് മുസ്ലിം എന്നിവയിലെ സ്വലാത്തുൽ ഇബ്രാഹീമിയ്യയുടെ നിവേദനങ്ങൾ."},

nariya:{name:"الصلاة النارية",arabic:`اللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَىٰ سَيِّدِنَا مُحَمَّدٍ،
الَّذِي تَنْحَلُّ بِهِ الْعُقَدُ،
وَتَنْفَرِجُ بِهِ الْكُرَبُ،
وَتُقْضَىٰ بِهِ الْحَوَائِجُ،
وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِيمِ،
وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيمِ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ فِي كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُومٍ لَكَ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി സ്വലാത്തൻ കാമിലതൻ വസല്ലിം സലാമൻ താമ്മൻ അലാ സയ്യിദിനാ മുഹമ്മദിൻ, അൽലദീ തൻഹല്ലു ബിഹിൽ ഉഖദ്, വതൻഫരിജു ബിഹിൽ കുരബ്, വതുഖ്ദാ ബിഹിർ ഹവാഇജ്, വതുനാലു ബിഹിർ റഗാഇബ് വഹുസ്നുൽ ഖവാതിം.",meaning:"അല്ലാഹുവേ, ഞങ്ങളുടെ നേതാവായ മുഹമ്മദ് നബിയുടെ മേൽ പൂർണ്ണമായ സ്വലാത്തും സമ്പൂർണ്ണമായ സലാമും വർഷിക്കേണമേ എന്ന പ്രാർത്ഥനാരൂപമാണ്.",fadheela:"പ്രയാസങ്ങളിൽ ആശ്വാസം തേടി വ്യാപകമായി ചൊല്ലിവരുന്ന സ്വലാത്ത്.",source:"പിന്നീടുള്ള പണ്ഡിതപരമ്പരയിൽ പ്രസിദ്ധമായ സ്വലാത്ത്."},

tunjina:{name:"الصلاة المنجية",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ،
وَتَقْضِي لَنَا بِهَا جَمِيعَ الْحَاجَاتِ،
وَتُطَهِّرُنَا بِهَا مِنْ جَمِيعِ السَّيِّئَاتِ،
وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ،
وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ مِنْ جَمِيعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ സ്വലാതൻ തുനജ്ജീനാ ബിഹാ മിൻ ജമീഇൽ അഹ്‌വാലി വൽ ആഫാത്.",meaning:"രക്ഷയും ആവശ്യനിവൃത്തിയും നന്മയും തേടിയുള്ള പ്രാർത്ഥനാരൂപത്തിലുള്ള സ്വലാത്ത്.",fadheela:"പ്രയാസങ്ങളിൽ രക്ഷ തേടിയും ആവശ്യങ്ങൾ നിറവേറണമെന്ന പ്രാർത്ഥനയോടെയും ചൊല്ലിവരുന്നു.",source:"പിന്നീടുള്ള പണ്ഡിതപരമ്പരയിൽ പ്രസിദ്ധമായ ദുആയും സ്വലാത്തും."},

fatih:{name:"صلاة الفاتح",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ،
وَالْخَاتِمِ لِمَا سَبَقَ،
نَاصِرِ الْحَقِّ بِالْحَقِّ،
وَالْهَادِي إِلَىٰ صِرَاطِكَ الْمُسْتَقِيمِ،
وَعَلَىٰ آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيمِ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ അൽ ഫാതിഹി ലിമാ ഉഘ്‌ലിഖ്.",meaning:"സത്യത്തിലേക്ക് വഴികാട്ടിയായ മുഹമ്മദ് നബിയുടെ മേൽ സ്വലാത്ത് വർഷിക്കേണമേ.",fadheela:"ചില പണ്ഡിതപരമ്പരകളിൽ പ്രത്യേക പ്രാധാന്യത്തോടെ ചൊല്ലിവരുന്ന സ്വലാത്ത്.",source:"പിന്നീടുള്ള ആത്മീയ പാരമ്പര്യങ്ങളിൽ പ്രസിദ്ധമായ സ്വലാത്ത്."},

tibbiyya:{name:"صلاة طب القلوب",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوبِ وَدَوَائِهَا،
وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا،
وَنُورِ الْأَبْصَارِ وَضِيَائِهَا،
وَعَلَىٰ آلِهِ وَصَحْبِهِ وَسَلِّمْ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ തിബ്ബിൽ ഖുലൂബി വദവാഇഹാ.",meaning:"ഹൃദയങ്ങളുടെ ഔഷധവും ശരീരങ്ങളുടെ ആരോഗ്യവും രോഗശമനവും കണ്ണുകളുടെ പ്രകാശവുമായ മുഹമ്മദ് നബിയുടെ മേൽ സ്വലാത്ത് വർഷിക്കേണമേ.",fadheela:"ആരോഗ്യത്തിനായി അല്ലാഹുവിനോട് പ്രാർത്ഥിക്കുമ്പോൾ ചൊല്ലിവരുന്ന സ്വലാത്ത്.",source:"പിന്നീടുള്ള പണ്ഡിതപരമ്പരയിൽ പ്രസിദ്ധമായ സ്വലാത്ത്."},

nuraniyya:{name:"الصلاة النورانية",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ نُورِ الْأَنْوَارِ،
وَسِرِّ الْأَسْرَارِ،
وَسَيِّدِ الْأَبْرَارِ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ أَجْمَعِينَ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം വബാരിക് അലാ സയ്യിദിനാ മുഹമ്മദ്.",meaning:"നബി ﷺ യുടെ മേൽ സ്വലാത്തും സലാമും ബറകത്തും നൽകാനുള്ള പ്രാർത്ഥന.",fadheela:"നബി ﷺ യോടുള്ള സ്നേഹവും ആദരവും പ്രകടിപ്പിക്കുന്ന സ്വലാത്ത്.",source:"പിന്നീടുള്ള സ്വലാത്ത് സമാഹാരങ്ങളിൽ കാണപ്പെടുന്ന രൂപം."},

saadah:{name:"صلاة السعادة",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ،
وَسَلِّمْ تَسْلِيمًا كَثِيرًا.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ വഅലാ ആലി സയ്യിദിനാ മുഹമ്മദ്.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും മേൽ സ്വലാത്തും ധാരാളം സലാമും നൽകേണമേ.",fadheela:"നബി ﷺ യുടെ മേൽ ധാരാളമായി സ്വലാത്ത് അയയ്ക്കാനുള്ള ലളിതമായ പ്രാർത്ഥന.",source:"സ്വലാത്ത് സമാഹാരങ്ങളിൽ കാണപ്പെടുന്ന പ്രാർത്ഥനാരൂപം."},

kamaliyya:{name:"صلاة الكمالية",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ،
الْكَامِلِ الْمُكَمَّلِ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ أَجْمَعِينَ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം വബാരിക് അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"മുഹമ്മദ് നബിയുടെ മേൽ സ്വലാത്തും സലാമും ബറകത്തും നൽകേണമേ.",fadheela:"നബി ﷺ യോടുള്ള സ്നേഹവും ആദരവും പ്രകടിപ്പിക്കുന്നതിനായി ചൊല്ലിവരുന്ന സ്വലാത്ത്.",source:"പിന്നീടുള്ള സ്വലാത്ത് സമാഹാരങ്ങളിൽ കാണുന്ന രൂപം."},

dhatiyya:{name:"الصلاة الذاتية",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ،
صَلَاةً تَلِيقُ بِذَاتِكَ الْكَرِيمَةِ،
وَتُقَرِّبُنَا بِهَا إِلَيْكَ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"അല്ലാഹുവിനോടുള്ള അടുപ്പവും നബി ﷺ യോടുള്ള സ്നേഹവും ലക്ഷ്യമാക്കി ചൊല്ലുന്ന പ്രാർത്ഥന.",fadheela:"ആത്മീയ അടുപ്പം ലക്ഷ്യമാക്കിയുള്ള സ്വലാത്ത്.",source:"സ്വലാത്ത് പാരമ്പര്യങ്ങളിൽ കാണപ്പെടുന്ന പ്രാർത്ഥനാരൂപം."},

jawharat:{name:"جوهرة الكمال",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ عَيْنِ الرَّحْمَةِ الرَّبَّانِيَّةِ،
وَالْيَاقُوتَةِ الْمُتَحَقِّقَةِ،
وَنُورِ الْأَكْوَانِ،
وَسَيِّدِنَا مُحَمَّدٍ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം അലാ ഐനിർ റഹ്മതി.",meaning:"മുഹമ്മദ് നബി ﷺ യുടെ മേൽ സ്വലാത്തും സലാമും അർപ്പിക്കുന്ന പ്രസിദ്ധമായ സ്വലാത്ത്.",fadheela:"ചില ആത്മീയ പാരമ്പര്യങ്ങളിൽ പ്രത്യേക വിർദായി ചൊല്ലിവരുന്നു.",source:"തിജാനിയ്യ പാരമ്പര്യത്തിൽ പ്രസിദ്ധമായ സ്വലാത്ത്."},

taj:{name:"صلاة التاج",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ،
صَاحِبِ التَّاجِ وَالْمِعْرَاجِ وَالْبُرَاقِ وَالرَّايَةِ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ وَسَلِّمْ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ വമൗലാനാ മുഹമ്മദിൻ.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും സഹാബിമാരുടെയും മേൽ സ്വലാത്തും സലാമും നൽകേണമേ.",fadheela:"നബി ﷺ യുടെ മഹത്വം ഓർത്ത് ചൊല്ലിവരുന്ന ദുറൂദ്.",source:"പിന്നീടുള്ള സ്വലാത്ത് പാരമ്പര്യങ്ങളിൽ പ്രസിദ്ധമായ ദുറൂദ്."},

faraj:{name:"صلاة الفرج",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُفَرِّجُ بِهَا عَنَّا الْهُمُومَ وَالْكُرُوبَ،
وَتَقْضِي بِهَا الْحَوَائِجَ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ وَسَلِّمْ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"വിഷമങ്ങളും പ്രയാസങ്ങളും നീങ്ങാനും ആവശ്യങ്ങൾ നിറവേറാനും അല്ലാഹുവിനോട് പ്രാർത്ഥിക്കുന്ന സ്വലാത്ത്.",fadheela:"വിഷമങ്ങളിൽ ആശ്വാസം തേടി ചൊല്ലിവരുന്നു.",source:"പിന്നീടുള്ള സ്വലാത്ത് പാരമ്പര്യങ്ങളിൽ കാണപ്പെടുന്ന രൂപം."},

bashair:{name:"بشائر الخيرات",arabic:`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`,pronunciation:"ബിസ്മില്ലാഹിർ റഹ്മാനിർ റഹീം.",meaning:"പരമകാരുണികനും കരുണാനിധിയുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ.",fadheela:"ബശാഇറുൽ ഖൈറാത്ത് ഒരു വിപുലമായ സ്വലാത്ത് സമാഹാരമാണ്.",source:"ബശാഇറുൽ ഖൈറാത്ത് — പൂർണ്ണ PDF താഴെ തുറക്കാം."},

ahlam:{name:"صلاة الأحلام",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ،
صَلَاةً تَجْعَلُ لَنَا بِهَا فَرَجًا مِنْ كُلِّ هَمٍّ،
وَمَخْرَجًا مِنْ كُلِّ ضِيقٍ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ وَسَلِّمْ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"എല്ലാ വിഷമങ്ങളിൽ നിന്നും ആശ്വാസവും പ്രയാസങ്ങളിൽ നിന്നും പുറത്തേക്കുള്ള വഴിയും ലഭിക്കാനായി ചൊല്ലുന്ന സ്വലാത്ത്.",fadheela:"വിഷമങ്ങളിൽ ആശ്വാസം തേടി ചൊല്ലുന്ന പ്രാർത്ഥനാരൂപം.",source:"സ്വലാത്ത് പാരമ്പര്യങ്ങളിൽ കാണപ്പെടുന്ന രൂപം."},

hulo:{name:"صلاة الحضور",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ أَجْمَعِينَ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം വബാരിക് അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും സഹാബിമാരുടെയും മേൽ സ്വലാത്തും സലാമും ബറകത്തും നൽകേണമേ.",fadheela:"സ്വലാത്ത് വർദ്ധിപ്പിക്കുന്നതിനായി ചൊല്ലാവുന്ന ലളിതമായ രൂപം.",source:"സ്വലാത്ത് പാരമ്പര്യങ്ങളിൽ ഉപയോഗിക്കുന്ന പ്രാർത്ഥനാരൂപം."},

friday:{name:"صلاة الجمعة",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ،
وَعَلَىٰ آلِ سَيِّدِنَا مُحَمَّدٍ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം വബാരിക് അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും മേൽ സ്വലാത്തും സലാമും ബറകത്തും നൽകേണമേ.",fadheela:"വെള്ളിയാഴ്ച നബി ﷺ യുടെ മേൽ കൂടുതൽ സ്വലാത്ത് ചൊല്ലാൻ പ്രോത്സാഹിപ്പിക്കുന്ന ഹദീസ് നിവേദനങ്ങൾ വന്നിട്ടുണ്ട്.",source:"വെള്ളിയാഴ്ച സ്വലാത്ത് വർദ്ധിപ്പിക്കുന്നതിനെ സംബന്ധിച്ച ഹദീസ് നിവേദനങ്ങൾ."},

mashishiyya:{name:"الصلاة المشيشية",arabic:`اللَّهُمَّ صَلِّ عَلَى مَنْ مِنْهُ انْشَقَّتِ الْأَسْرَارُ،
وَانْفَلَقَتِ الْأَنْوَارُ،
وَفِيهِ ارْتَقَتِ الْحَقَائِقُ،
وَتَنَزَّلَتْ عُلُومُ آدَمَ فَأَعْجَزَ الْخَلَائِقِ،
وَلَهُ تَضَاءَلَتِ الْفُهُومُ،
فَلَمْ يُدْرِكْهُ مِنَّا سَابِقٌ وَلَا لَاحِقٌ،
فَرِيَاضُ الْمَلَكُوتِ بِزَهْرِ جَمَالِهِ مُونِقَةٌ،
وَحِيَاضُ الْجَبَرُوتِ بِفَيْضِ أَنْوَارِهِ مُتَدَفِّقَةٌ،
وَلَا شَيْءَ إِلَّا وَهُوَ بِهِ مَنُوطٌ،
إِذْ لَوْلَا الْوَاسِطَةُ لَذَهَبَ الْمَوْسُوطُ،
صَلَاةً تَلِيقُ بِكَ مِنْكَ إِلَيْهِ كَمَا هُوَ أَهْلُهُ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ മൻ മിൻഹു ഇൻശഖ്ഖതിൽ അസ്റാർ.",meaning:"രഹസ്യങ്ങളും പ്രകാശങ്ങളും പരാമർശിക്കുന്ന ആത്മീയ പ്രാർത്ഥനാരൂപത്തിലുള്ള സ്വലാത്ത്.",fadheela:"അബ്ദുസ്സലാം ഇബ്നു മശീഷ് رحمه الله എന്ന പണ്ഡിതനോട് ബന്ധപ്പെട്ട പ്രസിദ്ധമായ സ്വലാത്ത്.",source:"സ്വലാത്തുൽ മശീഷിയ്യ."},

ummiyya:{name:"الصلاة الأمية",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَنَبِيِّكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّيِّ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ،
وَسَلِّمْ تَسْلِيمًا.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"നിന്റെ ദാസനും നബിയും റസൂലുമായ മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും സഹാബിമാരുടെയും മേൽ സ്വലാത്തും സലാമും നൽകേണമേ.",fadheela:"നബി ﷺ യോടുള്ള സ്നേഹവും ആദരവും പ്രകടിപ്പിക്കുന്ന സ്വലാത്ത്.",source:"സ്വലാത്ത് സമാഹാരങ്ങളിൽ കാണപ്പെടുന്ന രൂപം."},

shadhiliyya:{name:"الصلاة الشاذلية",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّيِّ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ،
وَسَلِّمْ تَسْلِيمًا بِقَدْرِ عَظَمَةِ ذَاتِكَ فِي كُلِّ وَقْتٍ وَحِينٍ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ സയ്യിദിനാ മുഹമ്മദിൻ.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും സഹാബിമാരുടെയും മേൽ സ്വലാത്തും സലാമും നൽകേണമേ.",fadheela:"ശാദിലിയ്യ പാരമ്പര്യത്തിൽ പ്രചരിക്കുന്ന പ്രസിദ്ധമായ സ്വലാത്ത്.",source:"ശാദിലിയ്യ പാരമ്പര്യത്തിലെ വിർദുകൾ."},

anwar:{name:"صلاة الأنوار",arabic:`اللَّهُمَّ صَلِّ عَلَىٰ نُورِ الْأَنْوَارِ،
وَسِرِّ الْأَسْرَارِ،
وَتِرْيَاقِ الْأَغْيَارِ،
وَمِفْتَاحِ بَابِ الْيَسَارِ،
سَيِّدِنَا مُحَمَّدٍ الْمُخْتَارِ،
وَآلِهِ الْأَطْهَارِ،
وَأَصْحَابِهِ الْأَخْيَارِ،
عَدَدَ نِعَمِ اللَّهِ وَإِفْضَالِهِ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി അലാ നൂറിൽ അൻവാർ.",meaning:"മുഹമ്മദ് നബിയുടെയും കുടുംബത്തിന്റെയും സഹാബിമാരുടെയും മേൽ സ്വലാത്ത് വർഷിക്കേണമേ.",fadheela:"നബി ﷺ യുടെ മഹത്വവും സ്നേഹവും ഓർത്ത് ചൊല്ലുന്ന പാരമ്പര്യ സ്വലാത്ത്.",source:"സ്വലാത്തുൽ അന്വാർ എന്ന പേരിൽ പ്രചരിക്കുന്ന രൂപം."},

yaqutat:{name:"ياقوتة الحقائق",arabic:`اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ،
يَاقُوتَةِ الْحَقَائِقِ،
وَالنُّورِ الْأَسْبَقِ لِلْخَلَائِقِ،
صَلَاةً تُعَرِّفُنَا بِحَقِيقَتِهِ الرَّبَّانِيَّةِ،
وَتُقَرِّبُنَا مِنْ حَضْرَتِهِ الْأَحَدِيَّةِ،
وَتُحَبِّبُ لَنَا ذَاتَهُ الشَّرِيفَةَ الْأَحْمَدِيَّةَ،
وَتُزَيِّنُ أَفْعَالَنَا وَأَقْوَالَنَا ظَاهِرَنَا وَبَاطِنَنَا بِالْأَخْلَاقِ الْمُحَمَّدِيَّةِ،
حَتَّىٰ نَكُونَ مِنْهُ وَإِلَيْهِ،
فَأَنْتَ الْمُعْطِي وَهُوَ الْقَاسِمُ،
وَعَلَىٰ آلِهِ وَصَحْبِهِ.`,pronunciation:"അല്ലാഹുമ്മ സ്വല്ലി വസല്ലിം വബാരിക് അലാ സയ്യിദിനാ വമൗലാനാ മുഹമ്മദിൻ.",meaning:"നബി ﷺ യുടെ മഹത്വവും സ്നേഹവും നമ്മുടെ സ്വഭാവത്തിൽ പ്രതിഫലിപ്പിക്കണമെന്ന പ്രാർത്ഥനാരൂപത്തിലുള്ള സ്വലാത്ത്.",fadheela:"ആത്മീയ പാരമ്പര്യത്തിൽ പ്രചരിക്കുന്ന സ്വലാത്ത് രൂപം.",source:"യാഖൂതത്തുൽ ഹഖാഇഖ് എന്ന പേരിൽ കാണപ്പെടുന്ന രൂപം."}
};

const englishSwalathData = {
ibrahimiyya:{
pronunciation:"Allahumma salli ala Muhammadin wa ala aali Muhammad, kama sallayta ala Ibrahima wa ala aali Ibrahim, innaka Hamidum Majid.",
meaning:"O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and his family.",
fadheela:"A well-known form of salawat taught in authentic hadith.",
source:"Sahih al-Bukhari and Sahih Muslim."
}
};

let currentSwalath = null;
let currentSwalathForShare = null;

function getCurrentLanguage(){
    try{
        if(window.SwalathLanguage &&
           typeof window.SwalathLanguage.getCurrent === "function"){
            return window.SwalathLanguage.getCurrent() || "ml";
        }
    }catch(e){}
    return localStorage.getItem("swalath-language") || "ml";
}

function isMalayalam(){
    return getCurrentLanguage() === "ml";
}

function getDisplayData(key){
    const d = swalathData[key];
    if(!d) return null;

    const en = englishSwalathData[key] || {};

    return {
        name: d.name,
        arabic: d.arabic,
        pronunciation: isMalayalam() ? d.pronunciation : (en.pronunciation || d.pronunciation),
        meaning: isMalayalam() ? d.meaning : (en.meaning || d.meaning),
        fadheela: isMalayalam() ? d.fadheela : (en.fadheela || d.fadheela),
        source: isMalayalam() ? d.source : (en.source || d.source)
    };
}

function openSwalath(key, addHistory = true){
    if(!swalathData[key]) return;

    currentSwalath = key;
    const d = getDisplayData(key);

    currentSwalathForShare = {
        title: d.name,
        arabic: d.arabic,
        pronunciation: d.pronunciation,
        meaning: d.meaning,
        extra: d.fadheela
    };

    if(addHistory){
        history.pushState(
            {page:"swalath", swalath:key},
            "",
            location.pathname + location.search + "#" + encodeURIComponent(key)
        );
    }

    document.getElementById("collectionPage").style.display = "none";
    document.getElementById("detailPage").style.display = "block";

    const title = document.getElementById("detailTitle");
    title.textContent = d.name;
    title.lang = "ar";
    title.dir = "rtl";

    const arabicText = document.getElementById("arabicText");
    arabicText.textContent = d.arabic;
    arabicText.lang = "ar";
    arabicText.dir = "rtl";

    document.getElementById("pronunciationText").textContent = d.pronunciation;
    document.getElementById("meaningText").textContent = d.meaning;
    document.getElementById("fadheelaText").textContent = d.fadheela;
    document.getElementById("sourceText").textContent = d.source;

    document.getElementById("countNumber").textContent =
        localStorage.getItem("swalath_count_" + key) || "0";

    document.getElementById("pdfArea").innerHTML =
        key === "bashair"
        ? '<a href="bashairul-khairat.pdf" target="_blank" rel="noopener" class="pdf-button">📖 Bashairul Khairat — Full PDF</a>'
        : "";

    updateFavoriteButtonText();
}

function showCollection(){
    document.getElementById("detailPage").style.display = "none";
    document.getElementById("collectionPage").style.display = "block";

    currentSwalath = null;
    currentSwalathForShare = null;
}

function goBack() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref') === 'favorites') {
        window.location.href = "index.html#favorites";
    } else {
        if (location.hash && history.state && history.state.page === "swalath") {
            history.back();
        } else {
            window.location.href = "index.html";
        }
    }
}

function syncSwalathPage(){
    let key = "";

    try{
        key = decodeURIComponent(location.hash.slice(1));
    }catch(e){
        key = "";
    }

    if(key && swalathData[key]){
        openSwalath(key, false);
    }else{
        showCollection();
    }
}

window.addEventListener("popstate", function () {
    let key = "";

    try {
        key = decodeURIComponent(location.hash.slice(1));
    } catch (e) {
        key = "";
    }

    if (key && swalathData[key]) {
        openSwalath(key, false);
    } else {
        const detailPage = document.getElementById("detailPage");

        if (detailPage && detailPage.style.display === "block") {
            showCollection();
        }
    }
});

document.addEventListener("DOMContentLoaded", function(){
    syncSwalathPage();
});

window.addEventListener("pageshow", function(){
    syncSwalathPage();
});

function countSwalath(){
    if(!currentSwalath) return;

    const k = "swalath_count_" + currentSwalath;
    const n = parseInt(localStorage.getItem(k) || "0", 10) + 1;

    localStorage.setItem(k, String(n));
    document.getElementById("countNumber").textContent = n;
}

function resetCount(){
    if(!currentSwalath) return;

    localStorage.setItem("swalath_count_" + currentSwalath, "0");
    document.getElementById("countNumber").textContent = "0";
}

function favoriteSwalath(){
    if(!currentSwalath) return;

    let a = [];

    try{
        a = JSON.parse(localStorage.getItem("swalathFavorites") || "[]");
    }catch(e){}

    if(!Array.isArray(a)) a = [];

    const i = a.indexOf(currentSwalath);

    if(i >= 0){
        a.splice(i, 1);
    }else{
        a.push(currentSwalath);
    }

    localStorage.setItem("swalathFavorites", JSON.stringify(a));
    updateFavoriteButtonText();
}

function updateFavoriteButtonText(){
    const b = document.getElementById("favoriteButton");
    if(!b || !currentSwalath) return;

    let a = [];

    try{
        a = JSON.parse(localStorage.getItem("swalathFavorites") || "[]");
    }catch(e){}

    if(!Array.isArray(a)) a = [];

    const yes = a.includes(currentSwalath);

    b.classList.toggle("active", yes);
    b.textContent = yes
        ? "❤️ Favourite ആയി ചേർത്തിട്ടുണ്ട്"
        : "♡ Favourite ആയി ചേർക്കുക";
}

function searchSwalath(){
    const input = document.getElementById("searchInput");
    if(!input) return;

    const q = input.value.toLowerCase().trim();

    document.querySelectorAll(".swalath-card").forEach(function(card){
        card.style.display =
            card.textContent.toLowerCase().includes(q) ? "block" : "none";
    });
}

async function shareCurrentSwalath(){
    if(!currentSwalathForShare){
        alert("ആദ്യം ഒരു സ്വലാത്ത് തിരഞ്ഞെടുക്കുക.");
        return;
    }

    if(typeof shareIslamicCard === "function"){
        await shareIslamicCard(currentSwalathForShare);
    }else{
        alert("Share Card സംവിധാനം ലഭ്യമല്ല.");
    }
}

async function saveCurrentSwalathCard(){
    if(!currentSwalathForShare){
        alert("ആദ്യം ഒരു സ്വലാത്ത് തിരഞ്ഞെടുക്കുക.");
        return;
    }

    if(typeof saveIslamicCard === "function"){
        await saveIslamicCard(currentSwalathForShare);
    }else{
        alert("Save Image സംവിധാനം ലഭ്യമല്ല.");
    }
}
</script>

</body>
</html>
