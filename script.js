const data = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Introducción a la Profesión del Nutricionista", id: "intro" },
      { nombre: "Biología y Genética", id: "biogen" },
      { nombre: "Bases Matemáticas", id: "matematica" },
      { nombre: "Química General", id: "quimica" },
      { nombre: "Ciencia de los Alimentos I", id: "ciencia1" },
      { nombre: "Sociedad y Salud I", id: "sys1" }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Anatomía General", id: "anato" },
      { nombre: "Ética y Bioética", id: "etica" },
      { nombre: "Inglés 1", id: "ingles1" },
      { nombre: "Bioquímica General", id: "bioquem", prereq: ["quimica", "biogen"] },
      { nombre: "Ciencia de los Alimentos II", id: "ciencia2", prereq: ["ciencia1"] },
      { nombre: "Sociedad y Salud II", id: "sys2", prereq: ["sys1"] }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Bioquímica Nutricional", id: "bioquemnutri", prereq: ["bioquem"] },
      { nombre: "Antropometría", id: "antro", prereq: ["anato"] },
      { nombre: "Psicología General y Evolutiva", id: "psico", prereq: ["etica"] },
      { nombre: "Agentes Vivos e Higiene de los Alimentos", id: "agentes", prereq: ["biogen"] },
      { nombre: "Sociedad y Salud III", id: "sys3", prereq: ["sys2"] },
      { nombre: "Inglés II", id: "ingles2", prereq: ["ingles1"] }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Fisiología Humana", id: "fisio", prereq: ["bioquem"] },
      { nombre: "Evaluación del Estado Nutricional", id: "evalu", prereq: ["ciencia2", "antro"] },
      { nombre: "Técnicas Dietéticas", id: "tecni", prereq: ["ciencia2", "agentes"] },
      { nombre: "Análisis Químico y Sensorial de los Alimentos", id: "analisis", prereq: ["quimica", "ciencia2"] },
      { nombre: "Salud Pública", id: "salud", prereq: ["sys3"] },
      { nombre: "Inglés III", id: "ingles3", prereq: ["ingles2"] }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Farmacología", id: "farmaco", prereq: ["fisio"] },
      { nombre: "Fisiopatología", id: "fisiopato", prereq: ["fisio"] },
      { nombre: "Dietética en el Curso de la Vida", id: "diet", prereq: ["bioquemnutri", "sys3", "fisio", "evalu", "tecni"] },
      { nombre: "Conducta Alimentaria", id: "conducta", prereq: ["psico"] },
      { nombre: "Planificación Alimentaria", id: "plan", prereq: ["tecni"] },
      { nombre: "Bioestadística", id: "bioest", prereq: ["matematica"] },
      { nombre: "Inglés IV", id: "ingles4", prereq: ["ingles3"] }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Dietoterapia en Adulto y Persona Mayor", id: "dieto", prereq: ["fisiopato", "diet"] },
      { nombre: "Educación en Alimentación y Nutrición", id: "educacion", prereq: ["salud", "diet", "conducta"] },
      { nombre: "Calidad e Inocuidad Alimentaria", id: "calidad", prereq: ["tecni"] },
      { nombre: "Gestión y Administración en Salud", id: "gestion", prereq: ["salud"] },
      { nombre: "Investigación en Salud", id: "invest", prereq: ["bioest"] },
      { nombre: "Formulación y Evaluación de Proyectos", id: "formu", prereq: ["matematica", "diet"] },
      { nombre: "Inglés V", id: "ingles5", prereq: ["ingles4"] }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Dietoterapia en Pediatría y Adolescencia", id: "dietoped", prereq: ["fisiopato", "diet"] },
      { nombre: "Nutrición Comunitaria", id: "nutricom", prereq: ["educacion", "gestion"] },
      { nombre: "Seguridad y Sustentabilidad Agroalimentaria", id: "seguridad", prereq: ["educacion", "calidad"] },
      { nombre: "Gestión y Administración en Establecimiento Alimentaria", id: "admin", prereq: ["plan", "calidad"] },
      { nombre: "Seminario de Investigación I", id: "semi1", prereq: ["invest", "formu"] },
      { nombre: "Inglés VI", id: "ingles6", prereq: ["ingles5"] }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Intervención Clínica", id: "intercl", prereq: ["dieto", "dietoped"] },
      { nombre: "Intervencion Comunitaria", id: "intercom", prereq: ["nutricom", "seguridad"] },
      { nombre: "Alimentación Institucional", id: "aliinsti", prereq: ["seguridad", "admin"] },
      { nombre: "Emprendimiento e Inovación en Alimentación y Nutrición", id: "empren", prereq: ["formu", "seguridad"] },
      { nombre: "Seminario de Investigación II", id: "semi2", prereq: ["semi1"] }
    ]
  },
  {
    semestre: "9°/10° Semestre",
    ramos: [
      { nombre: "Internado Clínico", id: "internado", prereq: ["intercl", "intercom", "aliinsti", "empren", "semi2", "educacion", "calidad", "gestion", "invest", "formu", "dietoped", "nutricom", "seguridad", "admin", "semi1", "fisio", "evalu", "tecni", "analisis", "salud", "farmaco", "fisiopato", "diet", "conducta", "plan", "bioest", "dieto", "psico", "agentes", "sys3", "sys1", "antro", "bioquemnutri", "sys2", "ciencia2", "bioquem", "ingles1", "ingles2", "ingles3", "ingles4", "ingles5", "ingles6", "anato", "etica", "intro", "biogen", "matematica", "quimica", "ciencia1"] },
      { nombre: "Internado en Atención Primaria de Salud (APS)", id: "internadoaps", prereq: ["intercl", "intercom", "aliinsti", "empren", "semi2", "educacion", "calidad", "gestion", "invest", "formu", "dietoped", "nutricom", "seguridad", "admin", "semi1", "fisio", "evalu", "tecni", "analisis", "salud", "farmaco", "fisiopato", "diet", "conducta", "plan", "bioest", "dieto", "psico", "agentes", "sys3", "sys1", "antro", "bioquemnutri", "sys2", "ciencia2", "bioquem", "ingles1", "ingles2", "ingles3", "ingles4", "ingles5", "ingles6", "anato", "etica", "intro", "biogen", "matematica", "quimica", "ciencia1"] },
      { nombre: "Internado en Servicios de Alimentación y Nutrición", id: "internadoserv", prereq: ["intercl", "intercom", "aliinsti", "empren", "semi2", "educacion", "calidad", "gestion", "invest", "formu", "dietoped", "nutricom", "seguridad", "admin", "semi1", "fisio", "evalu", "tecni", "analisis", "salud", "farmaco", "fisiopato", "diet", "conducta", "plan", "bioest", "dieto", "psico", "agentes", "sys3", "sys1", "antro", "bioquemnutri", "sys2", "ciencia2", "bioquem", "ingles1", "ingles2", "ingles3", "ingles4", "ingles5", "ingles6", "anato", "etica", "intro", "biogen", "matematica", "quimica", "ciencia1"] }
    ]
  }
];

