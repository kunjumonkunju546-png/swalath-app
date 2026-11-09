SWALATH QAZA

Shafi‘i Madhhab – Master Fiqh Rules Document

Document Version: 0.1
Status: Research Draft – Not Approved for Automatic Calculation
Madhhab: Shafi‘i
Project: Swalath – Qaza Calculator & Lifetime Tracker
Purpose: Establish verified Shafi‘i fiqh rules before implementing the calculation engine.

---

1. IMPORTANT RESEARCH POLICY

This document must follow these principles:

1. Only Shafi‘i madhhab rules may be used in this document.
2. Do not mix rules from other madhhabs.
3. Every rule must have a reliable reference.
4. Record the scholar, publication, and classical fiqh reference wherever available.
5. Distinguish established rules from disputed or unresolved details.
6. Never invent a calculation rule when the available sources are insufficient.
7. Do not automatically classify unknown periods as either missed prayers or exempt periods.
8. Sensitive menstrual and childbirth history must remain private.
9. No rule may be implemented in the calculation engine until its meaning and application are sufficiently established.

Verification labels

- VERIFIED: Supported by reliable Shafi‘i-specific sources.
- CROSS-CHECK REQUIRED: A source is available, but further verification is needed.
- UNRESOLVED: Do not use for automatic calculations.

---

PART A – BASIC OBLIGATION OF PRAYER

2. Conditions of Prayer Obligation

The basic conditions relevant to the obligation of prayer include:

- Islam.
- Sanity / sound mind.
- Puberty (Bulugh).
- Being outside menstruation and postpartum bleeding for women.

Application in the app

- Prayers before the person's legally established puberty are not included in the Qaza calculation.
- Obligatory prayers missed after the beginning of the obligation must be considered.
- Menstruation and valid postpartum bleeding periods must be treated according to their specific Shafi‘i rules.
- Periods of insanity or loss of legal responsibility require separate examination.

Status: CROSS-CHECK REQUIRED for the complete set of exceptional circumstances.

---

3. Puberty (Bulugh)

The principal signs of puberty in the Shafi‘i school include:

1. Seminal emission (including a valid wet dream).
2. Menstruation for a female, subject to the minimum possible age.
3. Completion of fifteen lunar years.

Important calculation rule

The app must use the actual date of the earliest established sign of puberty, not automatically the person's fifteenth Gregorian birthday.

If no earlier sign occurred, the completion of fifteen lunar years is the relevant age threshold.

User information required

- Date of birth.
- Whether puberty occurred through a known sign.
- Approximate or exact date of the first sign.
- Whether the user remembers the event but not its date.
- Whether no sign is remembered.

Unresolved details

- Minimum age and detailed conditions for valid menstruation as a puberty sign.
- How to calculate the date when the user does not remember puberty.
- How to handle conflicting or uncertain recollections.
- Exact conversion between lunar age and Gregorian dates.

Status: CROSS-CHECK REQUIRED before final implementation.

---

PART B – MISSED OBLIGATORY PRAYERS

4. Obligation to Make Up Missed Prayers

Missed obligatory prayers must be made up (Qada).

This includes prayers missed:

- Deliberately.
- Due to sleeping.
- Due to forgetfulness.
- Due to other circumstances in which the obligation remained.

The reason for missing a prayer may affect the urgency and related rulings, but must not automatically change the number of obligatory prayers owed.

App requirements

Record each prayer separately:

- Fajr
- Dhuhr
- Asr
- Maghrib
- Isha

Never assume that all five prayers were missed together.

Status: VERIFIED – subject to the detailed conditions and exceptions in Shafi‘i fiqh.

---

5. Prayer Time Begins Before Menstruation Starts

If a woman's menstruation begins after a prayer time has entered, she may owe Qada of that prayer if sufficient time had elapsed for her to perform it.

If menstruation begins shortly after the prayer time enters, before sufficient time has elapsed, that prayer is not automatically owed.

The exact required time and conditions must be handled according to the Shafi‘i ruling.

App requirements

The system must distinguish:

- Menstruation began before prayer time.
- Menstruation began after prayer time entered, with sufficient time available.
- Menstruation began shortly after prayer time entered.
- Exact starting time unknown.

Do not use an invented fixed number of minutes.

Status: VERIFIED – detailed timing conditions require further study.

Reference:
https://seekersguidance.org/answers/purity-shafii-fiqh/prayer-and-menstruation/

---

6. Prayer Time Ends Before Menstruation Begins

A separate rule must be researched for a woman who becomes pure from menstruation near the end of a prayer time.

The app must determine:

