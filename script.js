// script.js

// Predefined question–answer pairs
const qaPairs = {
    "what is html": "HTML stands for HyperText Markup Language. It structures web pages using elements like headings, paragraphs, links, and images.",
    "what is css": "CSS stands for Cascading Style Sheets. It styles the visual layout of web pages — colors, fonts, spacing, and animations.",
    "what is javascript": "JavaScript is a scripting language used to make websites interactive — like dropdowns, sliders, and chatbots!",
    "what is python": "Python is a powerful high-level programming language great for AI, data science, and backend development.",
    "what is c language": "C is a foundational programming language used for system software, operating systems, and embedded devices.",
    "what is c++": "C++ is an extension of C that adds object-oriented programming features — widely used in game and software development.",
    "what is java": "Java is a platform-independent, object-oriented programming language commonly used for Android apps and enterprise software.",
    "what is php": "PHP is a server-side scripting language designed for creating dynamic web pages and web applications.",
    "what is sql": "SQL (Structured Query Language) is used to store, manipulate, and retrieve data in databases.",
    "what is react": "React is a JavaScript library by Facebook for building fast and dynamic user interfaces using components.",
    "what is nodejs": "Node.js allows you to run JavaScript on the server side for backend development.",
    "what is bootstrap": "Bootstrap is a CSS framework that helps you build responsive, mobile-first websites quickly.",
    "what is git": "Git is a version control system used to track code changes and collaborate with others in software development.",
    "what is github": "GitHub is a platform for hosting Git repositories and collaborating on coding projects.",
    "what is api": "API stands for Application Programming Interface — it lets software systems communicate with each other.",
    "what is json": "JSON stands for JavaScript Object Notation — it’s a lightweight format for data exchange between systems.",
    "what is xml": "XML stands for eXtensible Markup Language — it structures and stores data in a readable format.",
    "what is django": "Django is a high-level Python web framework that simplifies backend web development.",
    "what is flask": "Flask is a lightweight Python framework for building simple and scalable web applications.",
    "what is typescript": "TypeScript is a superset of JavaScript that adds static typing for fewer bugs and better code structure.",
    "what is mongodb": "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
    "what is mysql": "MySQL is a popular open-source relational database management system.",
    "what is full stack": "Full Stack means working on both the front end (HTML, CSS, JS) and back end (databases, servers) of a web app.",
    "what is frontend": "Frontend development focuses on building the user interface — what users see and interact with in a browser.",
    "what is backend": "Backend development handles server-side logic, databases, and APIs that power a web application."
};

const form = document.getElementById('chatbot');
const input = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

// Add message to chat
function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });
}

// Simulate typing
function showTyping() {
    const typing = document.createElement('div');
    typing.classList.add('message', 'bot', 'typing');
    typing.textContent = "...";
    chatBox.appendChild(typing);
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });
    return typing;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userText = input.value.trim();
    if (userText === "") return;

    // Add user message
    addMessage(userText, 'user');
    input.value = '';

    // Show typing animation
    const typing = showTyping();

    // Generate bot reply
    setTimeout(() => {
        typing.remove(); // remove typing message
        const response = qaPairs[userText.toLowerCase()] ||
            "Sorry, I don’t have an answer for that. Try asking about programming languages!";
        addMessage(response, 'bot');
    }, 1000);

});
document.addEventListener("DOMContentLoaded", function() {
    const bg1 = document.querySelector('.bg1');
    const bg2 = document.querySelector('.bg2');

    let showingBg1 = true;
    const gifDuration = 5000; // 8 seconds per GIF (adjust as needed)

    // Start with first GIF visible
    bg1.style.opacity = 1;

    setInterval(() => {
        if (showingBg1) {
            bg1.style.opacity = 0;
            bg2.style.opacity = 1;
        } else {
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
        }
        showingBg1 = !showingBg1;
    }, gifDuration);
});
