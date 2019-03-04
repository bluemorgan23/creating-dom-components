const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

const container = document.querySelector("#container");
// container.innerHTML = "<div class='student'><h1>Alejandro Font</h1><section>Day cohort 27</section><aside>Wore pants that were too short for his legs.Was an incredible friend to his teammates.</aside></div>";

// const createStudentComponent = (name, subject, info, className) => {
//     return  `
//     <div class="student">
//         <h1 class="xx-large ${className}">${name}</h1>
//         <section class="bordered dashed section--padded">${subject}</section>
//         <aside class="pushRight">${info}</aside>
//     </div>
//     `;
// }

//Functions that build sub-components (h1, section, aside) of the larger student component 

const h1 = (studentObj) => {
    if (studentObj.score >= 60) {
        return `<h1 class="xx-large passing">${studentObj.name}</h1>`;
    } else {
        return `<h1 class="xx-large failing">${studentObj.name}</h1>`;
    }
}
const section = (studentObj) => {
    return `<section class="bordered dashed section--padded">${studentObj.subject}</section>`;
}

const aside = (studentObj) => {
    return `<aside class="pushRight">${studentObj.info}</aside>`
}

const createStudentComponent = (studentObj) => `
    <div id="student">
        ${h1(studentObj)}
        ${section(studentObj)}
        ${aside(studentObj)}
    </div>
`;


// New function that accepts the object as one parameter, changed the function to add class instead of the for loop
// const createStudentComponent = (studentObj) => {

//     if (studentObj.score >= 60) {
//         return `
//     <div class="student">
//         <h1 class="xx-large passing">${h1(studentObj)}</h1>
//         <section class="bordered dashed section--padded">${section(studentObj)}</section>
//         <aside class="pushRight">${aside(studentObj)}</aside>
//     </div>
//     `;
//     } else {
//         return `
//     <div class="student">
//         <h1 class="xx-large failing">${h1(studentObj)}</h1>
//         <section class="bordered dashed section--padded">${section(studentObj)}</section>
//         <aside class="pushRight">${aside(studentObj)}</aside>
//     </div>
//     `;
//     }
// }

for (let i = 0; i < students.length; i++) {
    container.innerHTML += createStudentComponent(students[i]);
}