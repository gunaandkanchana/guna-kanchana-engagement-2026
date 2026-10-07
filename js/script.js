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

        scratchCover.addEventListener("click", function () {

            scratchCover.classList.add("revealed");

        });

    }

});