- Which prayer becomes obligatory.
- Whether the next prayer must also be made up.
- The minimum available time required.
- Whether the relevant conditions differ between prayer pairs.

Status: UNRESOLVED – do not implement until researched.

---

PART C – MENSTRUATION (HAYD)

7. Basic Shafi‘i Menstruation Limits

The basic limits are:

Rule| Shafi‘i position
Minimum menstruation| 24 hours in total
Maximum menstruation| 15 days and nights
Minimum purity between two menstruations| 15 days

The minimum 24 hours may be accumulated from intermittent bleeding, subject to the detailed conditions.

Important distinction

A period of bleeding lasting less than 24 hours may ultimately be classified as irregular bleeding rather than valid menstruation.

A period of bleeding exceeding the maximum limit requires detailed classification according to the woman's history and the rules of menstruation and irregular bleeding.

Status: VERIFIED as basic limits. Detailed application requires further research.

Primary references to investigate:

- Imam al-Nawawi – Rawdat al-Talibin.
- Al-Khatib al-Shirbini – Mughni al-Muhtaj.
- Ibn Hajar al-Haytami – Tuhfat al-Muhtaj.

Online reference:
https://seekersguidance.org/answers/purity-shafii-fiqh/must-women-stop-praying-for-occasional-spotting/

---

8. Intermittent Menstrual Bleeding

The following situations require separate rules:

- Bleeding stops and returns within the fifteen-day maximum.
- Clear or white discharge appears between bleeding.
- Coloured discharge appears intermittently.
- The total bleeding duration reaches or exceeds 24 hours.
- The bleeding does not reach the minimum duration.
- The bleeding exceeds fifteen days.

The Shafi‘i discussions include the concepts of:

- Qawl al-Sahb.
- Qawl al-Laqt / Talfiq.

These must not be treated as interchangeable without studying their legal application.

App requirements

The user must be able to record:

- Start and stop dates.
- Exact times, if known.
- Intermittent bleeding intervals.
- Colour of discharge.
- Whether complete purity was observed.
- Whether the dates are exact, approximate, or unknown.

Status: CROSS-CHECK REQUIRED.

---

9. Menstrual Habits and Special Cases

The following classifications must be researched separately:

1. Mubtadi'ah – a woman experiencing menstruation for the first time.
2. Mu'tadah – a woman with an established menstrual habit.
3. Mutahayyirah – a woman whose habit or relevant information is confused or forgotten.
4. A woman whose bleeding exceeds fifteen days.
5. A woman whose bleeding pattern changes.
6. A woman with irregular or intermittent bleeding.
7. A woman with pregnancy-related bleeding.

The rules for determining valid menstruation must be based on the relevant Shafi‘i classifications, not on a simple subtraction of average menstrual days.

Status: UNRESOLVED – detailed rules required.

---

PART D – POSTPARTUM BLEEDING (NIFAS)

10. Basic Nifas Rules

The commonly stated Shafi‘i maximum duration of nifas is sixty days.

The minimum duration is not fixed.

The ordinary duration is often around forty days, but ordinary duration must not be confused with the legal maximum.

Further research required

- Blood immediately after childbirth.
- Bleeding that stops and returns.
- Purity intervals during the sixty-day period.
- Bleeding beyond sixty days.
- Multiple childbirth records.
- Pregnancy loss and miscarriage.
- Blood before childbirth.
- The relationship between nifas and menstruation.

App requirements

For every childbirth record:

- Date of delivery.
- Beginning of bleeding.
- End of bleeding.
- Interruption intervals.
- Exact / approximate / unknown dates.
- Whether a pregnancy loss occurred.

Status: CROSS-CHECK REQUIRED for detailed calculation rules.

---

PART E – IRREGULAR BLEEDING (ISTIHADA)

11. Basic Istihada Principle

Istihada must not automatically be treated as menstruation.

A woman experiencing valid istihada remains subject to the obligation of prayer.

However, the rules concerning purification, wudu, and the treatment of each prayer time must be studied separately.

Important classifications

- Bleeding that does not reach the minimum duration of menstruation.
- Bleeding that exceeds the maximum duration.
- A woman with an established menstrual habit.
- A woman without an established habit.
- A woman whose habit is remembered.
- A woman who has forgotten her habit.

App requirements

Never automatically subtract all bleeding days from the Qaza obligation.

A proper classification must first be established according to Shafi‘i fiqh.

Status: CROSS-CHECK REQUIRED.

---

PART F – UNKNOWN QAZA HISTORY

12. Estimating Unknown Missed Prayers

When a person cannot remember the exact number of missed prayers, a reasonable estimate may be necessary.

