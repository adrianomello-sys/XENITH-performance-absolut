/* =========================================================
   XENITH PERFORMANCE
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   CARROS
   ========================================================= */

const cars = [

    {
        name: "SPIRIT",
        class: "LIMITED",
        image: "images/spirit.jpg",
        story: "O Spirit é um dos projetos que ajudaram a construir a identidade da XENITH. Uma máquina criada com foco em presença, estilo e personalidade.",
        video: "#"
    },

    {
        name: "S13",
        class: "COMPETITION",
        image: "images/s13.jpg",
        story: "O S13 faz parte da história da XENITH e representa uma das primeiras construções competitivas da garagem.",
        video: "#"
    },

    {
        name: "S15",
        class: "COMPETITION",
        image: "images/s15.jpg",
        story: "O S15 nasceu para levar a proposta competitiva da XENITH ainda mais longe, combinando visual agressivo e identidade própria.",
        video: "#"
    },

    {
        name: "DIAMOND",
        class: "PREMIUM",
        image: "images/diamond.jpg",
        story: "O Diamond representa a linha Premium da XENITH, trazendo uma construção mais exclusiva e refinada.",
        video: "#"
    },

    {
        name: "TURQUOISE",
        class: "LIMITED",
        image: "images/turquoise.jpg",
        story: "O Turquoise é um projeto marcado por sua identidade visual e pela proposta diferenciada dentro da coleção XENITH.",
        video: "#"
    },

    {
        name: "GOLD",
        class: "PREMIUM",
        image: "images/gold.jpg",
        story: "O Gold faz parte da linha Premium e foi pensado para representar uma construção de destaque dentro da garagem.",
        video: "#"
    },

    {
        name: "BLACK OPAL",
        class: "LIMITED",
        image: "images/black-opal.jpg",
        story: "O Black Opal aposta em uma identidade mais sombria e exclusiva, dando à coleção XENITH uma presença diferente.",
        video: "#"
    },

    {
        name: "VANGUARD",
        class: "LIMITED",
        image: "images/vanguard.jpg",
        story: "O Vanguard nasceu como um projeto de personalidade clássica, misturando uma plataforma marcante com a identidade XENITH.",
        video: "#"
    },

    {
        name: "VALKYRIE",
        class: "COMPETITION",
        image: "images/valkyrie.jpg",
        story: "A Valkyrie é uma das máquinas mais recentes da XENITH Competition. Criada para representar a garagem nas pistas, ela combina presença agressiva, patrocínios e uma identidade própria.",
        video: "#"
    }

];


/* =========================================================
   ELEMENTOS
   ========================================================= */

const carsGrid = document.getElementById("carsGrid");

const filters = document.querySelectorAll(".filter");

const modal = document.getElementById("carModal");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalClass =
    document.getElementById("modalClass");

const modalStory =
    document.getElementById("modalStory");

const modalVideo =
    document.getElementById("modalVideo");


/* =========================================================
   CRIAR CARDS
   ========================================================= */

function createCars(filter = "all") {

    carsGrid.innerHTML = "";

    const filteredCars = cars.filter(car => {

        if (filter === "all") {
            return true;
        }

        return car.class.toLowerCase() === filter;

    });


    filteredCars.forEach((car, index) => {

        const card = document.createElement("article");

        card.className = "car-card";

        card.dataset.class = car.class.toLowerCase();

        card.style.animationDelay =
            `${index * 0.05}s`;


        card.innerHTML = `

            <div class="car-image">

                <img
                    src="${car.image}"
                    alt="XENITH ${car.name}"
                    loading="lazy"
                >

                <span class="car-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="car-class">
                    ${car.class}
                </span>

            </div>


            <div class="car-content">

                <p class="car-label">
                    XENITH ${car.class}
                </p>

                <h3>
                    ${car.name}
                </h3>

                <p>
                    Projeto XENITH desenvolvido
                    dentro da classe ${car.class}.
                </p>

                <a
                    href="#"
                    class="car-link"
                >
                    VIEW PROJECT
                    <span>→</span>
                </a>

            </div>

        `;


        /* Abrir detalhes */

        card.addEventListener("click", function(event) {

            event.preventDefault();

            openCar(car);

        });


        carsGrid.appendChild(card);

    });

}


/* =========================================================
   ABRIR CARRO
   ========================================================= */

function openCar(car) {

    modalImage.src = car.image;

    modalImage.alt =
        `XENITH ${car.name}`;

    modalTitle.textContent =
        car.name;

    modalClass.textContent =
        `XENITH ${car.class}`;

    modalStory.textContent =
        car.story;

    modalVideo.href =
        car.video;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   FECHAR MODAL
   ========================================================= */

function closeCar() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   BOTÃO FECHAR
   ========================================================= */

modalClose.addEventListener(
    "click",
    closeCar
);


/* =========================================================
   CLICAR FORA
   ========================================================= */

modalBackdrop.addEventListener(
    "click",
    closeCar
);


/* =========================================================
   ESC FECHA
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeCar();

        }

    }
);


/* =========================================================
   FILTROS
   ========================================================= */

filters.forEach(filter => {

    filter.addEventListener(
        "click",
        function() {

            filters.forEach(button => {

                button.classList.remove(
                    "active"
                );

            });


            this.classList.add(
                "active"
            );


            const selected =
                this.dataset.filter;


            createCars(selected);

        }
    );

});


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.querySelector(".navigation");


menuButton.addEventListener(
    "click",
    function() {

        navigation.classList.toggle(
            "mobile-active"
        );

    }
);


/* =========================================================
   FECHAR MENU AO CLICAR
   ========================================================= */

navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener(
        "click",
        function() {

            navigation.classList.remove(
                "mobile-active"
            );

        }
    );

});


/* =========================================================
   IMPEDIR SCROLL COM MODAL ABERTO
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "ArrowDown" &&
            modal.classList.contains("active")
        ) {

            event.preventDefault();

        }

    }
);


/* =========================================================
   INICIAR GARAGEM
   ========================================================= */

createCars("all");
