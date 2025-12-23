
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');
    const backdrop = document.getElementById('menu-backdrop');

    function toggleMenu(isOpen) {
        if (isOpen) {
            sideMenu.classList.remove('translate-x-full');
            backdrop.classList.remove('hidden');
            // Prevent scrolling background
            document.body.style.overflow = 'hidden'; 
        } else {
            sideMenu.classList.add('translate-x-full');
            backdrop.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    openBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    backdrop.addEventListener('click', () => toggleMenu(false)); // Close if user clicks the blurred area