A Shafi‘i-specific answer published by SeekersGuidance on 21 August 2026 advises estimating on the higher side and reducing the estimate only for periods the person is certain were prayed.

The same answer discusses:

- Estimating a lifetime of missed prayers.
- Uncertain prayer history.
- Uncertain puberty date.
- Intention for Qada.
- Performing multiple Qada prayers daily.
- Maintaining a record of completed prayers.

Important limitation

The above general estimation guidance must not be used to invent or automatically classify historical menstruation and postpartum periods.

Female exemption periods must first be classified according to the relevant Shafi‘i rules.

App data categories

- Exact.
- Estimated.
- Unknown.
- Needs further review.

Unknown must never silently become zero.

Status: VERIFIED as practical guidance from the cited Shafi‘i answer; exact application to complex female histories requires separate research.

Reference:
https://seekersguidance.org/answers/shafii-fiqh/how-do-i-calculate-missed-prayers-when-i-do-not-know-the-number/

---

PART G – QADA PERFORMANCE

13. Intention (Niyyah)

The intention is made in the heart.

The user must identify the obligatory prayer being performed.

The user does not necessarily need to identify the exact historical calendar date of each missed prayer.

Detailed intention rules must follow the Shafi‘i references.

Status: CROSS-CHECK REQUIRED for final app wording.

---

14. Order of Missed Prayers (Tartib)

In the Shafi‘i school, maintaining the original order of missed prayers is recommended, but breaking that order does not invalidate the Qada prayer.

The app may provide an optional chronological order to help users organise their records.

It must not wrongly declare a completed prayer invalid merely because another Qada prayer was performed first.

Status: VERIFIED – based on the cited Shafi‘i guidance.

---

15. Witr

Witr is not obligatory in the Shafi‘i school.

Therefore, the app must not treat missed Witr as obligatory Qada in the same way as the five obligatory prayers.

Any optional tracking of Witr must remain separate from obligatory Qada balances.

Status: CROSS-CHECK REQUIRED for final wording and edge cases.

---

PART H – CALCULATION ENGINE REQUIREMENTS

16. Separate Prayer Balances

The calculation engine must maintain separate balances for:

- Fajr.
- Dhuhr.
- Asr.
- Maghrib.
- Isha.

It must not assume that every missed day means five missed prayers.

17. Confidence and Verification Categories

Every result must be classified as:

- Confirmed.
- Estimated.
- Unresolved / Needs Review.

Do not combine these into one falsely precise number.

18. No Automatic Guessing

The calculation engine must not:

- Invent missing menstrual dates.
- Assume every woman has the same menstrual duration.
- Subtract a generic number of days per month.
- Treat all postpartum periods as forty days.
- Treat every bleeding event as menstruation.
- Treat every unknown period as a missed-prayer period.
- Apply Hanafi or other madhhab rules to a Shafi‘i calculation.

---

PART I – RESEARCH REFERENCES

19. Primary Online Sources

SeekersGuidance – Shafi‘i Fiqh

1. Prayer and Menstruation
   https://seekersguidance.org/answers/purity-shafii-fiqh/prayer-and-menstruation/

2. Must Women Stop Praying for Occasional Spotting?
   https://seekersguidance.org/answers/purity-shafii-fiqh/must-women-stop-praying-for-occasional-spotting/

3. How Do I Calculate Missed Prayers When I Do Not Know the Number?
   https://seekersguidance.org/answers/shafii-fiqh/how-do-i-calculate-missed-prayers-when-i-do-not-know-the-number/

Classical Shafi‘i References to Consult

- Al-Majmu' – Imam al-Nawawi.
- Rawdat al-Talibin – Imam al-Nawawi.
- Minhaj al-Talibin – Imam al-Nawawi.
- Mughni al-Muhtaj – Al-Khatib al-Shirbini.
- Tuhfat al-Muhtaj – Ibn Hajar al-Haytami.
- Nihayat al-Muhtaj – Shams al-Din al-Ramli.
- Reliance of the Traveller – Umdat al-Salik.

---

PART J – IMPLEMENTATION STATUS

20. Rules Not Yet Approved for Automatic Calculation

The following subjects must be completed before finalising the Shafi‘i calculation engine:

- Detailed puberty age and date handling.
- Minimum age and conditions of menstruation as a puberty sign.
- Full menstrual classification.
- Intermittent bleeding and purity intervals.
- Mubtadi'ah, Mu'tadah, and Mutahayyirah rules.
- Menstruation exceeding fifteen days.
- Complete nifas classification.
- Istihada classifications and prayer obligations.
- Menstruation beginning and ending during prayer times.
- Pregnancy-related bleeding.
- Insanity and loss of legal responsibility.
- Detailed intention rules.
- Witr treatment and exceptional cases.
- Female historical records when dates are unknown.

