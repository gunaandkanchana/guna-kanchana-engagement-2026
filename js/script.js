document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       ELEMENTS
    ===================================== */

    const openButton = document.getElementById("openButton");
    const opening = document.getElementById("opening");
    const invitation = document.getElementById("invitation");

    const envelope = document.querySelector(".envelope-card");

    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    const scratchCover = document.getElementById("scratchCover");


    /* =====================================
       OPEN INVITATION
    ===================================== */

    if (openButton && opening && invitation && envelope) {

        openButton.addEventListener("click", function () {

            /* Seal animation */

            openButton.classList.add("opening-clicked");


            /* Envelope flap animation */

            envelope.classList.add("opened");


            /* Start music */

            if (music) {

                music.play().catch(function () {

                    console.log("Music autoplay blocked.");

                });

            }


            /* Hide opening screen */

            setTimeout(function () {

                opening.classList.add("opening-hide");

            }, 1500);


            /* Show main invitation */

            setTimeout(function () {

                opening.style.display = "none";

                invitation.style.display = "block";

                invitation.classList.add("invitation-show");

                window.scrollTo(0, 0);

            }, 2600);

        });

    }


    /* =====================================
       MUSIC BUTTON
    ===================================== */

    if (musicButton && music) {

        musicButton.addEventListener("click", function () {

            if (music.paused) {

                music.play().then(function () {

                    musicButton.innerHTML = "♫";

                }).catch(function () {

                    console.log("Music playback blocked.");

                });

            } else {

                music.pause();

                musicButton.innerHTML = "🔇";

            }

        });

    }


    /* =====================================
       SCRATCH DATE CARD
    ===================================== */

if (scratchCover) {
    let isScratching = false;
    let scratchDistance = 0;

    function startScratch(e) {
        isScratching = true;
        scratchDistance = 0;
        scratchCover.style.transition = "none";
        scratchCover.setPointerCapture?.(e.pointerId);
    }

    function moveScratch(e) {
        if (!isScratching) return;

        scratchDistance += Math.abs(e.movementX || 0)
                         + Math.abs(e.movementY || 0);

        if (scratchDistance > 120) {
            scratchCover.classList.add("revealed");
            isScratching = false;
            scratchCover.style.transition = "";
        }
    }

    function endScratch() {
        isScratching = false;
        scratchCover.style.transition = "";
    }

    scratchCover.addEventListener("pointerdown", startScratch);
    scratchCover.addEventListener("pointermove", moveScratch);
    scratchCover.addEventListener("pointerup", endScratch);
    scratchCover.addEventListener("pointercancel", endScratch);
}


});