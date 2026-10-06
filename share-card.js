/* =========================================================
   NAZYAN TRAVELS — SWALATH SHARE CARD
   Offline image generation + native sharing
   ========================================================= */

(function () {

    "use strict";

    const CARD_WIDTH = 1080;
    const PADDING = 75;


    /* =====================================================
       FONT READY
       ===================================================== */

    function loadFont() {

        if (document.fonts && document.fonts.ready) {
            return document.fonts.ready;
        }

        return Promise.resolve();

    }


    /* =====================================================
       TEXT WRAPPING
       ===================================================== */

    function wrapText(ctx, text, maxWidth) {

        const words =
            String(text || "").split(/\s+/);

        const lines = [];

        let line = "";

        words.forEach(function (word) {

            const test =
                line
                    ? line + " " + word
                    : word;

            if (
                ctx.measureText(test).width >
                    maxWidth &&
                line
            ) {

                lines.push(line);

                line = word;

            } else {

                line = test;

            }

        });

        if (line) {
            lines.push(line);
        }

        return lines;

    }


    function wrapArabic(ctx, text, maxWidth) {

        const paragraphs =
            String(text || "").split("\n");

        const lines = [];

        paragraphs.forEach(function (paragraph) {

            if (!paragraph.trim()) {

                lines.push("");

                return;

            }

            const words =
                paragraph.trim().split(/\s+/);

            let line = "";

            words.forEach(function (word) {

                const test =
                    line
                        ? line + " " + word
                        : word;

                if (
                    ctx.measureText(test).width >
                        maxWidth &&
                    line
                ) {

                    lines.push(line);

                    line = word;

                } else {

                    line = test;

                }

            });

            if (line) {
                lines.push(line);
            }

        });

        return lines;

    }


    /* =====================================================
       ROUND RECTANGLE
       ===================================================== */

    function roundRect(
        ctx,
        x,
        y,
        width,
        height,
        radius
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x + radius,
            y
        );

        ctx.lineTo(
            x + width - radius,
            y
        );

        ctx.quadraticCurveTo(
            x + width,
            y,
            x + width,
            y + radius
        );

        ctx.lineTo(
            x + width,
            y + height - radius
        );

        ctx.quadraticCurveTo(
            x + width,
            y + height,
            x + width - radius,
            y + height
        );

        ctx.lineTo(
            x + radius,
            y + height
        );

        ctx.quadraticCurveTo(
            x,
            y + height,
            x,
            y + height - radius
        );

        ctx.lineTo(
            x,
            y + radius
        );

        ctx.quadraticCurveTo(
            x,
            y,
            x + radius,
            y
        );

        ctx.closePath();

    }


    /* =====================================================
       BACKGROUND
       ===================================================== */

    function drawBackground(
        ctx,
        width,
        height
    ) {

        const gradient =
            ctx.createLinearGradient(
                0,
                0,
                width,
                height
            );

        gradient.addColorStop(
            0,
            "#f7f1e3"
        );

        gradient.addColorStop(
            1,
            "#fffdf8"
        );

        ctx.fillStyle = gradient;

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /* Decorative circles */

        ctx.globalAlpha = 0.08;

        ctx.fillStyle =
            "#17483d";


        ctx.beginPath();

        ctx.arc(
            width - 80,
            80,
            170,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.arc(
            60,
            height - 60,
            130,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.globalAlpha = 1;

    }


    /* =====================================================
       CREATE SHARE CARD
       ===================================================== */

    function createCard(options) {

        options = options || {};

        return loadFont().then(function () {

            const title =
                options.title ||
                "സ്വലാത്ത്";

            const arabic =
                options.arabic ||
                "";

            const pronunciation =
                options.pronunciation ||
                "";

            const meaning =
                options.meaning ||
                "";

            const type =
                options.type ||
                "Islamic Reminder";

            const includeMeaning =
                options.includeMeaning !== false;


            const canvas =
                document.createElement("canvas");

            const ctx =
                canvas.getContext("2d");


            const contentWidth =
                CARD_WIDTH -
                PADDING * 2;


            /* =================================================
               CALCULATE TEXT LINES
               ================================================= */

            ctx.font =
                'bold 44px "Noto Sans Malayalam", "Amiri", serif';

            const titleLines =
                wrapText(
                    ctx,
                    title,
                    contentWidth
                );


            ctx.font =
                '48px "Amiri", "Traditional Arabic", serif';

            const arabicLines =
                wrapArabic(
                    ctx,
                    arabic,
                    contentWidth
                );


            ctx.font =
                '32px "Noto Sans Malayalam", Arial, sans-serif';

            const pronunciationLines =
                wrapText(
                    ctx,
                    pronunciation,
                    contentWidth
                );


            const meaningLines =
                wrapText(
                    ctx,
                    meaning,
                    contentWidth
                );


            /* =================================================
               CALCULATE CARD HEIGHT
               ================================================= */

            let height = 300;


            height +=
                titleLines.length *
                58;


            height += 50;


            height +=
                Math.max(
                    arabicLines.length,
                    1
                ) * 72;


            if (pronunciation) {

                height += 55;

                height +=
                    pronunciationLines.length *
                    45;

            }


            if (
                includeMeaning &&
                meaning
            ) {

                height += 55;

                height +=
                    meaningLines.length *
                    45;

            }


            height += 180;


            canvas.width =
                CARD_WIDTH;

            canvas.height =
                Math.max(
                    1200,
                    height
                );


            /* =================================================
               BACKGROUND
               ================================================= */

            drawBackground(
                ctx,
                canvas.width,
                canvas.height
            );


            /* =================================================
               MAIN CARD
               ================================================= */

            const cardX = 35;

            const cardY = 35;

            const cardW =
                canvas.width - 70;

            const cardH =
                canvas.height - 70;


            ctx.save();

            ctx.shadowColor =
                "rgba(0,0,0,0.10)";

            ctx.shadowBlur = 25;

            ctx.shadowOffsetY = 10;


            roundRect(
                ctx,
                cardX,
                cardY,
                cardW,
                cardH,
                36
            );


            ctx.fillStyle =
                "#fffdf8";

            ctx.fill();


            ctx.restore();


            let y = 105;


            /* =================================================
               BRAND
               ================================================= */

            ctx.textAlign =
                "center";

            ctx.direction =
                "ltr";


            ctx.font =
                "bold 25px Arial";


            ctx.fillStyle =
                "#b08a3e";


            ctx.fillText(
                "SWALATH",
                CARD_WIDTH / 2,
                y
            );


            y += 75;


            /* =================================================
               TYPE
               ================================================= */

            ctx.font =
                '24px Arial, "Noto Sans Malayalam", sans-serif';


            ctx.fillStyle =
                "#8b8170";


            ctx.fillText(
                type,
                CARD_WIDTH / 2,
                y
            );


            y += 55;


            /* =================================================
               TITLE
               ================================================= */

            ctx.font =
                'bold 44px "Noto Sans Malayalam", "Amiri", serif';


            ctx.fillStyle =
                "#17483d";


            titleLines.forEach(function (line) {

                ctx.fillText(
                    line,
                    CARD_WIDTH / 2,
                    y
                );

                y += 58;

            });


            y += 35;


            /* =================================================
               GOLD DIVIDER
               ================================================= */

            ctx.strokeStyle =
                "#c7a45b";

            ctx.lineWidth = 3;


            ctx.beginPath();

            ctx.moveTo(
                PADDING,
                y
            );

            ctx.lineTo(
                CARD_WIDTH - PADDING,
                y
            );

            ctx.stroke();


            y += 70;


            /* =================================================
               ARABIC
               ================================================= */

            ctx.direction =
                "rtl";

            ctx.textAlign =
                "center";


            ctx.font =
                '48px "Amiri", "Traditional Arabic", serif';


            ctx.fillStyle =
                "#172b23";


            arabicLines.forEach(function (line) {

                ctx.fillText(
                    line,
                    CARD_WIDTH / 2,
                    y
                );

                y += 72;

            });


            /* =================================================
               PRONUNCIATION
               ================================================= */

            if (pronunciation) {

                y += 20;


                const boxH =
                    pronunciationLines.length *
                    45 +
                    45;


                roundRect(
                    ctx,
                    PADDING,
                    y,
                    contentWidth,
                    boxH,
                    22
                );


                ctx.fillStyle =
                    "#f4eee1";

                ctx.fill();


                y += 38;


                ctx.direction =
                    "ltr";


                ctx.font =
                    '30px "Noto Sans Malayalam", Arial, sans-serif';


                ctx.fillStyle =
                    "#514d45";


                pronunciationLines.forEach(function (line) {

                    ctx.fillText(
                        line,
                        CARD_WIDTH / 2,
                        y
                    );

                    y += 45;

                });


                y += 30;

            }


            /* =================================================
               MEANING
               ================================================= */

            if (
                includeMeaning &&
                meaning
            ) {

                y += 15;


                ctx.direction =
                    "ltr";


                ctx.font =
                    '30px "Noto Sans Malayalam", Arial, sans-serif';


                ctx.fillStyle =
                    "#4c554f";


                meaningLines.forEach(function (line) {

                    ctx.fillText(
                        line,
                        CARD_WIDTH / 2,
                        y
                    );

                    y += 45;

                });

            }


            /* =================================================
               FOOTER BRANDING
               ================================================= */

            const footerY =
                canvas.height - 105;


            ctx.direction =
                "ltr";

            ctx.textAlign =
                "center";


            ctx.font =
                "bold 27px Arial";


            ctx.fillStyle =
                "#17483d";


            ctx.fillText(
                "NAZYAN TRAVELS",
                CARD_WIDTH / 2,
                footerY
            );


            ctx.font =
                "20px Arial";


            ctx.fillStyle =
                "#8a8172";


            ctx.fillText(
                "Your Journey, Our Care.",
                CARD_WIDTH / 2,
                footerY + 35
            );


            return canvas;

        });

    }


    /* =====================================================
       SAVE IMAGE
       ===================================================== */

    function saveImage(
        canvas,
        filename
    ) {

        return new Promise(function (resolve) {

            canvas.toBlob(
                function (blob) {

                    if (!blob) {

                        resolve(false);

                        return;

                    }


                    const url =
                        URL.createObjectURL(blob);


                    const a =
                        document.createElement("a");


                    a.href =
                        url;


                    a.download =
                        filename ||
                        "swalath-share.png";


                    document.body.appendChild(a);


                    a.click();


                    a.remove();


                    setTimeout(function () {

                        URL.revokeObjectURL(
                            url
                        );

                    }, 1000);


                    resolve(true);

                },
                "image/png"
            );

        });

    }


    /* =====================================================
       NATIVE SHARE
       ===================================================== */

    async function shareImage(
        canvas,
        filename,
        shareTitle
    ) {

        return new Promise(function (resolve) {

            canvas.toBlob(
                async function (blob) {

                    if (!blob) {

                        resolve(false);

                        return;

                    }


                    const file =
                        new File(
                            [blob],
                            filename ||
                                "swalath-share.png",
                            {
                                type:
                                    "image/png"
                            }
                        );


                    /* =========================================
                       NATIVE FILE SHARE
                       ========================================= */

                    if (
                        navigator.share &&
                        navigator.canShare
                    ) {

                        try {

                            const canShareFiles =
                                navigator.canShare({
                                    files: [file]
                                });


                            if (canShareFiles) {

                                await navigator.share({

                                    title:
                                        shareTitle ||
                                        "Swalath",

                                    text:
                                        "Swalath • NAZYAN TRAVELS",

                                    files: [file]

                                });


                                resolve(true);

                                return;

                            }

                        } catch (error) {

                            /*
                               User cancelled share.
                               No error message.
                            */

                            if (
                                error &&
                                error.name ===
                                    "AbortError"
                            ) {

                                resolve(false);

                                return;

                            }

                        }

                    }


                    /* =========================================
                       FALLBACK
                       ========================================= */

                    await saveImage(
                        canvas,
                        filename
                    );


                    resolve(true);

                },
                "image/png"
            );

        });

    }


    /* =====================================================
       DATA NORMALIZER
       ===================================================== */

    function normalizeData(data) {

        data = data || {};

        return {

            title:
                data.title ||
                "സ്വലാത്ത്",

            arabic:
                data.arabic ||
                "",

            pronunciation:
                data.pronunciation ||
                "",

            meaning:
                data.meaning ||
                "",

            extra:
                data.extra ||
                "",

            type:
                data.type ||
                "Islamic Reminder"

        };

    }


    /* =====================================================
       GLOBAL FUNCTION
       USED BY SWALATH.HTML
       ===================================================== */

    window.shareIslamicCard =
        async function (data) {

            const cardData =
                normalizeData(data);


            const canvas =
                await createCard(
                    cardData
                );


            const safeTitle =
                String(
                    cardData.title ||
                    "swalath"
                )
                .replace(
                    /[\\/:*?"<>|]/g,
                    ""
                )
                .trim();


            const filename =
                (
                    safeTitle ||
                    "swalath"
                ) +
                "-share.png";


            return shareImage(
                canvas,
                filename,
                cardData.title
            );

        };


    /* =====================================================
       GLOBAL SAVE FUNCTION
       USED BY SWALATH.HTML
       ===================================================== */

    window.saveIslamicCard =
        async function (data) {

            const cardData =
                normalizeData(data);


            const canvas =
                await createCard(
                    cardData
                );


            const safeTitle =
                String(
                    cardData.title ||
                    "swalath"
                )
                .replace(
                    /[\\/:*?"<>|]/g,
                    ""
                )
                .trim();


            const filename =
                (
                    safeTitle ||
                    "swalath"
                ) +
                "-share.png";


            return saveImage(
                canvas,
                filename
            );

        };


    /* =====================================================
       COMMON OBJECT
       KEPT FOR FUTURE PAGES
       ===================================================== */

    window.SwalathShareCard = {

        create:
            createCard,

        save:
            saveImage,

        share:
            shareImage

    };


})();
