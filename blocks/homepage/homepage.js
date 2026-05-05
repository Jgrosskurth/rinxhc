import { RINX, GAMES } from '../../scripts/scripts.js';

function recentResults() {
  const recent = GAMES.slice(-5).reverse();
  return `<div class="hp-results">
    <h2>Recent Results</h2>
    <div class="hp-results-list">
      ${recent.map(g => `
        <div class="hp-result hp-result--${g.result.toLowerCase()}">
          <span class="hp-result-date">${g.date}</span>
          <span class="hp-result-opp">${g.opp}</span>
          <span class="hp-result-score">${g.score}</span>
          <span class="hp-result-badge hp-result-badge--${g.result.toLowerCase()}">${g.result}</span>
        </div>`).join('')}
    </div>
  </div>`;
}

function recordStrip() {
  const { w, l, t, gf, ga } = RINX.record;
  return `<div class="hp-record">
    <div class="hp-record-stat"><span class="hp-record-val">${w}</span><span class="hp-record-lbl">W</span></div>
    <div class="hp-record-stat"><span class="hp-record-val">${l}</span><span class="hp-record-lbl">L</span></div>
    <div class="hp-record-stat"><span class="hp-record-val">${t}</span><span class="hp-record-lbl">T</span></div>
    <div class="hp-record-stat"><span class="hp-record-val">${gf}</span><span class="hp-record-lbl">GF</span></div>
    <div class="hp-record-stat"><span class="hp-record-val">${ga}</span><span class="hp-record-lbl">GA</span></div>
  </div>`;
}

export default function decorate(block) {
  document.title = 'Rinx Hockey Club - Official Website';
  block.innerHTML = `
    ${recordStrip()}
    ${recentResults()}
    <div class="hp-links">
      <a class="hp-btn" href="/roster">Roster</a>
      <a class="hp-btn" href="/schedule">Schedule</a>
      <a class="hp-btn" href="/stats">Stats</a>
      <a class="hp-btn hp-btn--shop" href="${RINX.shopUrl}" target="_blank">Shop</a>
    </div>
  `;
}
