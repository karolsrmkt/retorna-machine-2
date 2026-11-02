/* ===================================================================
   PROJETO VIDA NA ÁGUA — RETORNA MACHINE 2.0
   Zero-dependency Inline SVG Icons Utility — Família Vetorial Unificada
   Estilo consistente: Traço 2px, cantos arredondados, mesma proporção
   =================================================================== */

export const icons = {
  // Ícone especial: Lixeira de reciclagem com estrutura vazada/perfurada em tela
  recycleBinMesh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Borda superior da lixeira -->
    <path d="M3 6h18"/>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <!-- Corpo da lixeira cônico -->
    <path d="m19 6-1.5 14a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2L5 6"/>
    <!-- Grade vazada/perfurada (trama em tela de separação) -->
    <line x1="8.5" y1="10" x2="15.5" y2="10" stroke-dasharray="1 2"/>
    <line x1="9" y1="14" x2="15" y2="14" stroke-dasharray="1 2"/>
    <line x1="9.5" y1="18" x2="14.5" y2="18" stroke-dasharray="1 2"/>
    <line x1="10" y1="8" x2="10" y2="20" stroke-width="1.5"/>
    <line x1="12" y1="8" x2="12" y2="20" stroke-width="1.5"/>
    <line x1="14" y1="8" x2="14" y2="20" stroke-width="1.5"/>
  </svg>`,

  // Balão ODS 14: Lixeira estilizada com o símbolo convencional de reciclagem (3 setas em ciclo triangular)
  recycleBinSymbol: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 6h16"/>
    <path d="M9 6V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v2"/>
    <path d="M5.5 6l1.2 13.2A2 2 0 0 0 8.7 21h6.6a2 2 0 0 0 2-1.8L18.5 6"/>
    <path d="m10.5 10.5 1.5-1.5 1.5 1.5"/>
    <path d="M12 9v3"/>
    <path d="m14.5 14.5-1 1.5-1-1.5"/>
    <path d="M13.5 16h-3"/>
    <path d="m9.5 13.5.5-1.5 1.5.5"/>
  </svg>`,

  // Etapa 2: Câmera com IA / Scanner de Reconhecimento
  cameraScan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 8V5a1 1 0 0 1 1-1h3"/>
    <path d="M16 4h3a1 1 0 0 1 1 1v3"/>
    <path d="M20 16v3a1 1 0 0 1-1 1h-3"/>
    <path d="M8 20H5a1 1 0 0 1-1-1v-3"/>
    <circle cx="12" cy="12" r="3"/>
    <line x1="12" y1="9" x2="12" y2="7"/>
    <line x1="12" y1="17" x2="12" y2="15"/>
  </svg>`,

  // Etapa 3: Depósito & Validação no bocal
  depositSlot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3"/>
    <circle cx="12" cy="12" r="4"/>
    <path d="m9.5 11.5 2.5 2.5 2.5-2.5"/>
    <line x1="12" y1="8" x2="12" y2="14"/>
  </svg>`,

  // Etapa 4: Crédito de Tricoins / Sistema Tricoins (Moeda com brilho oficial)
  coinSparkle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="14" r="8"/>
    <circle cx="10" cy="14" r="5" stroke-dasharray="2 2"/>
    <circle cx="10" cy="14" r="1.5" fill="currentColor"/>
    <path d="M19 2 C19 3.8 20.2 5 22 5 C20.2 5 19 6.2 19 8 C19 6.2 17.8 5 16 5 C17.8 5 19 3.8 19 2 Z" fill="currentColor" stroke="none"/>
  </svg>`,

  tricoinReward: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="10" cy="14" r="8"/>
    <circle cx="10" cy="14" r="5" stroke-dasharray="2 2"/>
    <circle cx="10" cy="14" r="1.5" fill="currentColor"/>
    <path d="M19 2 C19 3.8 20.2 5 22 5 C20.2 5 19 6.2 19 8 C19 6.2 17.8 5 16 5 C17.8 5 19 3.8 19 2 Z" fill="currentColor" stroke="none"/>
  </svg>`,

  // Etapa 5: Destinação Limpa (Seta apontando para a direita com sinal de confirmação integrado)
  arrowRightCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 8h10.5V4.5l9 7.5-9 7.5V16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
    <polyline points="5.5 12 7.8 14.2 11.5 9.8"/>
  </svg>`,

  reverseLogistics: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 8h10.5V4.5l9 7.5-9 7.5V16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
    <polyline points="5.5 12 7.8 14.2 11.5 9.8"/>
  </svg>`,

  // Bilhete Único SP / Cartão retangular sem triângulos
  creditCard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2.5"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
    <line x1="6" y1="15" x2="10" y2="15"/>
  </svg>`,

  // Regras de triagem / conformidade
  rulesCheck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="m9 15 2 2 4-4"/>
  </svg>`,

  // ===================================================================
  // MATERIAIS ACEITOS — Família Vetorial Uniforme (Traço 2px, 24x24)
  // ===================================================================
  
  // Plástico PET (Garrafa PET com tampa e linhas características)
  matPet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 2h6v2H9z"/>
    <path d="M10 4v2l-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8l-2-2V4"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke-dasharray="1 2"/>
    <line x1="8" y1="16" x2="16" y2="16" stroke-dasharray="1 2"/>
  </svg>`,

  // Alumínio (Lata de bebida com anel e ressalto)
  matAlum: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="7" y="3" width="10" height="18" rx="2.5"/>
    <ellipse cx="12" cy="5" rx="3.5" ry="1.2"/>
    <line x1="7" y1="8" x2="17" y2="8"/>
    <circle cx="12" cy="13" r="1.5"/>
  </svg>`,

  // Aço (Lata de conserva de aço com frisos horizontais)
  matSteel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="4" width="12" height="16" rx="2"/>
    <line x1="6" y1="8" x2="18" y2="8"/>
    <line x1="6" y1="12" x2="18" y2="12"/>
    <line x1="6" y1="16" x2="18" y2="16"/>
  </svg>`,

  // Vidro (Garrafa de vidro com gargalo esguio e base sólida)
  matGlass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 2h4v3h-4z"/>
    <path d="M10 5v4l-3 4v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7l-3-4V5"/>
    <ellipse cx="12" cy="16" rx="2.5" ry="1.2"/>
  </svg>`,

  // Plásticos PP e PE (Frascos e bombonas com alça e tampa)
  matPppe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 2h4v3H9z"/>
    <path d="M9 5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <path d="M17 9v4h-2"/>
    <line x1="8" y1="16" x2="14" y2="16"/>
  </svg>`,

  // Canudos compatíveis (Canudo reutilizável/reciclável com dobra sanfonada)
  matStraw: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 21 16 7"/>
    <path d="M16 7l3-3"/>
    <path d="M14 6l1.5-1.5"/>
    <path d="M15 7.5 16.5 6"/>
    <path d="M16 9l1.5-1.5"/>
  </svg>`,

  // ===================================================================
  // ÍCONES DE SUPORTE
  // ===================================================================
  recycle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.2a1.8 1.8 0 0 0 1.571-.88 1.785 1.785 0 0 0 .004-1.785L17.5 11.5"/><circle cx="12" cy="12" r="3"/><path d="m14 7 3-3-3-3"/><path d="M9.5 4.5 7.196 9.5"/></svg>`,
  sun: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  camera: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  eye360: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"/><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 1 0 10 10"/></svg>`,
  display: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  anchor: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" x2="12" y1="22" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevronDown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUpRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  sparkles: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  alertTriangle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  wave: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`
};

export function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.getAttribute('data-icon');
    if (icons[iconName]) {
      el.innerHTML = icons[iconName];
    }
  });
}