21. Final Approval Rule

No unresolved rule may be used by the automatic Qaza calculation engine.

A rule may be marked VERIFIED only when its source, conditions, and practical application are sufficiently clear.

This document is a research specification, not a personal fatwa.

The final application must clearly inform users that complicated or uncertain personal cases may require consultation with a qualified Shafi‘i scholar.

---

End of Draft 0.1
Next research task: Complete Shafi‘i Hayd Rules – detailed classification and intermittent bleeding.
---

# PART K – DETAILED HAYD RULES (SHAFI'I)

## 22. Minimum Duration of Hayd

The minimum duration of valid menstruation in the Shafi'i school is 24 hours in total.

This minimum may be fulfilled through intermittent bleeding, subject to the detailed conditions of Shafi'i fiqh.

Important:
- Do not confuse 24 hours of actual bleeding with 24 hours elapsed since the first spotting.
- Record every bleeding interval separately.
- Record every interval of apparent purity separately.
- Do not automatically classify a bleeding episode as valid hayd before its conditions are established.

The exact treatment of intermittent bleeding must follow the rules of naqa', sahb, and laqt.

Reference:
- Rawdat al-Talibin – Imam al-Nawawi.
- SeekersGuidance, Shaykh Irshaad Sedick, checked by Shaykh Faraz Rabbani:
  https://seekersguidance.org/answers/purity-shafii-fiqh/must-women-stop-praying-for-occasional-spotting/

Status: VERIFIED – detailed application requires further research.

## 23. Maximum Duration of Hayd

The maximum duration of menstruation is fifteen days and nights.

A bleeding episode exceeding fifteen days cannot automatically be treated as one continuous menstrual period.

It must be classified according to the woman's circumstances and the rules of istihada.

Status: VERIFIED – classification of prolonged bleeding requires separate research.

## 24. Minimum Purity Between Two Menstruations

The minimum period of purity between two separate menstruations is fifteen complete days.

If bleeding appears before completion of the required purity interval, it cannot automatically be classified as a new menstruation.

Its classification must follow the relevant Shafi'i rules.

Status: VERIFIED.

## 25. Intermittent Bleeding (Naqa')

Naqa' refers to an interval during which bleeding stops and apparent purity occurs between two episodes of bleeding.

When bleeding stops and returns within the maximum fifteen-day period, the Shafi'i school discusses two approaches:

1. Qawl al-Sahb – treating the intervening purity as connected to the menstruation.
2. Qawl al-Laqt / Talfiq – treating the intervening purity as actual purity.

The relied-upon Shafi'i position is generally identified as Qawl al-Sahb, subject to its conditions.

The app must not apply this rule without checking:
- Whether the bleeding satisfies the minimum duration.
- Whether the complete episode remains within fifteen days.
- Whether the purity is genuinely enclosed between two bleeding episodes.
- Whether the relevant conditions of the relied-upon position are fulfilled.

The practical consequences for prayer, fasting, and Qada must be researched separately.

References:
- Al-Majmu' – Imam al-Nawawi.
- Mughni al-Muhtaj – Al-Khatib al-Shirbini.
- Kuwaiti Fiqh Encyclopedia:
  https://www.fiqhpedia.org/articles/article%3Akwfe%3Av18%3Aa042?lang=en

Status: CROSS-CHECK REQUIRED before automatic implementation.

## 26. Colours of Menstrual Discharge

Shafi'i sources identify the following colours as potentially belonging to menstruation:

- Black.
- Red.
- Brown.
- Yellow.
- Dusky / turbid discharge.

Clear or white discharge is associated with purity.

A coloured discharge must still satisfy the conditions for valid menstruation. Colour alone does not establish that every discharge is hayd.

References:
- SeekersGuidance:
  https://seekersguidance.org/answers/purity-shafii-fiqh/can-i-take-a-ritual-bath-when-i-see-yellow-discharge-at-the-end-of-menses/
- SeekersGuidance:
  https://islamqa.org/shafii/seekersguidance-shafii/241596/how-to-have-a-clear-understanding-of-menstruation/

Status: VERIFIED as a general colour classification; individual cases require the complete timing rules.

## 27. Signs of the End of Menstruation

The end of menstruation must be established through the recognised signs of purity.

The principal signs discussed in Shafi'i guidance include:

1. Clear discharge.
2. White discharge.
3. Complete dryness, where applicable under the relevant rules.

A woman must not assume that menstruation has ended merely because heavy red bleeding has stopped if coloured menstrual discharge remains.

