const buttons = document.querySelectorAll('.btn');
        const tooltip = document.getElementById('tooltip');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                tooltip.innerText = button.getAttribute('data-tooltip');
                const rect = button.getBoundingClientRect();
                tooltip.style.display = 'block';
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;
            });

            button.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
            });
        });