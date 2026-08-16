// ============================================================
// HIERARQUIA - EDITE OS DADOS ABAIXO PARA COLOCAR SUA EQUIPE
// ============================================================

const hierarchyData = [
  {
    rank: "Comandante Geral",
    description: "Comando Geral da Corporação",
    icon: "☫ ⁕",
    members: [
      { name: "Michael Haller", role: "Comandante Geral" }
    ]
  },
   {
    rank: "Sub Comandante Geral",
    description: "Coordenação e supervisão",
    icon: "☫",
    members: [
      { name: "Monteiro", role: "Sub Cmd. Geral" }
    ]
  },
    {
    rank: "Inspetor Superintendente",
    description: "Coordenação e supervisão",
    icon: "☫ |||||",
    members: [
      { name: "B. Lazz", role: "Cmd. SAE" },
      { name: "Teixeira", role: "Cmd. SOP"},
      { name: "Cayo", role: "Sub Cmd. SAE"},
      { name: "Machado", role: "Sub Cmd. SOP"}
    ]
  },
    {
    rank: "Inspetor Agrupamento",
    description: "Coordenação e supervisão",
    icon: "☫ ||||",
    members: [
      { name: "Willian Vasques", role: "Coordenador do CAF" },
      { name: "Augusto K.", role: "Cmd. Corregedoria"},
      { name: "Willian F.", role: "Cmd. IOPE"},
      { name: "Kauã N.", role: "Diretor da AFSU"},
      { name: "George Wilson", role: "Cmd. IAMO"}
    ]
  },
  {
    rank: "Inspetor De Divisão",
    description: "Coordenação e supervisão",
    icon: "☫ |||",
    members: [
      { name: "Samuel Souza", role: "Sub Cmd. IAMO" },
      { name: "Bruno Escobar", role: "Sub Cmd. IOPE"}
    ]
  },
  {
    rank: "Inspetor",
    description: "Inspetoria",
    icon: "☫ ||",
    members: [
      
    ]
  },
  {
    rank: "Sub Inspetor",
    description: "Formação",
    icon: "△ |",
    members: [
      { name: "Jabson Tavares", role: "Sub Inspetor" },
      { name: "Niel Novais", role: "Sub Inspetor"},
      { name: "Wade Winston", role: "Sub Inspetor"},
      { name: "*Arthur Almeida", role: "*Procurar Coord. do CAF"}
    ]
  },
   {
    rank: "Classe Especial",
    description: "Formação",
    icon: "❯❯❯❯",
    members: [
      { name: "Adoni Tavares", role: "Membro AFSU & Coord. IOPE" },
      { name: "Moreira Arruda", role: "Membro do CAF"}
    ]
  },
   {
    rank: "Classe Distinta",
    description: "Formação",
    icon: "(❯❯❯",
    members: [
      { name: "João Victor", role: "Est. IOPE" },
      { name: "César Gomez", role: "Membro do AFSU"}
    ]
  },
  {
    rank: "1ª Classe",
    description: "Formação",
    icon: "|||",
    members: [
      { name: "Antonio Braga", role: "1ª Classe"},
      { name: "Antonio Nunes", role: "1ª Classe"},
      { name: "Arthur Ferraz", role: "1ª Classe"},
      { name: "Bob Neto", role: "1ª Classe"},
      { name: "Bruno Garcia", role: "1ª Classe"},
      { name: "Cleiton Pereira", role: "1ª Classe"},
      { name: "Diego Guerra", role: "1ª Classe"},
      { name: "Emily Schimdt", role: "1ª Classe"},
      { name: "Enzo Lima", role: "1ª Classe"},
      { name: "Enzo Rodrigues", role: "1ª Classe"},
      { name: "Gabriel B.", role: "1ª Classe"},
      { name: "Gabriel Moraes", role: "1ª Classe"},
      { name: "Gabriel Silveira", role: "1ª Classe"},
      { name: "Gabriel Souza", role: "1ª Classe"},
      { name: "Gael Silva", role: "1ª Classe"},
      { name: "Gilson Fahur", role: "1ª Classe"},
      { name: "Gustavo Carvalho", role: "1ª Classe"},
      { name: "Hariel Denaro", role: "1ª Classe"},
      { name: "Hudson Santos", role: "1ª Classe"},
      { name: "Icaro Silva", role: "1ª Classe"},
      { name: "James Mariano", role: "1ª Classe"},
      { name: "João Junior", role: "1ª Classe"},
      { name: "Josué Fernandes", role: "1ª Classe"},
      { name: "Laura Nascimento", role: "1ª Classe"},
      { name: "Leonardo Destro", role: "1ª Classe"},
      { name: "Lucas Alves", role: "1ª Classe"},
      { name: "Lucas Freitas", role: "1ª Classe"},
      { name: "Marcos N.", role: "1ª Classe"},
      { name: "Melo Brm", role: "1ª Classe"},
      { name: "Monalisa Costa", role: "1ª Classe"},
      { name: "Nando Escobar", role: "1ª Classe"},
      { name: "Paulo Telhada", role: "1ª Classe"},
      { name: "Pedro Henrique", role: "1ª Classe"},
      { name: "Pedro Neumann", role: "1ª Classe"},
      { name: "Reginaldo Lopes", role: "1ª Classe"},
      { name: "Ricardo Muller", role: "1ª Classe"},
      { name: "Roberto N.", role: "1ª Classe"},
      { name: "Samuel Dias", role: "1ª Classe"},
      { name: "Samuel Schimidt", role: "1ª Classe"},
      { name: "Toni Santos", role: "1ª Classe"},
      { name: "Vinicius Junior", role: "1ª Classe"},
      { name: "Vitor Borges", role: "1ª Classe"},
      { name: "Vitor santos", role: "1ª Classe"},
      { name: "Willian Bone", role: "1ª Classe"}
    ]
  },
  {
    rank: "2ª Classe",
    description: "Formação",
    icon: "||",
    members: [
      { name: "Ryan Cavalcante", role: "2ª Classe" },
      { name: "Henrique Machado", role: "2ª Classe"}
    ]
  },
  {
    rank: "3ª Classe",
    description: "Efetivo operacional",
    icon: "|",
    members: [
      { name: "Carlos Alvez", role: "3ª Classe" },
      { name: "Cauã Teixeira", role: "3ª Classe" },
      { name: "Davi Perez", role: "3ª Classe" },
      { name: "Gustavo Henrique", role: "3ª Classe" },
      { name: "Hiago Vidotti", role: "3ª Classe" },
      { name: "Joao Victor", role: "3ª Classe" },
      { name: "Joao Vitor", role: "3ª Classe" },
      { name: "Kevin Paiva", role: "3ª Classe" },
      { name: "Leon Kennedy", role: "3ª Classe" },
      { name: "Matheus Oliveira", role: "3ª Classe" },
      { name: "Pedro Alvarenga", role: "3ª Classe" },
      { name: "Rafael Silva", role: "3ª Classe" },
      { name: "Ramon Floresta", role: "3ª Classe" },
      { name: "Rhyan Nascimento", role: "3ª Classe" },
      { name: "Thiago Lima", role: "3ª Classe" },
      { name: "Vidal Rodrigues", role: "3ª Classe" },
      { name: "Vinicius Teixeira", role: "3ª Classe" }

    ]
  },
  {
    rank: "Aluno",
    description: "Formação",
    icon: "",
    members: [
      { name: "Bernardo Mesquita", role: "Aluno" },
      { name: "Douglas Kovalsk", role: "Aluno" },
      { name: "Eduardo Souza", role: "Aluno" },
      { name: "Frankily Souza", role: "Aluno" },
      { name: "Gabriel Ferreira", role: "Aluno" },
      { name: "Guilherme Silva", role: "Aluno" },
      { name: "Gustavo Felipe", role: "Aluno" },
      { name: "Hugo Silva", role: "Aluno" },
      { name: "João Silva", role: "Aluno" },
      { name: "Luiz Andrade", role: "Aluno" },
      { name: "Macedo Coimbra", role: "Aluno" },
      { name: "Nascimento Lopes", role: "Aluno" },
      { name: "Nino Abravanel", role: "Aluno" },
      { name: "Rafael Siqueira", role: "Aluno" },
      { name: "Sebastião V.", role: "Aluno" },
      { name: "Felipe Souza", role: "Aluno" },
      { name: "Gabriel Pires", role: "Aluno" },
      { name: "Guilherme Const.", role: "Aluno" },
      { name: "Gusmão Kovalsk", role: "Aluno" },
      { name: "Henrique Souza", role: "Aluno" },
      { name: "Kevin Valentino ", role: "Aluno" },
      { name: "Luiz Henrique", role: "Aluno" },
      { name: "Nycolas Novais", role: "Aluno" },
      { name: "Vinicius Araújo", role: "Aluno" },
      { name: "Vinicius Santos", role: "Aluno" },
      { name: "Vinicius Santos", role: "Aluno" },
      { name: "Vitor Mattos", role: "Aluno" }
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