References:
- SeekersGuidance:
  https://seekersguidance.org/answers/purity-shafii-fiqh/can-i-take-a-ritual-bath-when-i-see-yellow-discharge-at-the-end-of-menses/
- SeekersGuidance:
  https://islamqa.org/shafii/qibla-shafii/33674/resuming-prayer-after-menstruation/

Status: CROSS-CHECK REQUIRED for detailed practical instructions and individual circumstances.

## 28. First-Time Menstruation (Mubtadi'ah)

A woman experiencing menstruation for the first time is classified as Mubtadi'ah.

If bleeding remains within the valid limits, the basic rules of menstruation apply.

If bleeding exceeds fifteen days, additional rules are required to distinguish hayd from istihada.

The classification may depend on:
- Whether the blood can be distinguished by its characteristics (Tamyiz).
- Whether the conditions of valid Tamyiz are fulfilled.
- Whether a valid habit has been established.
- Whether the bleeding is continuous or intermittent.

Status: UNRESOLVED – detailed classification must be researched before implementation.

## 29. Habitual Menstruation (Mu'tadah)

A woman with an established menstrual habit requires separate treatment when bleeding exceeds the normal duration.

The app must record:
- Previous menstrual duration.
- Previous purity duration.
- Start dates.
- Whether the habit was stable.
- Whether the current bleeding differs from the established habit.

The rules of Tamyiz and returning to a previous habit must be examined according to the relied-upon Shafi'i position.

Status: UNRESOLVED – do not implement a simplified habit-based formula.

## 30. Forgotten or Confused Menstrual Habit

A woman who has forgotten the relevant details of her menstrual habit may fall under a complex classification.

The app must not assume that her average previous cycle is automatically her legal menstrual habit.

It must record what she remembers and mark uncertain information for further review.

Status: UNRESOLVED.

## 31. Bleeding Exceeding Fifteen Days

Bleeding lasting beyond fifteen days requires a detailed Shafi'i classification.

Relevant categories include:
- Mubtadi'ah Mumayyizah.
- Mubtadi'ah Ghayr Mumayyizah.
- Mu'tadah Mumayyizah.
- Mu'tadah Ghayr Mumayyizah.
- Mutahayyirah and other relevant classifications.

The conditions of Tamyiz, the strength and weakness of blood, established habits, and the timing of bleeding must be studied separately.

The app must not simply classify the first fifteen days as hayd and all later days as istihada.

Reference for further study:
- Reliance of the Traveller, chapter on menstruation and irregular bleeding.
- Rawdat al-Talibin.
- Mughni al-Muhtaj.
- Shafi'i Fiqh:
  https://islamqa.org/shafii/qibla-shafii/33249/

Status: UNRESOLVED – full rules required.

## 32. Data Required for Historical Hayd Records

For every historical menstrual episode, the app should allow:

- Exact start date and time.
- Exact end date and time.
- Every interruption in bleeding.
- Every return of bleeding.
- Colour of discharge.
- Whether clear or white discharge was observed.
- Whether the episode was within the woman's normal habit.
- Whether the dates are exact, approximate, or unknown.

The app must preserve the original records even when the legal classification is later changed.

## 33. Qada Calculation Restriction

A menstrual period must first be legally classified before it can be excluded from obligatory prayer calculations.

The app must not:
- Subtract a fixed number of menstrual days every month.
- Assume every woman has a seven-day period.
- Assume that every interruption means purity.
- Assume that every coloured discharge is automatically valid hayd.
- Treat all bleeding beyond fifteen days as the same legal case.
- Apply a rule from another madhhab.

Until the relevant Shafi'i classification is established, the record must remain:

NEEDS SHAFI'I REVIEW

---

## PART K – RESEARCH REFERENCES

1. SeekersGuidance – Must Women Stop Praying for Occasional Spotting?
   https://seekersguidance.org/answers/purity-shafii-fiqh/must-women-stop-praying-for-occasional-spotting/

2. SeekersGuidance – What Is the Ruling of Blood Spots between Periods?
   https://seekersguidance.org/answers/shafii-fiqh/what-is-the-ruling-of-blood-spots-between-periods/

3. SeekersGuidance – Can I Take a Ritual Bath When I See Yellow Discharge at the End of Menses?
   https://seekersguidance.org/answers/purity-shafii-fiqh/can-i-take-a-ritual-bath-when-i-see-yellow-discharge-at-the-end-of-menses/

4. Kuwaiti Fiqh Encyclopedia – Menstruation:
   https://www.fiqhpedia.org/articles/article%3Akwfe%3Av18%3Aa042?lang=en

