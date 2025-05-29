document.addEventListener('DOMContentLoaded', () => {
    console.log('Página "Feira de Produtos Coloniais" - Edição Melhorada carregada!');

    // Animação sutil ao passar o mouse sobre os ícones de produto
    const productIcons = document.querySelectorAll('.product-icon');
    productIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            // Um pequeno "pulso" ou rotação adicional ao passar o mouse
            icon.style.transform += ' scale(1.05)'; // Adiciona um zoom
            icon.style.filter = 'drop-shadow(5px 5px 8px rgba(0,0,0,0.3))'; // Sombra mais forte
        });
        icon.addEventListener('mouseout', () => {
            // Retorna ao estado original
            icon.style.transform = icon.style.transform.replace(' scale(1.05)', '');
            icon.style.filter = 'drop-shadow(3px 3px 5px rgba(0,0,0,0.2));';
        });
    });

    // Interatividade com o número de telefone (simulando clique)
    const phoneNumber = document.querySelector('.phone-number');
    if (phoneNumber) {
        phoneNumber.addEventListener('click', () => {
            const number = phoneNumber.getAttribute('data-number');
            alert(`Você pode ligar ou enviar mensagem para: ${number}\n(Este é um número de exemplo para demonstração!)`);
        });
    }

    // Efeito de "rabisco" nos textos ao passar o mouse, para dar um toque mais orgânico
    const textElements = document.querySelectorAll('p, li, .header-subtitle, .section-title, .contact-prompt, .icon-label, .icon-label-bottom');

    textElements.forEach(element => {
        let originalColor = element.style.color || window.getComputedStyle(element).color;
        let originalTransform = element.style.transform || window.getComputedStyle(element).transform;

        element.addEventListener('mouseover', () => {
            element.style.color = '#555'; // Um pouco mais escuro
            // element.style.textShadow = '1px 1px 2px rgba(0,0,0,0.1)'; // Uma sombra sutil
            // Para não sobrescrever transform existente, podemos ajustar
            if (!element.classList.contains('no-hover-effect')) { // Adicione 'no-hover-effect' em elementos que não devem ter isso
                 element.style.transform = originalTransform + ' scale(1.005)'; // Leve aumento
            }
        });

        element.addEventListener('mouseout', () => {
            element.style.color = originalColor;
            // element.style.textShadow = 'none';
             if (!element.classList.contains('no-hover-effect')) {
                element.style.transform = originalTransform;
            }
        });
    });
});