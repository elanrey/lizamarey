const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Modal for WhatsApp QR
document.querySelectorAll('footer a[href*="api.whatsapp.com"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const isMobile = /Mobi|Android|iP(hone|ad|od)|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = 'https://wa.me/5651413823';
        } else {
            const modal = document.getElementById('qr-modal');
            modal.style.display = 'flex';
            // Load QR static image
            document.getElementById('qrcode').innerHTML = '<img src="img/qr.png" alt="QR WhatsApp" style="max-width: 200px;">';
        }
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('qr-modal');
    modal.style.display = 'none';
    // Clear QR
    const qr = document.getElementById('qrcode');
    qr.innerHTML = '';
});
