(function() {
    const hamburger = document.getElementById('pfHamburgerBtn');
    const navLinks = document.getElementById('pfNavLinks');
    const overlay = document.getElementById('pfOverlay');
    
    function closeMenu() {
      if(navLinks) navLinks.classList.remove('active');
      if(overlay) overlay.classList.remove('active');
      document.body.style.overflow = ''; 
    }
    
    function openMenu() {
      if(navLinks) navLinks.classList.add('active');
      if(overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; 
    }
    
    if(hamburger && navLinks) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if(navLinks.classList.contains('active')) {
          closeMenu();
        } else {
          openMenu();
        }
      });
      
      if(overlay) {
        overlay.addEventListener('click', closeMenu);
      }
      
      const allLinks = navLinks.querySelectorAll('a');
      allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if(href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetEl = document.getElementById(targetId);
            if(targetEl) {
              closeMenu();
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else {
            closeMenu();
          }
        });
      });
    }

    const faqItems = document.querySelectorAll('.pf-faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.pf-faq-question');
      if(!questionBtn) return;
      
      questionBtn.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if(targetId === "#" || !targetId) return;
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if(navLinks && navLinks.classList.contains('active')) closeMenu();
        }
      });
    });

    const logo = document.querySelector('.pf-logo');
    if(logo) {
      logo.style.transform = 'none';
    }
    console.log("PulseFit — Updates Applied.");
  })();