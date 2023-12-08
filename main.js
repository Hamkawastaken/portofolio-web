function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('show');
    }

    // Smooth scroll animation and close menu
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 1, // Adjust offset as needed
                    behavior: 'smooth'
                });

                // Close the menu after clicking a menu item
                var menu = document.querySelector('.menu');
                menu.classList.remove('show');
            }
        });
    });

const filterButtons = document.querySelectorAll('.filter-btn');
const activeButton = document.querySelector('.active');

filterButtons.forEach(button => {
button.addEventListener('click', (event) => {
    activeButton.classList.remove('active');
    button.classList.add('active');
});
});

function openLinkInNewTab(button) {
        // Mengambil nilai data-link dari atribut data pada tombol
        var linkUrl = button.getAttribute('data-link');
        
        // Membuka URL dalam tab baru
        window.open(linkUrl, "_blank");
    }

    function openWhatsApp() {
        // Nomor WhatsApp Anda
        var phoneNumber = '6281213984587';
        
        // Menghasilkan link WhatsApp
        var whatsappLink = 'https://wa.me/' +6281213984587;
        
        // Membuka link WhatsApp dalam tab baru
        window.open(whatsappLink, '_blank');
    }

    function openWhatsAppLetsTalk() {
        // Nomor WhatsApp yang berbeda
        var phoneNumberLetsTalk = '6281234567890';
        
        // Menghasilkan link WhatsApp
        var whatsappLinkLetsTalk = 'https://wa.me/' +6281213984587;
        
        // Membuka link WhatsApp dalam tab baru
        window.open(whatsappLinkLetsTalk, '_blank');
    }

