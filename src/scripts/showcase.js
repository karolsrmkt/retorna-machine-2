/* ===================================================================
   PROJETO VIDA NA ÁGUA — RETORNA MACHINE 2.0
   Interactive Machine Showcase & Perspective Switcher
   (Imagens frontal e traseira atualizadas com transparência alfa real)
   =================================================================== */

const viewData = {
  scenario: {
    title: 'Instalação Realista em Calçadão de Praia',
    subtitle: 'Integração visual e ambiental na orla marítima',
    image: 'images/maq-cenario-1.jpg',
    isCover: true,
    badge: 'Cenário Conceitual',
    points: [
      'Posicionamento estratégico em áreas de grande fluxo de banhistas e pedestres.',
      'Acessibilidade facilitada para moradores, comerciantes e turistas da orla.',
      'Estética costeira luminosa que convida ao engajamento voluntário da comunidade.',
      'Barreira direta de contenção para evitar que embalagens cheguem à faixa de areia e ao mar.'
    ]
  },
  front: {
    title: 'Vista Frontal: Interface & Reconhecimento Óptico',
    subtitle: 'Ponto de contato direto do usuário com o sistema de reciclagem',
    image: 'images/maq-frente-1.png',
    isCover: false,
    badge: 'Interface Principal',
    points: [
      'Bocal ergonômico de inserção de embalagens pós-consumo com iluminação indicativa.',
      'Câmera com Inteligência Artificial para auxílio no reconhecimento visual sem código de barras.',
      'Display digital intuitivo com orientações passo a passo de descarte e pontuação.',
      'Sensor de capacidade volumétrica interno e vedação contra umidade e maresia.'
    ]
  },
  back: {
    title: 'Vista Traseira: Energia Solar & Robustez Estrutural',
    subtitle: 'Engenharia preparada para enfrentar sol, chuva e maresia',
    image: 'images/maq-fundo-1.png',
    isCover: false,
    badge: 'Estrutura & Energia',
    points: [
      'Módulo de captação solar fotovoltaica para alimentação sustentável complementar.',
      'Gabinete em aço galvanizado reforçado com proteção contra oxidação marítima.',
      'Acesso seguro para manutenção técnica periódica e retirada dos resíduos.',
      'Ancoragem mecânica direta na base de concreto para estabilidade contra ventos fortes.'
    ]
  }
};

export function initShowcase() {
  const tabs = document.querySelectorAll('.showcase-tab');
  const imgEl = document.getElementById('showcaseImage');
  const titleEl = document.getElementById('showcaseTitle');
  const subtitleEl = document.getElementById('showcaseSubtitle');
  const badgeEl = document.getElementById('showcaseBadge');
  const listEl = document.getElementById('showcaseFeatures');
  const viewContainer = document.getElementById('showcaseContainer');

  if (!tabs.length || !imgEl) return;

  function setView(viewKey) {
    const data = viewData[viewKey];
    if (!data) return;

    // Update active tab state
    tabs.forEach(tab => {
      const isActive = tab.getAttribute('data-view') === viewKey;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Fade transition for image
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = data.image;
      imgEl.alt = data.title;
      if (data.isCover) {
        imgEl.classList.add('full-cover');
        viewContainer.classList.add('scenario-mode');
        viewContainer.classList.remove('transparent-mode');
      } else {
        imgEl.classList.remove('full-cover');
        viewContainer.classList.remove('scenario-mode');
        viewContainer.classList.add('transparent-mode');
      }
      imgEl.style.opacity = '1';
    }, 200);

    // Update text content
    if (titleEl) titleEl.textContent = data.title;
    if (subtitleEl) subtitleEl.textContent = data.subtitle;
    if (badgeEl) badgeEl.textContent = data.badge;

    if (listEl) {
      listEl.innerHTML = data.points.map(pt => `
        <li class="showcase-feature-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${pt}</span>
        </li>
      `).join('');
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const viewKey = tab.getAttribute('data-view');
      setView(viewKey);
    });
  });
}