5. Shafi'i Fiqh – Bleeding Longer than 15 Days:
   https://islamqa.org/shafii/qibla-shafii/33249/

---

**End of Part K – Hayd Research Draft**

**Next research task: Complete the detailed Shafi'i classifications of prolonged bleeding, Mubtadi'ah, Mu'tadah, Tamyiz, and Mutahayyirah.**---

PART L – THE SEVEN CATEGORIES OF MUSTAHADAH

Shafi‘i Madhhab – Detailed Research Specification

Research status: Draft – Source-based classification
Primary reference: Jabatan Mufti Wilayah Persekutuan (Malaysia)
Purpose: Identify the legal classification of prolonged bleeding before determining prayer obligations and historical Qada.

34. General Principle

In the Shafi‘i school, a woman whose bleeding exceeds the maximum duration of menstruation (15 days and nights) is classified as Mustahadah.

Her case must be examined according to:

- Whether she has experienced a previous valid menstruation and purity.
- Whether she can distinguish strong and weak blood.
- Whether she remembers her previous menstrual habit.
- Whether she remembers the duration (Qadr) of her habit.
- Whether she remembers the timing (Waqt) of her habit.

The seven categories below are based on the classifications explained by Jabatan Mufti Wilayah Persekutuan.

---

35. Category 1 – Mubtadi'ah Mumayyizah

Definition:

A woman experiencing menstruation for the first time whose bleeding exceeds fifteen days and who can distinguish strong blood from weak blood.

Relevant characteristics:

- No previous established menstrual habit.
- First menstrual episode.
- Bleeding exceeds fifteen days.
- Blood characteristics can be distinguished.
- The conditions of valid Tamyiz must be fulfilled.

General ruling:

The strong blood is classified as menstruation and the weak blood as istihada, provided all legal conditions of Tamyiz are satisfied.

Blood strength may be assessed through recognised characteristics, including colour, thickness and smell.

Important restriction:

The first fifteen days must not be classified retrospectively using an unverified simplified formula. The detailed rules concerning when the distinction becomes legally operative must be followed.

App requirements:

- Record every bleeding interval.
- Record blood characteristics.
- Record the first bleeding date and time.
- Establish whether valid Tamyiz conditions are fulfilled.

Status: Source-supported; detailed Tamyiz conditions require complete verification.

Reference:
https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5643-irsyad-al-fatwa-siri-ke-770-mustahadah-golongan-pertama-mubtadaah-mumayyizah

---

36. Category 2 – Mubtadi'ah Ghayr Mumayyizah

Definition:

A woman experiencing menstruation for the first time whose bleeding exceeds fifteen days but who cannot distinguish strong and weak blood.

This includes:

- Bleeding with one consistent characteristic.
- Bleeding with changing characteristics that fail the conditions of valid Tamyiz.

General ruling:

The relied-upon position described in the cited source assigns one day and one night (24 hours) as menstruation and the remaining twenty-nine days as purity in the described thirty-day cycle.

This must not be converted into a universal formula without considering the complete legal context.

Important conditions:

- The woman must know when bleeding began.
- If the beginning is unknown, she may fall into a different classification.
- The actual case must satisfy the conditions of this category.

App requirements:

- Record first bleeding date and time.
- Record whether blood characteristics are distinguishable.
- Record whether any previous valid menstrual period existed.
- Flag unknown starting dates for review.

Status: Source-supported; application must preserve the stated conditions.

Reference:
https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5753-irsyad-al-fatwa-siri-ke-800-mustahadah-golongan-kedua-mubtadaah-ghairu-mumayyizah

---

37. Category 3 – Mu'tadah Mumayyizah

Definition:

A woman who has previously experienced menstruation and purity, remembers her previous habit, and can distinguish strong and weak blood during a prolonged bleeding episode.

General ruling:

According to the relied-upon Shafi‘i position described by the Mufti Department, valid Tamyiz is given precedence over the previous habit.

Therefore:

- Strong blood is classified as menstruation.
- Weak blood is classified as istihada.

This applies even when the current blood distinction differs from the previous habit, provided the conditions of valid Tamyiz are fulfilled.

App requirements:

- Record previous menstrual duration.
- Record previous menstrual timing.
- Record the current blood characteristics.
- Validate Tamyiz before classification.

Status: Source-supported; detailed conditions of Tamyiz must be enforced.

Reference:
https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5786-irsyad-al-fatwa-siri-ke-809-mustahadah-golongan-ketiga-mu-tadah-mumayyizah

---

38. Category 4 – Mu'tadah Ghayr Mumayyizah

Definition:

A woman who has experienced previous menstruation and purity, whose current bleeding exceeds fifteen days, who cannot distinguish strong and weak blood, but remembers both the duration and timing of her previous menstrual habit.

