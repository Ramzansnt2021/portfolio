// header section
// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')

  // Toggle menu icon
  const icon = mobileMenuButton.querySelector('i')
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-times')
  } else {
    icon.classList.remove('fa-times')
    icon.classList.add('fa-bars')
  }
})

// Function to toggle mobile submenus
function toggleMobileSubmenu(menuId) {
  const menu = document.getElementById(menuId)
  menu.classList.toggle('active')

  // Toggle chevron icon
  const chevron = menu.previousElementSibling.querySelector('i')
  if (chevron.classList.contains('fa-chevron-down')) {
    chevron.classList.remove('fa-chevron-down')
    chevron.classList.add('fa-chevron-up')
  } else {
    chevron.classList.remove('fa-chevron-up')
    chevron.classList.add('fa-chevron-down')
  }

  // Prevent default link behavior
  event.preventDefault()
}

// Close mega menus when clicking outside (desktop)
document.addEventListener('click', (e) => {
  if (window.innerWidth >= 1024) {
    const megaMenus = document.querySelectorAll('.mega-menu')
    const navItems = document.querySelectorAll('.nav-item')

    let isClickInsideMegaMenu = false

    megaMenus.forEach((menu) => {
      if (menu.contains(e.target)) {
        isClickInsideMegaMenu = true
      }
    })

    navItems.forEach((item) => {
      if (item.contains(e.target)) {
        isClickInsideMegaMenu = true
      }
    })

    if (!isClickInsideMegaMenu) {
      megaMenus.forEach((menu) => {
        menu.style.opacity = '0'
        menu.style.visibility = 'hidden'
        menu.style.transform = 'translateY(10px)'
      })
    }
  }
})
