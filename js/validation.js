// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contacto form');
    if (!contactForm) return; // Exit if form not found

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    const checkFormValidity = () => {
        const hasErrors = [nameError, emailError, messageError].some(span => span.textContent.trim() !== '');
        submitButton.disabled = hasErrors;
        submitButton.style.opacity = hasErrors ? '0.5' : '1';
    };

    // Clear error on focus
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', () => {
            input.nextElementSibling.textContent = '';
            checkFormValidity();
        });
    });

    // Validation on blur
    nameInput.addEventListener('blur', () => {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameError.textContent = 'El nombre debe tener al menos 2 caracteres.';
        } else {
            nameError.textContent = '';
        }
        checkFormValidity();
    });

    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Por favor ingresa un correo electrónico válido.';
        } else {
            emailError.textContent = '';
        }
        checkFormValidity();
    });

    messageInput.addEventListener('blur', () => {
        const message = messageInput.value.trim();
        if (message.length < 10) {
            messageError.textContent = 'El mensaje debe tener al menos 10 caracteres.';
        } else {
            messageError.textContent = '';
        }
        checkFormValidity();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validation logic
        let isValid = true;
        let errors = [];

        // Check name
        if (name.length < 2) {
            isValid = false;
            errors.push('El nombre debe tener al menos 2 caracteres.');
        }

        // Check email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errors.push('Por favor ingresa un correo electrónico válido.');
        }

        // Check message
        if (message.length < 10) {
            isValid = false;
            errors.push('El mensaje debe tener al menos 10 caracteres.');
        }

        if (isValid) {
            // Show toast
            showToast('Mensaje enviado exitosamente. Te contactaré pronto.');
            // Reset form
            contactForm.reset();
            // Clear errors and enable button
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            checkFormValidity();
        } else {
            // Show errors
            alert('Por favor corrige los siguientes errores:\n\n' + errors.join('\n'));
        }
    });

    // Toast function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#e6155e';
        toast.style.color = 'white';
        toast.style.padding = '16px';
        toast.style.borderRadius = '5px';
        toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        toast.style.zIndex = '1000';
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        toast.style.transition = 'transform 0.3s, opacity 0.3s';

        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        }, 10);

        // Animate out after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
});
