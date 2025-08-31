function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function searchTools() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const toolCards = document.querySelectorAll('.tool-card');
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        let hasVisibleTools = false;
        const toolsInCategory = category.querySelectorAll('.tool-card');
        
        toolsInCategory.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                hasVisibleTools = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (hasVisibleTools || searchTerm === '') {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
    
    if (searchTerm === '') {
        toolCards.forEach(card => card.style.display = 'block');
        categories.forEach(category => category.style.display = 'block');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'linear-gradient(90deg, rgba(255,0,0,0.95), rgba(139,0,0,0.95))';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #ff0000, #8b0000)';
            navbar.style.backdropFilter = 'none';
        }
    });
});