// ============================================================
// HIERARQUIA - EDITE OS DADOS ABAIXO PARA COLOCAR SUA EQUIPE
// ============================================================

const hierarchyData = [
  {
    rank: "Comandante Geral",
    description: "Comando Geral da Corporação",
    icon: "⭐",
    members: [
      { name: "Michael Haller", role: "Comandante Geral" },
      { name: "Exemplo 02", role: "Comandante Geral" }
    ]
  },
  {
    rank: "Inspetor de Agrupamento",
    description: "Coordenação e supervisão",
    icon: "🛡️",
    members: [
      { name: "Willian Vasques", role: "Coordenador do CAF" }
    ]
  },
  {
    rank: "Inspetor",
    description: "Inspetoria",
    icon: "🔰",
    members: [
      { name: "Exemplo 01", role: "Inspetor" },
      { name: "Exemplo 02", role: "Inspetor" }
    ]
  },
  {
    rank: "3ª Classe",
    description: "Efetivo operacional",
    icon: "👮",
    members: [
      { name: "Pedro Alvarenga", role: "3ª Classe" },
      { name: "Gustavo Henrique", role: "3ª Classe" }
    ]
  },
  {
    rank: "Aluno",
    description: "Formação",
    icon: "🎓",
    members: [
      { name: "Novo integrante", role: "Aluno" }
    ]
  }
];

// ============================================================

const hierarchy = document.getElementById("hierarchy");
const searchInput = document.getElementById("searchInput");
const rankFilter = document.getElementById("rankFilter");
const emptyState = document.getElementById("emptyState");
const totalMembers = document.getElementById("totalMembers");
const totalRanks = document.getElementById("totalRanks");
const year = document.getElementById("year");

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

function renderFilter() {
  rankFilter.innerHTML = '<option value="all">Todas as patentes</option>';

  hierarchyData.forEach(group => {
    const option = document.createElement("option");
    option.value = group.rank;
    option.textContent = group.rank;
    rankFilter.appendChild(option);
  });
}

function render() {
  const search = searchInput.value.trim().toLowerCase();
  const selectedRank = rankFilter.value;

  hierarchy.innerHTML = "";
  let visibleMembers = 0;
  let visibleRanks = 0;

  hierarchyData.forEach(group => {
    if (selectedRank !== "all" && selectedRank !== group.rank) return;

    const members = group.members.filter(member => {
      return (
        member.name.toLowerCase().includes(search) ||
        member.role.toLowerCase().includes(search) ||
        group.rank.toLowerCase().includes(search)
      );
    });

    if (members.length === 0) return;

    visibleRanks++;
    visibleMembers += members.length;

    const card = document.createElement("article");
    card.className = "rank-card";

    card.innerHTML = `
      <div class="rank-header">
        <div class="rank-title">
          <div class="rank-icon">${group.icon}</div>
          <div>
            <h3>${group.rank}</h3>
            <small>${group.description}</small>
          </div>
        </div>
        <div class="count">${members.length} integrante${members.length !== 1 ? "s" : ""}</div>
      </div>
      <div class="members">
        ${members.map(member => `
          <div class="member">
            <div class="avatar">${initials(member.name)}</div>
            <div>
              <strong>${member.name}</strong>
              <span>${member.role}</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    hierarchy.appendChild(card);
  });

  totalMembers.textContent = visibleMembers;
  totalRanks.textContent = visibleRanks;
  emptyState.classList.toggle("hidden", visibleRanks !== 0);
}

searchInput.addEventListener("input", render);
rankFilter.addEventListener("change", render);
year.textContent = new Date().getFullYear();

renderFilter();
render();
