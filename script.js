const malla = [

/* ===========================
   SEMESTRE 1
=========================== */
{
    semestre: 1,
    ramos: [
        { id: "mat_gen", nombre: "Matemática General", prereq: [] },
        { id: "comunicacion", nombre: "Taller de Comunicación Oral y Escrita", prereq: [] },
        { id: "intro_med", nombre: "Introducción a la Medicina Veterinaria", prereq: [] },
        { id: "bio_cel", nombre: "Biología Celular", prereq: [] },
        { id: "quimica", nombre: "Química", prereq: [] }
    ]
},

/* ===========================
   SEMESTRE 2
=========================== */
{
    semestre: 2,
    ramos: [
        { id: "bioestadistica", nombre: "Bioestadística", prereq: ["mat_gen"] },
        { id: "ingles1", nombre: "Inglés I", prereq: [] },
        { id: "anat_canino", nombre: "Anatomía del Canino", prereq: [] },
        { id: "histoembriologia", nombre: "Histoembriología", prereq: [] },
        { id: "bioquimica", nombre: "Bioquímica", prereq: ["quimica"] }
    ]
},

/* ===========================
   SEMESTRE 3
=========================== */
{
    semestre: 3,
    ramos: [
        { id: "ingles2", nombre: "Inglés II", prereq: ["ingles1"] },
        { id: "anat_comparada", nombre: "Anatomía Comparada", prereq: ["anat_canino"] },
        { id: "zoologia", nombre: "Zoología", prereq: ["bio_cel"] },
        { id: "medio_ambiente", nombre: "Medio Ambiente y Gestión Ambiental", prereq: ["bio_cel"] },
        { id: "practica_basica", nombre: "Práctica Básica", prereq: ["intro_med", "anat_canino"] }
    ]
},

/* ===========================
   SEMESTRE 4
=========================== */
{
    semestre: 4,
    ramos: [
        { id: "admin_vet", nombre: "Administración y Emprendimiento Veterinario", prereq: [] },
        { id: "fisiologia", nombre: "Fisiología Animal", prereq: ["bioquimica", "anat_canino"] },
        { id: "parasitos", nombre: "Enfermedades Parasitarias", prereq: ["zoologia"] },
        { id: "micro_general", nombre: "Microbiología General y Veterinaria", prereq: ["bio_cel"] },
        { id: "genetica", nombre: "Genética", prereq: ["bioestadistica"] }
    ]
},

/* ===========================
   SEMESTRE 5
=========================== */
{
    semestre: 5,
    ramos: [
        { id: "reproduccion", nombre: "Reproducción e Inseminación Artificial", prereq: ["fisiologia"] },
        { id: "fisiopatologia", nombre: "Fisiopatología", prereq: ["histoembriologia", "fisiologia"] },
        { id: "inmunologia", nombre: "Inmunología", prereq: ["micro_general"] },
        { id: "nutricion", nombre: "Nutrición y Alimentación Animal", prereq: ["bioquimica"] },
        { id: "tec_alimentos", nombre: "Tecnología de los Alimentos", prereq: ["micro_general"] },
        { id: "etologia", nombre: "Etología y Bienestar Animal", prereq: ["zoologia"] }
    ]
},

/* ===========================
   SEMESTRE 6
=========================== */
{
    semestre: 6,
    ramos: [
        { id: "ginecologia", nombre: "Ginecología y Obstetricia", prereq: ["reproduccion"] },
        { id: "control_alimentos", nombre: "Control de Calidad de los Alimentos", prereq: ["parasitos", "tec_alimentos"] },
        { id: "produccion_avicola", nombre: "Producción Avícola", prereq: ["nutricion", "etologia"] },
        { id: "farmacologia", nombre: "Farmacología y Toxicología", prereq: ["fisiologia"] },
        { id: "enf_infecciosas", nombre: "Enfermedades Infecciosas", prereq: ["inmunologia"] },
        { id: "pat_sistemas", nombre: "Patología de Sistemas", prereq: ["fisiopatologia"] }
    ]
},

/* ===========================
   SEMESTRE 7
=========================== */
{
    semestre: 7,
    ramos: [
        { id: "lab_clinico", nombre: "Laboratorio Clínico", prereq: ["pat_sistemas"] },
        { id: "prod_ovinos", nombre: "Producción Ovinos y Caprinos", prereq: ["genetica"] },
        { id: "prod_porcinos", nombre: "Producción Porcina", prereq: ["reproduccion", "medio_ambiente"] },
        { id: "epidemiologia", nombre: "Epidemiología Veterinaria", prereq: ["enf_infecciosas"] },
        { id: "semiologia", nombre: "Semiología", prereq: ["farmacologia", "fisiopatologia", "anat_comparada"] },
        { id: "practica_intermedia", nombre: "Práctica Intermedia", prereq: ["farmacologia", "enf_infecciosas"] }
    ]
},

/* ===========================
   SEMESTRE 8
=========================== */
{
    semestre: 8,
    ramos: [
        { id: "med_mayores", nombre: "Medicina Animales Mayores", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_caninos", nombre: "Medicina de Caninos", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_felinos", nombre: "Medicina de Felinos", prereq: ["lab_clinico", "semiologia"] },
        { id: "med_exoticos", nombre: "Medicina de Animales Exóticos", prereq: ["lab_clinico", "semiologia"] },
        { id: "cirugia_general", nombre: "Cirugía General", prereq: ["semiologia"] }
    ]
},

/* ===========================
   SEMESTRE 9
=========================== */
{
    semestre: 9,
    ramos: [
        { id: "formulacion_proyectos", nombre: "Formulación y Evaluación de Proyectos Agropecuarios", prereq: ["admin_vet"] },
        { id: "pat_quirurgica", nombre: "Patología Quirúrgica", prereq: ["cirugia_general"] },
        { id: "diagnostico_imagenes", nombre: "Diagnóstico por Imágenes", prereq: ["pat_sistemas"] },
        { id: "prod_acuicola", nombre: "Producción Acuícola", prereq: ["nutricion"] },
        { id: "prod_bovinos", nombre: "Producción Bovinos Carne y Leche", prereq: ["ginecologia"] },
        { id: "metodologia_inv", nombre: "Metodología de la Investigación", prereq: ["epidemiologia"] },
        { id: "practica_final", nombre: "Práctica Final", prereq: ["practica_intermedia"] }
    ]
},

/* ===========================
   SEMESTRE 10
=========================== */
{
    semestre: 10,
    ramos: [
        { id: "farmaco_aplicada", nombre: "Farmacología Aplicada", prereq: ["med_caninos", "med_mayores"] },
        { id: "salud_publica", nombre: "Salud Pública", prereq: ["control_alimentos", "epidemiologia"] },
        { id: "titulacion", nombre: "Trabajo de Titulación", prereq: ["metodologia_inv"] },
        { id: "clinica_mayores", nombre: "Clínica de Animales Mayores", prereq: ["med_mayores", "diagnostico_imagenes"] },
        { id: "clinica_menores", nombre: "Clínica de Animales Menores", prereq: ["med_caninos", "diagnostico_imagenes"] }
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
        semDiv.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

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

    document.getElementById("progressText").textContent =
        `Progreso: ${porcentaje}%`;

    document.getElementById("progressFill").style.width =
        porcentaje + "%";
}

/****************************
 * MODO OSCURO
 ****************************/
const toggleDark = document.getElementById("toggleDark");

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    toggleDark.textContent = "Modo claro";
}

toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const activo = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", activo);
    toggleDark.textContent = activo ? "Modo claro" : "Modo oscuro";
});

/****************************
 * INICIAR
 ****************************/
crearMalla();