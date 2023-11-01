// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scroll({
            top: targetSection.offsetTop - 100,  // Adjust the offset for the header
            behavior: 'smooth'
        });
    });
});

// Add your projects dynamically to the Portfolio section
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1.",
        link: "https://github.com/Manish61/project1"
    },
    {
        title: "Project 2",
        description: "Description of Project 2.",
        link: "https://github.com/Manish61/project2"
    },
    // Add more projects as needed
];

const portfolioSection = document.getElementById("portfolio");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "GitHub Repository";
    link.target = "_blank";

    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(link);

    portfolioSection.appendChild(projectDiv);
});
