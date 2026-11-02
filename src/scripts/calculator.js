/* ===================================================================
   PROJETO VIDA NA ÁGUA — RETORNA MACHINE 2.0
   Interactive Material & Tricoins Simulator
   (Embalagens Longa Vida removidas conforme diretriz 2.0)
   =================================================================== */

const materialConfig = [
  { id: 'pet', name: 'Plástico PET (Garrafas)', points: 10, defaultQty: 2 },
  { id: 'aluminio', name: 'Alumínio (Latas)', points: 15, defaultQty: 3 },
  { id: 'aco', name: 'Aço (Latas de Alimentos)', points: 10, defaultQty: 0 },
  { id: 'vidro', name: 'Vidro (Garrafas Compatíveis)', points: 5, defaultQty: 1 },
  { id: 'pppe', name: 'Plásticos PP e PE (Frascos)', points: 10, defaultQty: 0 },
  { id: 'canudos', name: 'Canudos (Compatíveis)', points: 5, defaultQty: 0 }
];

export function initCalculator() {
  const container = document.getElementById('calcRowsContainer');
  const totalPointsEl = document.getElementById('calcTotalPoints');
  const totalUnitsEl = document.getElementById('calcTotalUnits');
  const pixValEl = document.getElementById('calcPixValue');
  const bilheteValEl = document.getElementById('calcBilheteValue');
  const enelValEl = document.getElementById('calcEnelValue');

  if (!container || !totalPointsEl) return;

  const quantities = {};
  materialConfig.forEach(m => {
    quantities[m.id] = m.defaultQty;
  });

  function renderRows() {
    container.innerHTML = materialConfig.map(m => `
      <div class="calc-row">
        <div class="calc-row-info">
          <div>
            <div class="calc-row-name">${m.name}</div>
            <div style="font-size: 0.78rem; color: var(--color-primary-dark); font-weight: 600;">+${m.points} Tricoins/unidade</div>
          </div>
        </div>
        <div class="calc-controls">
          <button type="button" class="calc-btn btn-minus" data-id="${m.id}" aria-label="Diminuir quantidade de ${m.name}">−</button>
          <span class="calc-qty" id="qty-${m.id}">${quantities[m.id]}</span>
          <button type="button" class="calc-btn btn-plus" data-id="${m.id}" aria-label="Aumentar quantidade de ${m.name}">+</button>
        </div>
      </div>
    `).join('');

    // Attach listeners
    container.querySelectorAll('.btn-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (quantities[id] > 0) {
          quantities[id]--;
          updateDisplay();
        }
      });
    });

    container.querySelectorAll('.btn-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (quantities[id] < 50) {
          quantities[id]++;
          updateDisplay();
        }
      });
    });
  }

  function updateDisplay() {
    let totalPoints = 0;
    let totalUnits = 0;

    materialConfig.forEach(m => {
      const q = quantities[m.id] || 0;
      totalUnits += q;
      totalPoints += q * m.points;
      const qEl = document.getElementById(`qty-${m.id}`);
      if (qEl) qEl.textContent = q;
    });

    totalPointsEl.textContent = totalPoints.toLocaleString('pt-BR');
    if (totalUnitsEl) totalUnitsEl.textContent = `${totalUnits} ite${totalUnits === 1 ? 'm' : 'ns'} recicláve${totalUnits === 1 ? 'l' : 'is'}`;

    // Conversões oficiais Triciclo
    // Pix: R$ 1,00 a cada 150 Tricoins
    const pixReais = (totalPoints / 150) * 1.00;
    // Bilhete Único SP: R$ 0,35 a cada 100 Tricoins
    const bilheteReais = (totalPoints / 100) * 0.35;
    // EcoEnel: R$ 0,27 a cada 100 Tricoins
    const enelReais = (totalPoints / 100) * 0.27;

    if (pixValEl) pixValEl.textContent = `R$ ${pixReais.toFixed(2).replace('.', ',')}`;
    if (bilheteValEl) bilheteValEl.textContent = `R$ ${bilheteReais.toFixed(2).replace('.', ',')}`;
    if (enelValEl) enelValEl.textContent = `R$ ${enelReais.toFixed(2).replace('.', ',')}`;
  }

  renderRows();
  updateDisplay();
}
