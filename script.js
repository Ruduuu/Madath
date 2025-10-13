const qa = {
    "what is your name": "I am a simple chatbot.",
    "how are you": "I am doing well, thanks!",
    "what is javascript": "JavaScript is a programming language used for web development.",
    "who created you": "I was created by a developer like you!",
    "what is html": "HTML stands for HyperText Markup Language.",
    "what is css": "CSS stands for Cascading Style Sheets.",
    "what is a chatbot": "A chatbot is a software application used to conduct online chat conversations.",
    "how can i learn programming": "You can start by learning the basics of HTML, CSS, and JavaScript.",
    "what is web development": "Web development is the work involved in developing a website for the Internet.",
    "what is frontend": "Frontend refers to the part of a website that users interact with directly.",
    "what is backend": "Backend refers to the server-side of a website, which handles data and business logic.",
    "what is api": "API stands for Application Programming Interface, which allows different software applications to communicate with each other.",
    "what is database": "A database is an organized collection of data, generally stored and accessed electronically.",
    "what is git": "Git is a distributed version control system for tracking changes in source code during software development.",
    "what is github": "GitHub is a web-based platform used for version control and collaborative software development using Git.",
    "what is nodejs": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "what is react": "React is a JavaScript library for building user interfaces.",
    "what is angular": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    "what is vue": "Vue.js is a progressive JavaScript framework for building user interfaces.",
    "what is bootstrap": "Bootstrap is a popular front-end framework for developing responsive and mobile-first websites.",
};

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim().toLowerCase();
    if (!msg) return;

    appendMessage(msg, 'user');

    let response = qa[msg];
    if (!response) {
        response = "Sorry, I couldn't find.";
    }

    appendMessage(response, 'bot');
    input.value = '';
    input.focus();
}

function appendMessage(text, sender) {
    const messages = document.getElementById('messages');
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}