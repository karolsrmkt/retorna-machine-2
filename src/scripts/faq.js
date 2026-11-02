/* ===================================================================
   PROJETO VIDA NA ÁGUA — RETORNA MACHINE 2.0
   Accessible FAQ Accordion Component
   =================================================================== */

export function initFAQ() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach((item, index) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    if (!trigger || !content) return;

    const id = `faq-content-${index}`;
    trigger.setAttribute('aria-controls', id);
    trigger.setAttribute('aria-expanded', 'false');
    content.setAttribute('id', id);
    content.setAttribute('role', 'region');
    content.setAttribute('aria-hidden', 'true');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Optional: close other items for clean single-view
      items.forEach(other => {
        if (other !== item && other.classList.contains('is-open')) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.accordion-trigger');
          const otherContent = other.querySelector('.accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.setAttribute('aria-hidden', 'true');
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    });

    // Keyboard support
    trigger.addEventListener('keydown', (e) => {
      let targetTrigger = null;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextItem = items[index + 1] || items[0];
        targetTrigger = nextItem.querySelector('.accordion-trigger');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevItem = items[index - 1] || items[items.length - 1];
        targetTrigger = prevItem.querySelector('.accordion-trigger');
      }

      if (targetTrigger) targetTrigger.focus();
    });
  });
}
