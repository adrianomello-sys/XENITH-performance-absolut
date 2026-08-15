/* =========================================================
   XENITH AUTOMOTIVE DIVISION
   SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — MENU LATERAL
       ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const sideMenu = document.querySelector(".side-menu");

    if (menuButton && sideMenu) {

        menuButton.addEventListener("click", () => {
            sideMenu.classList.toggle("active");

            const isOpen = sideMenu.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );
        });


        // Fecha ao clicar em qualquer link do menu

        const menuLinks =
            sideMenu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", () => {

                sideMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        // Fecha clicando fora do menu

        document.addEventListener("click", event => {

            const clickedInsideMenu =
                sideMenu.contains(event.target);

            const clickedButton =
                menuButton.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedButton &&
                sideMenu.classList.contains("active")
            ) {

                sideMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        // Fecha com ESC

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                sideMenu.classList.contains("active")
            ) {

                sideMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       02 — NAVEGAÇÃO SUAVE
       ===================================================== */

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');


    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       03 — HEADER DINÂMICO
       ===================================================== */

    const header =
        document.querySelector("header");


    if (header) {

        let lastScroll = 0;

        window.addEventListener(
            "scroll",
            () => {

                const currentScroll =
                    window.scrollY;

                if (currentScroll > 50) {

                    header.style.background =
                        "rgba(5, 5, 5, 0.96)";

                } else {

                    header.style.background =
                        "rgba(5, 5, 5, 0.82)";

                }

                lastScroll = currentScroll;

            },
            { passive: true }
        );

    }


    /* =====================================================
       04 — ANIMAÇÃO DOS ELEMENTOS
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".car-card, .competition-card, .edition, " +
            ".download-grid article, .update, .lore"
        );


    if (
        animatedElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.6s ease, " +
                "transform 0.6s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       05 — EFEITO DE ENTRADA DO HERO
       ===================================================== */

    const heroContent =
        document.querySelector(".hero-content");


    if (heroContent) {

        heroContent.style.opacity = "0";

        heroContent.style.transform =
            "translateY(25px)";

        requestAnimationFrame(() => {

            setTimeout(() => {

                heroContent.style.opacity = "1";

                heroContent.style.transform =
                    "translateY(0)";

                heroContent.style.transition =
                    "opacity 1s ease, " +
                    "transform 1s ease";

            }, 150);

        });

    }


    /* =====================================================
       06 — CARDS DOS CARROS
       ===================================================== */

    const carCards =
        document.querySelectorAll(
            ".car-card"
        );


    carCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.cursor =
                    "pointer";

            }
        );


        card.addEventListener(
            "click",
            event => {

                const clickedLink =
                    event.target.closest("a");

                if (clickedLink) {
                    return;
                }

                const link =
                    card.querySelector("a");

                if (link) {
                    link.click();
                }

            }
        );

    });


    /* =====================================================
       07 — EFEITO DOS CARDS DE COMPETITION
       ===================================================== */

    const competitionCards =
        document.querySelectorAll(
            ".competition-card"
        );


    competitionCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                    centerY) * -2;

                const rotateY =
                    ((x - centerX) /
                    centerX) * 2;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       08 — LINKS PLACEHOLDER
       ===================================================== */

    const placeholderLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    placeholderLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                /*
                 * Esses links estão temporariamente
                 * sem destino.
                 *
                 * Quando colocarmos páginas individuais
                 * dos carros, basta trocar o href no HTML.
                 */

            }
        );

    });


    /* =====================================================
       09 — BOTÃO VOLTAR AO TOPO
       ===================================================== */

    const createTopButton = () => {

        const button =
            document.createElement("button");

        button.innerHTML = "↑";

        button.setAttribute(
            "aria-label",
            "Voltar ao topo"
        );

        button.id =
            "xenith-top-button";


        Object.assign(
            button.style,
            {

                position: "fixed",

                bottom: "25px",

                right: "25px",

                width: "45px",

                height: "45px",

                border:
                    "1px solid rgba(255,255,255,0.25)",

                background:
                    "rgba(5,5,5,0.9)",

                color: "#fff",

                fontSize: "20px",

                cursor: "pointer",

                zIndex: "900",

                opacity: "0",

                pointerEvents: "none",

                transition:
                    "opacity 0.3s ease"

            }
        );


        document.body.appendChild(button);


        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 600) {

                    button.style.opacity = "1";

                    button.style.pointerEvents =
                        "auto";

                } else {

                    button.style.opacity = "0";

                    button.style.pointerEvents =
                        "none";

                }

            },
            { passive: true }
        );


        button.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    };


    createTopButton();


    /* =====================================================
       10 — ATUALIZAÇÃO DO ANO
       ===================================================== */

    const copyright =
        document.querySelector(
            ".copyright"
        );


    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} XENITH. ALL RIGHTS RESERVED.`;

    }


    /* =====================================================
       11 — DETECÇÃO DE REDUÇÃO DE MOVIMENTO
       ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (prefersReducedMotion.matches) {

        document.documentElement.style
            .scrollBehavior = "auto";

    }


    /* =====================================================
       12 — CONSOLE
       ===================================================== */

    console.log(
        "%c XENITH AUTOMOTIVE DIVISION ",
        "background:#050505;" +
        "color:#fff;" +
        "font-size:16px;" +
        "font-weight:bold;" +
        "padding:10px;"
    );

    console.log(
        "%c System initialized successfully.",
        "color:#888;"
    );

});
