document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .tile').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 1.0s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    });
});

// Inline style injection for visibility class
const style = document.createElement('style');
style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