const grid = document.querySelector('.grid');
const state = JSON.parse(localStorage.getItem('aprobadas')) || {};

function createGrid() {
  data.forEach(sem => {
    const semDiv = document.createElement('div');
    semDiv.className = 'semester';
    const title = document.createElement('h2');
    title.textContent = sem.semestre;
    semDiv.appendChild(title);

    sem.ramos.forEach(ramo => {
      const div = document.createElement('div');
      div.textContent = ramo.nombre;
      div.className = 'subject';
      div.dataset.id = ramo.id;
      if (state[ramo.id]) div.classList.add('completed');
      else if (ramo.prereq) div.classList.add('locked');
      semDiv.appendChild(div);
    });

    grid.appendChild(semDiv);
  });
}

function updateSubjects() {
  document.querySelectorAll('.subject').forEach(el => {
    const id = el.dataset.id;
    const ramo = findSubjectById(id);
    if (el.classList.contains('completed')) return;
    if (!ramo.prereq || ramo.prereq.every(r => state[r])) {
      el.classList.remove('locked');
    } else {
      el.classList.add('locked');
    }
  });
}

function findSubjectById(id) {
  for (let sem of data) {
    for (let ramo of sem.ramos) {
      if (ramo.id === id) return ramo;
    }
  }
  return null;
}

grid.addEventListener('click', e => {
  if (e.target.classList.contains('subject') && !e.target.classList.contains('locked')) {
    const id = e.target.dataset.id;
    if (state[id]) {
      delete state[id];
      e.target.classList.remove('completed');
    } else {
      state[id] = true;
      e.target.classList.add('completed');
    }
    localStorage.setItem('aprobadas', JSON.stringify(state));
    updateSubjects();
  }
});

createGrid();
updateSubjects();
