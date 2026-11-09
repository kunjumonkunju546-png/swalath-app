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
