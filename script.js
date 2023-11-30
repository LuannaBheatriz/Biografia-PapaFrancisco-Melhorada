document.addEventListener("DOMContentLoaded", function () {
    const pageName = getPageName();

    if (pageName === "index.html") {
        setInterval(changeTitleColor, 2000);
        const themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", toggleTheme);
        }
    } else {
        const pageTitle = document.querySelector(".description h3");
        if (pageTitle) {
            pageTitle.addEventListener("click", function () {
                const page = pageTitle.getAttribute("data-page");
                navigate(page);
            });
        }
    }

    const buttons = document.querySelectorAll("#menu button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const page = button.getAttribute("data-page");
            navigate(page);
        });
    });

    function changeTitleColor() {
        const title = document.querySelector(".page-title");
        if (title) {
            const randomColor = getRandomColor();
            title.style.color = randomColor;
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function navigate(page) {
        window.location.href = page;
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
    }

    function getPageName() {
        const pathArray = window.location.pathname.split("/");
        return pathArray[pathArray.length - 1];
    }
});