General ruling:

Her established menstrual habit is used to identify the menstrual period.

The remaining period is classified according to the applicable rules of purity and istihada.

The cited Mufti Department explanation states that an established habit may be recognised even when established through one previous valid cycle, subject to the relevant conditions.

App requirements:

- Record the previous menstrual duration.
- Record the previous starting time or position in the cycle.
- Record whether the habit was stable.
- Record whether the user can distinguish current blood characteristics.

Important restriction:

Do not calculate from an average of several cycles when the legal habit and its conditions have not been established.

Status: Source-supported; detailed habit rules require cross-checking.

Reference:
https://www.muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/6105-irsyad-hukum-siri-ke-882-mustahadah-golongan-keempat-mutaadah-ghair-mumaiyizah

---

39. Category 5 – Mutahayyirah Mutlaqah

Definition:

A woman who previously experienced menstruation and purity, whose current bleeding exceeds fifteen days, who cannot distinguish strong and weak blood, and who has forgotten both the duration and timing of her previous menstrual habit.

General ruling:

The relied-upon Shafi‘i position requires Ihtiyat (precaution) in worship.

The woman may be treated as menstruating for some rulings and as pure for other rulings.

The cited explanation describes the possibility of:

- Menstruation.
- Purity.
- Interruption of bleeding.

Therefore, her case cannot be reduced to a simple fixed number of menstrual days.

Important restriction:

Do not automatically assign seven days or any average menstrual duration.

Do not assume that the entire period is either menstruation or purity.

App requirements:

- Record all information the woman remembers.
- Record whether previous duration is unknown.
- Record whether previous timing is unknown.
- Mark the case as requiring specialist review.
- Do not generate a definitive Qada number automatically.

Status: Source-supported; practical worship rulings and their detailed application require specialist review.

Reference:
https://www.muftiwp.gov.my/en/artikel/irsyad-fatwa/irsyad-fatwa-umum-cat/6097-irsyad-hukum-siri-ke-879-mustahadah-golongan-kelima-mutahayyirah-mutlaqah

---

40. Category 6 – Mutahayyirah Ghayr Mumayyizah, Remembering Duration but Forgetting Timing

Arabic classification:

Mutahayyirah Ghayr Mumayyizah Dhakiratun li 'Adatiha Qadran la Waqtan.

Definition:

A woman who:

- Previously experienced menstruation and purity.
- Cannot distinguish strong and weak blood.
- Remembers the number of days of her previous menstrual habit.
- Has forgotten the timing or starting point of that habit.

General ruling:

The cited Shafi‘i explanation divides the period into categories of certainty and uncertainty.

1. Days certainly known to be menstruation are treated as menstruation.
2. Days certainly known to be purity are treated as purity.
3. Days that may be menstruation or purity require Ihtiyat.
4. Days that may involve menstruation, purity or interruption of bleeding require additional precaution.

The source explains that the required purification procedure differs between these uncertain categories.

App requirements:

- Record remembered duration.
- Record unknown starting time.
- Record any days known with certainty.
- Do not assume the remembered duration automatically determines the current menstrual dates.
- Flag uncertain intervals.

Status: Source-supported; exact day-by-day classification must be researched before calculation.

Reference:
https://www.muftiwp.gov.my/en/artikel/irsyad-fatwa/irsyad-fatwa-umum-cat/6565-irsyad-al-hukum-siri-ke-951-mustahadah-golongan-keenam

---

41. Category 7 – Mu'tadah Ghayr Mumayyizah, Remembering Timing but Forgetting Duration

Arabic classification:

Mu'tadah Ghayr Mumayyizah Dhakiratun li 'Adatiha Waqtan la Qadran.

Definition:

A woman who:

- Previously experienced menstruation and purity.
- Cannot distinguish strong and weak blood.
- Remembers the timing of her previous menstrual habit.
- Has forgotten the number of days of that habit.

General ruling:

The cited Shafi‘i explanation distinguishes:

1. Days certainly known to be menstruation.
2. Days certainly known to be purity.
3. Days that may be menstruation or purity.
4. Days that may involve menstruation, purity or interruption of bleeding.

The uncertain periods require Ihtiyat, following the relevant Shafi‘i rulings.

The source explains that the purification requirements differ depending on the type of uncertainty.

App requirements:

- Record the remembered timing.
- Record the unknown duration.
- Record all dates the woman remembers with certainty.
- Do not invent an average duration.
- Do not assign a fixed number of menstrual days.
- Mark uncertain days for review.

Status: Source-supported; complete day-by-day calculation requires further study.

