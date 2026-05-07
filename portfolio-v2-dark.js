// Certificate Modal JavaScript - Add to portfolio-v2-dark.html
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeModal');
  const certButtons = document.querySelectorAll('.view-cert');
  
  if (!modal || !closeBtn || certButtons.length === 0) {
    console.log('Modal elements not found - check HTML structure');
    return;
  }

  certButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('View cert clicked:', this.getAttribute('data-cert'));
      const certPath = this.getAttribute('data-cert');
      const frame = document.getElementById('certFrame');
      if (frame) {
        frame.src = certPath;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.getElementById('certFrame').src = '';
    document.body.style.overflow = '';
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.getElementById('certFrame').src = '';
      document.body.style.overflow = '';
    }
  });

  // ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.getElementById('certFrame').src = '';
      document.body.style.overflow = '';
    }
  });
  
  console.log('Certificate modal JS loaded successfully');
});
