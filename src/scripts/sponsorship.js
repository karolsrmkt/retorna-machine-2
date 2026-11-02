/* ===================================================================
   PROJETO VIDA NA ÁGUA — RETORNA MACHINE 2.0
   Sponsorship Simulator & Demonstration Partnership Modal
   =================================================================== */

export function initSponsorship() {
  const modal = document.getElementById('partnerModal');
  const closeBtn = document.getElementById('closePartnerModal');
  const form = document.getElementById('partnerDemoForm');
  const successBox = document.getElementById('modalSuccessBox');
  const tierSelect = document.getElementById('partnerTierSelect');
  const openButtons = document.querySelectorAll('[data-open-partner-modal]');

  if (!modal) return;

  function openModal(defaultTier = '') {
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    if (tierSelect && defaultTier) {
      tierSelect.value = defaultTier;
    }
    if (successBox) successBox.style.display = 'none';
    if (form) form.style.display = 'block';

    const firstInput = modal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tier = btn.getAttribute('data-tier') || '';
      openModal(tier);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('partnerName')?.value.trim();
      const email = document.getElementById('partnerEmail')?.value.trim();
      const company = document.getElementById('partnerCompany')?.value.trim();
      const tier = tierSelect?.value || 'Geral';

      if (!name || !email) {
        alert('Por favor, preencha os campos obrigatórios (Nome e E-mail).');
        return;
      }

      // Record demonstration in local storage for demonstration audit
      const submission = {
        name,
        email,
        company,
        tier,
        timestamp: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('retorna_partner_simulations') || '[]');
      existing.push(submission);
      localStorage.setItem('retorna_partner_simulations', JSON.stringify(existing));

      // Display friendly demo feedback
      form.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        const lead = successBox.querySelector('.demo-success-lead');
        if (lead) {
          lead.textContent = `Obrigado pelo interesse, ${name}! A cota "${tier}" foi simulada com sucesso.`;
        }
      }
    });
  }

  const resetBtn = document.getElementById('modalResetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (form) {
        form.reset();
        form.style.display = 'block';
      }
      if (successBox) successBox.style.display = 'none';
    });
  }
}