Reference:
https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/6567-irsyad-al-hukum-siri-ke-952-mustahadah-golongan-ketujuh

---

PART M – COMPARISON OF THE SEVEN CATEGORIES

42. Classification Table

Category| Previous habit?| Can distinguish blood?| Remembers duration?| Remembers timing?
1. Mubtadi'ah Mumayyizah| No| Yes| No| No
2. Mubtadi'ah Ghayr Mumayyizah| No| No| No| Starting time required
3. Mu'tadah Mumayyizah| Yes| Yes| Yes| Yes
4. Mu'tadah Ghayr Mumayyizah| Yes| No| Yes| Yes
5. Mutahayyirah Mutlaqah| Yes| No| No| No
6. Mutahayyirah – remembers Qadr| Yes| No| Yes| No
7. Mu'tadah – remembers Waqt| Yes| No| No| Yes

This table is a classification aid, not a complete legal decision tree.

---

PART N – QADA CALCULATION SAFETY

43. Critical Distinction: Worship Rulings vs Historical Qada

The seven categories explain how prolonged bleeding is classified for worship.

They do not, by themselves, provide a complete formula for calculating every historical missed prayer.

The application must separately establish:

- Which dates were legally classified as menstruation.
- Which dates were legally classified as purity.
- Which dates remain uncertain.
- Which obligatory prayers were actually performed.
- Which prayers were missed during periods of legal purity.

No uncertain period may silently be treated as a confirmed exemption or confirmed missed-prayer period.

44. Automatic Calculation Restrictions

Until a complete and verified Shafi‘i decision tree is available:

- Do not automatically classify Mutahayyirah cases.
- Do not invent missing menstrual habits.
- Do not use average cycle length as a legal substitute.
- Do not apply a universal seven-day rule.
- Do not treat the first fifteen days as automatically menstruation in every case.
- Do not calculate Qada solely from the number of bleeding days.
- Do not treat Ihtiyat as a simple mathematical classification.

All unresolved cases must be marked:

NEEDS QUALIFIED SHAFI'I REVIEW

---

PART O – PRIMARY RESEARCH REFERENCES

45. Official Mufti Department Articles

1. Category 1 – Mubtadi'ah Mumayyizah
   https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5643-irsyad-al-fatwa-siri-ke-770-mustahadah-golongan-pertama-mubtadaah-mumayyizah

2. Category 2 – Mubtadi'ah Ghayr Mumayyizah
   https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5753-irsyad-al-fatwa-siri-ke-800-mustahadah-golongan-kedua-mubtadaah-ghairu-mumayyizah

3. Category 3 – Mu'tadah Mumayyizah
   https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/5786-irsyad-al-fatwa-siri-ke-809-mustahadah-golongan-ketiga-mu-tadah-mumayyizah

4. Category 4 – Mu'tadah Ghayr Mumayyizah
   https://www.muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/6105-irsyad-hukum-siri-ke-882-mustahadah-golongan-keempat-mutaadah-ghair-mumaiyizah

5. Category 5 – Mutahayyirah Mutlaqah
   https://www.muftiwp.gov.my/en/artikel/irsyad-fatwa/irsyad-fatwa-umum-cat/6097-irsyad-hukum-siri-ke-879-mustahadah-mutahayyirah-mutlaqah

6. Category 6 – Remembers Duration, Forgets Timing
   https://www.muftiwp.gov.my/en/artikel/irsyad-fatwa/irsyad-fatwa-umum-cat/6565-irsyad-al-hukum-siri-ke-951-mustahadah-golongan-keenam

7. Category 7 – Remembers Timing, Forgets Duration
   https://muftiwp.gov.my/ms/artikel/irsyad-hukum/umum/6567-irsyad-al-hukum-siri-ke-952-mustahadah-golongan-ketujuh

46. Classical Shafi'i References

The following works must be consulted to validate the detailed rules:

- Minhaj al-Talibin – Imam al-Nawawi.
- Rawdat al-Talibin – Imam al-Nawawi.
- Mughni al-Muhtaj – Al-Khatib al-Shirbini.
- Tuhfat al-Muhtaj – Ibn Hajar al-Haytami.
- Nihayat al-Muhtaj – Shams al-Din al-Ramli.
- Al-Taqrirat al-Sadidah – Hassan al-Kaff.
- Al-Ibanah wa al-Ifadhah – Abd al-Rahman al-Saqqaf.

---

End of Part L – Seven Categories of Mustahadah

Next research task: Build and verify the complete Shafi‘i decision tree for Tamyiz, habitual menstruation, uncertain dates, and historical Qada implications.

Implementation status: Not approved for automatic calculation.
