console.log("SCRIPT NUEVO CARGADO");
const malla = [

/* ===========================
   SEMESTRE 1
=========================== */
{
    semestre: 1,
    ramos: [
        { id: "mat_gen", nombre: "MATEMÁTICA GENERAL", prereq: [] },
        { id: "comunicacion", nombre: "TALLER DE COMUNICACIÓN ORAL Y ESCRITA", prereq: [] },
        { id: "intro_med", nombre: "INTRODUCCIÓN A LA MEDICINA VETERINARIA", prereq: [] },
        { id: "bio_cel", nombre: "BIOLOGÍA CELULAR", prereq: [] },
        { id: "quimica", nombre: "QUÍMICA", prereq: [] }
    ]
},

/* ===========================
   SEMESTRE 2
=========================== */
{
    semestre: 2,
    ramos: [
        { id: "bioestadistica", nombre: "BIOESTADÍSTICA ", prereq: ["mat_gen"] },
        { id: "ingles1", nombre: "INGLÉS I", prereq: [] },
        { id: "anat_canino", nombre: "ANATOMÍA DEL CANINO", prereq: [] },
        { id: "histoembriologia", nombre: "HISTOEMBRIOLOGÍA", prereq: [] },
        { id: "bioquimica", nombre: "BIOQUÍMICA", prereq: ["quimica"] }
    ]
},

/* ===========================
   SEMESTRE 3
=========================== */
{
    semestre: 3,
    ramos: [
        { id: "ingles2", nombre: "INGLÉS II", prereq: ["ingles1"] },
        { id: "anat_comparada", nombre: "ANATOMÍA COMPARADA", prereq: ["anat_canino"] },
        { id: "zoologia", nombre: "ZOOLOGÍA", prereq: ["bio_cel"] },
        { id: "medio_ambiente", nombre: "MEDIO AMBIENTE Y GESTIÓN AMBIENTAL", prereq: ["bio_cel"] },
        { id: "practica_basica", nombre: "PRÁCTICA BÁSICA", prereq: ["intro_med", "anat_canino"] }
    ]
},

/* ===========================
   SEMESTRE 4
=========================== */
{
    semestre: 4,
    ramos: [
        { id: "admin_vet", nombre: "ADMINISTRACIÓN Y EMPRENDIMIENTO VETERINARIO", prereq: [] },
        { id: "fisiologia", nombre: "FISIOLOGÍA ANIMAL", prereq: ["bioquimica", "anat_canino"] },
        { id: "parasitos", nombre: "ENFERMEDADES PARASITARIAS", prereq: ["zoologia"] },
        { id: "micro_general", nombre: "MICROBIOLOGÍA GENERAL Y VETERINARIA", prereq: ["bio_cel"] },
        { id: "genetica", nombre: "GENÉTICA", prereq: ["bioestadistica"] }
    ]
},

/* ===========================
   SEMESTRE 5
=========================== */
{
    semestre: 5,
    ramos: [
        { id: "reproduccion", nombre: "REPRODUCCIÓN E INSEMINACIÓN ARTIFICIAL", prereq: ["fisiologia"] },
        { id: "fisiopatologia", nombre: "FISIOPATOLOGÍA", prereq: ["histoembriologia", "fisiologia"] },
        { id: "inmunologia", nombre: "INMUNOLOGÍA", prereq: ["micro_general"] },
        { id: "nutricion", nombre: "NUTRICIÓN Y ALIMENTACIÓN ANIMAL", prereq: ["bioquimica"] },
        { id: "tec_alimentos", nombre: "TECNOLOGÍA DE LOS ALIMENTOS", prereq: ["micro_general"] },
        { id: "etologia", nombre: "ETOLOGÍA Y BIENESTAR ANIMAL", prereq: ["zoologia"] }
    ]
},

/* ===========================
   SEMESTRE 6
=========================== */
{
    semestre: 6,
    ramos: [
        { id: "ginecologia", nombre: "GINECOLOGÍA Y OBSTETRICIA", prereq: ["reproduccion"] },
        { id: "control_alimentos", nombre: "CONTROL DE CALIDAD DE LOS ALIMENTOS", prereq: ["parasitos", "tec_alimentos"] },
        { id: "produccion_avicola", nombre: "PRODUCCIÓN AVÍCOLA", prereq: ["nutricion", "etologia"] },
        { id: "farmacologia", nombre: "FARMACOLOGÍA Y TOXICOLOGÍA", prereq: ["fisiologia"] },
        { id: "enf_infecciosas", nombre: "ENFERMEDADES INFECCIOSAS", prereq: ["inmunologia"] },
        { id: "pat_sistemas", nombre: "PATOLOGÍA DE SISTEMAS", prereq: ["fisiopatologia"] }
    ]
},

/* ===========================
   SEMESTRE 7
=========================== */
{
    semestre: 7,
    ramos: [
        { id: "lab_clinico", nombre: "LABORATORIO CLÍNICO", prereq: ["pat_sistemas"] },
        { id: "prod_ovinos", nombre: "PRODUCCIÓN OVINOS Y CAPRINOS", prereq: ["genetica"] },
        { id: "prod_porcinos", nombre: "PRODUCCIÓN PORCINA", prereq: ["reproduccion", "medio_ambiente"] },
        { id: "epidemiologia", nombre: "EPIDEMIOLOGÍA VETERINARIA", prereq: ["enf_infecciosas"] },
        { id: "semiologia", nombre: "SEMIOLOGÍA", prereq: ["farmacologia", "fisiopatologia", "anat_comparada"] },
        { id: "practica_intermedia", nombre: "PRÁCTICA INTERMEDIA", prereq: ["farmacologia", "enf_infecciosas"] }
    ]
},

/* ===========================
   SEMESTRE 8
=========================== */
{
    semestre: 8,
    ramos: [
        { id: "med_mayores", nombre: "MEDICINA DE ANIMALES MAYORES", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_caninos", nombre: "MEDICINA DE CANINOS", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_felinos", nombre: "MEDICINA DE FELINOS", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_exoticos", nombre: "MEDICINA DE ANIMALES EXÓTICOS", prereq: ["lab_clinico", "semiologia"] },
        { id: "cirugia_general", nombre: "CIRUGÍA GENERAL", prereq: ["semiologia"] }
    ]
},

/* ===========================
   SEMESTRE 9
=========================== */
{
    semestre: 9,
    ramos: [
        { id: "formulacion_proyectos", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS AGROPECUARIOS", prereq: ["admin_vet"] },
        { id: "pat_quirurgica", nombre: "PATOLOGÍA QUIRÚRGICA", prereq: ["cirugia_general"] },
        { id: "diagnostico_imagenes", nombre: "DIAGNÓSTICO POR IMÁGENES", prereq: ["pat_sistemas"] },
        { id: "prod_acuicola", nombre: "PRODUCCIÓN ACUÍCOLA", prereq: ["nutricion"] },
        { id: "prod_bovinos", nombre: "PRODUCCIÓN BOVINOS CARNE Y LECHE", prereq: ["ginecologia"] },
        { id: "metodologia_inv", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN", prereq: ["epidemiologia"] },
        { id: "practica_final", nombre: "PRÁCTICA FINAL", prereq: ["practica_intermedia"] }
    ]
},

/* ===========================
   SEMESTRE 10
=========================== */
{
    semestre: 10,
    ramos: [
        { id: "farmaco_aplicada", nombre: "FARMACOLOGÍA APLICADA", prereq: ["med_caninos", "med_mayores"] },
        { id: "salud_publica", nombre: "SALUD PÚBLICA", prereq: ["control_alimentos", "epidemiologia"] },
        { id: "titulacion", nombre: "TRABAJO DE TITULACIÓN", prereq: ["metodologia_inv"] },
        { id: "clinica_mayores", nombre: "CLÍNICA DE ANIMALES MAYORES", prereq: ["med_mayores", "diagnostico_imagenes"] },
        { id: "clinica_menores", nombre: "CLÍNICA DE ANIMALES MENORES", prereq: ["med_caninos", "diagnostico_imagenes"] }
    ]
}

];

/****************************
 * ESTADO
 ****************************/
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

/****************************
 * CREAR MALLA
 ****************************/
function crearMalla() {
    const container = document.getElementById("semestersContainer");
    container.innerHTML = "";

    malla.forEach(sem => {
        const semDiv = document.createElement("div");
        semDiv.classList.add("semester");
        semDiv.innerHTML = `
    <h2 class="semester-title">
        <span class="sem-text">SEMESTRE</span>
        <span class="sem-number">${sem.semestre}</span>
    </h2>
`;

        const grid = document.createElement("div");
        grid.classList.add("grid");

        sem.ramos.forEach(ramo => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.textContent = ramo.nombre;

            const desbloqueado = ramo.prereq.every(p => aprobados.includes(p));

            if (!desbloqueado) {
                card.classList.add("locked");
            }

            if (aprobados.includes(ramo.id)) {
                card.classList.add("approved");
            }

            card.addEventListener("click", () => {
                if (!desbloqueado) return;

                if (aprobados.includes(ramo.id)) {
                    aprobados = aprobados.filter(id => id !== ramo.id);
                } else {
                    aprobados.push(ramo.id);
                }

                localStorage.setItem("aprobados", JSON.stringify(aprobados));
                crearMalla();
            });

            grid.appendChild(card);
        });

        semDiv.appendChild(grid);
        container.appendChild(semDiv);
    });

    actualizarProgreso();
}

/****************************
 * PROGRESO %
 ****************************/
function actualizarProgreso() {
    const totalRamos = malla.reduce((s, sem) => s + sem.ramos.length, 0);
    const porcentaje = Math.round((aprobados.length / totalRamos) * 100);

    document.getElementById("progressFill").style.width = porcentaje + "%";
    document.getElementById("currentPercent").textContent = porcentaje + "%";
}

/****************************
 * PALETA DE COLORES 🎨
 ****************************/
const paletteBtn = document.getElementById("paletteBtn");
const palette = document.getElementById("palette");
const dots = document.querySelectorAll(".color-dot");

// tema guardado
const savedTheme = localStorage.getItem("theme") || "pink";
document.body.classList.add("theme-" + savedTheme);

// abrir / cerrar paleta
paletteBtn.addEventListener("click", () => {
    palette.classList.toggle("hidden");
});

// cambiar color
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        const theme = dot.dataset.theme;

        document.body.classList.remove("theme-pink", "theme-blue", "theme-purple");
        document.body.classList.add("theme-" + theme);

        localStorage.setItem("theme", theme);
        palette.classList.add("hidden");
    });
});

/****************************
 * INICIAR
 ****************************/
crearMalla();