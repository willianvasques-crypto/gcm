const DEFAULT_DATA = [
  {rank:"Comandante Geral",description:"Comando Geral da Corporação",icon:"☫ ⁕",members:[{name:"Michael Haller",role:"Comandante Geral"}]},
  {rank:"Sub Comandante Geral",description:"Coordenação e supervisão",icon:"☫",members:[{name:"Monteiro",role:"Sub Cmd. Geral"}]},
  {rank:"Inspetor Superintendente",description:"Coordenação e supervisão",icon:"☫ |||||",members:[{name:"B. Lazz",role:"Cmd. SAE"},{name:"Teixeira",role:"Cmd. SOP"},{name:"Cayo",role:"Sub Cmd. SAE"},{name:"Machado",role:"Sub Cmd. SOP"}]},
  {rank:"Inspetor Agrupamento",description:"Coordenação e supervisão",icon:"☫ ||||",members:[{name:"Willian Vasques",role:"Coordenador do CAF"},{name:"Augusto K.",role:"Cmd. Corregedoria"},{name:"Willian F.",role:"Cmd. IOPE"},{name:"Kauã N.",role:"Diretor da AFSU"},{name:"George Wilson",role:"Cmd. IAMO"}]},
  {rank:"Inspetor De Divisão",description:"Coordenação e supervisão",icon:"☫ |||",members:[{name:"Samuel Souza",role:"Sub Cmd. IAMO"},{name:"Bruno Escobar",role:"Sub Cmd. IOPE"}]},
  {rank:"Inspetor",description:"Inspetoria",icon:"☫ ||",members:[]},
  {rank:"Sub Inspetor",description:"Formação",icon:"△ |",members:[{name:"Jabson Tavares",role:"Sub Inspetor"},{name:"Niel Novais",role:"Sub Inspetor"},{name:"Wade Winston",role:"Sub Inspetor"},{name:"Arthur Almeida",role:"Sub Inspetor"}]},
  {rank:"Classe Especial",description:"Formação",icon:"❯❯❯❯",members:[{name:"Adoni Tavares",role:"Membro AFSU & Coord. IOPE"},{name:"Moreira Arruda",role:"Membro do CAF"}]},
  {rank:"Classe Distinta",description:"Formação",icon:"(❯❯❯",members:[{name:"César Gomez",role:"Membro do AFSU"},{name:"João Victor",role:"Est. IOPE"}]},
  {rank:"1ª Classe",description:"Formação",icon:"|||",members:[
    "Antonio Braga","Antonio Nunes","Arthur Ferraz","Bob Neto","Bruno Garcia","Cleiton Pereira","Diego Guerra","Emily Schimdt","Enzo Lima","Enzo Rodrigues","Gabriel B.","Gabriel Moraes","Gabriel Silveira","Gabriel Souza","Gael Silva","Gilson Fahur","Gustavo Carvalho","Hariel Denaro","Hudson Santos","Icaro Silva","James Mariano","João Junior","Josué Fernandes","Laura Nascimento","Leonardo Destro","Lucas Alves","Lucas Freitas","Marcos N.","Melo Brm","Monalisa Costa","Nando Escobar","Paulo Telhada","Pedro Henrique","Pedro Neumann","Reginaldo Lopes","Ricardo Muller","Roberto N.","Samuel Dias","Samuel Schimidt","Toni Santos","Vinicius Junior","Vitor Borges","Vitor santos","Willian Bone"].map(name=>({name,role:"1ª Classe"}))},
  {rank:"2ª Classe",description:"Formação",icon:"||",members:[{name:"Ryan Cavalcante",role:"2ª Classe"},{name:"Henrique Machado",role:"2ª Classe"}]},
  {rank:"3ª Classe",description:"Efetivo operacional",icon:"|",members:["Carlos Alvez","Cauã Teixeira","Davi Perez","Gustavo Henrique","Hiago Vidotti","Joao Victor","Joao Vitor","Kevin Paiva","Leon Kennedy","Matheus Oliveira","Pedro Alvarenga","Rafael Silva","Ramon Floresta","Rhyan Nascimento","Thiago Lima","Vidal Rodrigues","Vinicius Teixeira"].map(name=>({name,role:"3ª Classe"}))},
  {rank:"Aluno",description:"Formação",icon:"",members:["Bernardo Mesquita","Douglas Kovalsk","Eduardo Souza","Frankily Souza","Gabriel Ferreira","Guilherme Silva","Gustavo Felipe","Hugo Silva","João Silva","Luiz Andrade","Macedo Coimbra","Nascimento Lopes","Nino Abravanel","Rafael Siqueira","Sebastião V.","Felipe Souza","Gabriel Pires","Guilherme Const.","Gusmão Kovalsk","Henrique Souza","Kevin Valentino","Luiz Henrique","Nycolas Novais","Vinicius Araújo","Vinicius Santos","Vinicius Santos","Vitor Mattos"].map(name=>({name,role:"Aluno"}))}
];

const STORAGE_KEY = "gcm_hierarchy_data_v2";
const USER = "CAF";
const PASS = "CAF2026";
let hierarchyData = loadData();
let selectedIndex = null;

const $ = id => document.getElementById(id);
const hierarchy = $("hierarchy"), searchInput = $("searchInput"), rankFilter = $("rankFilter");
const emptyState = $("emptyState"), totalMembers = $("totalMembers"), totalRanks = $("totalRanks");

function loadData(){
  try { const saved = localStorage.getItem(STORAGE_KEY); return saved ? JSON.parse(saved) : structuredClone(DEFAULT_DATA); }
  catch { return structuredClone(DEFAULT_DATA); }
}
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(hierarchyData)); }
function initials(name){ return name.split(" ").filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase(); }
function escapeHTML(v=""){ return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }

function renderFilter(){
  const current = rankFilter.value;
  rankFilter.innerHTML = '<option value="all">Todas as patentes</option>';
  hierarchyData.forEach(g=>{ const o=document.createElement("option"); o.value=g.rank; o.textContent=g.rank; rankFilter.appendChild(o); });
  rankFilter.value = hierarchyData.some(g=>g.rank===current) ? current : "all";
}
function render(){
  const search=searchInput.value.trim().toLowerCase(), selected=rankFilter.value;
  hierarchy.innerHTML=""; let visibleMembers=0,visibleRanks=0;
  hierarchyData.forEach(group=>{
    if(selected!=="all" && selected!==group.rank)return;
    const members=group.members.filter(m=>m.name.toLowerCase().includes(search)||m.role.toLowerCase().includes(search)||group.rank.toLowerCase().includes(search));
    if(!members.length)return;
    visibleRanks++; visibleMembers+=members.length;
    const card=document.createElement("article"); card.className="rank-card";
    card.innerHTML=`<div class="rank-header"><div class="rank-title"><div class="rank-icon">${escapeHTML(group.icon)}</div><div><h3>${escapeHTML(group.rank)}</h3><small>${escapeHTML(group.description)}</small></div></div><div class="count">${members.length} integrante${members.length!==1?"s":""}</div></div><div class="members">${members.map(m=>`<div class="member"><div class="avatar">${initials(escapeHTML(m.name))}</div><div><strong>${escapeHTML(m.name)}</strong><span>${escapeHTML(m.role)}</span></div></div>`).join("")}</div>`;
    hierarchy.appendChild(card);
  });
  totalMembers.textContent=visibleMembers; totalRanks.textContent=visibleRanks;
  emptyState.classList.toggle("hidden",visibleRanks!==0);
  $("resultText").textContent=search||selected!=="all"?`${visibleMembers} integrante${visibleMembers!==1?"s":""} encontrado${visibleMembers!==1?"s":""}`:"Exibindo todo o efetivo";
  $("clearSearch").classList.toggle("hidden",!search&&selected==="all");
}
function openModal(id){$(id).classList.remove("hidden")}
function closeModal(id){$(id).classList.add("hidden")}

$("adminBtn").onclick=()=>openModal("loginModal");
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)closeModal(m.id)}));

$("loginForm").onsubmit=e=>{
  e.preventDefault();
  if($("username").value===USER && $("password").value===PASS){
    $("loginError").textContent=""; $("loginForm").reset(); closeModal("loginModal"); openModal("adminModal"); renderAdmin();
  } else $("loginError").textContent="Usuário ou senha inválidos.";
};
$("logoutBtn").onclick=()=>{selectedIndex=null;closeModal("adminModal")};

function renderAdmin(){
  const list=$("rankEditorList"); list.innerHTML="";
  hierarchyData.forEach((g,i)=>{
    const item=document.createElement("div"); item.className="rank-editor-item"+(i===selectedIndex?" active":"");
    item.innerHTML=`<span>${escapeHTML(g.rank)}</span><span>${g.members.length}</span>`;
    item.onclick=()=>selectRank(i); list.appendChild(item);
  });
  if(selectedIndex!==null) fillEditor();
}
function selectRank(i){selectedIndex=i;renderAdmin()}
function fillEditor(){
  const g=hierarchyData[selectedIndex]; $("noSelection").classList.add("hidden"); $("rankEditor").classList.remove("hidden");
  $("editorTitle").textContent=g.rank; $("editorSubtitle").textContent=`${g.members.length} integrante${g.members.length!==1?"s":""}`;
  $("editRankName").value=g.rank; $("editRankDescription").value=g.description; $("editRankIcon").value=g.icon;
  const list=$("memberEditorList"); list.innerHTML="";
  g.members.forEach((m,i)=>{
    const row=document.createElement("div"); row.className="member-edit";
    row.innerHTML=`<input class="m-name" value="${escapeHTML(m.name)}" placeholder="Nome"><input class="m-role" value="${escapeHTML(m.role)}" placeholder="Cargo/função"><button class="remove-member" title="Remover">×</button>`;
    row.querySelector(".remove-member").onclick=()=>{g.members.splice(i,1);fillEditor()};
    list.appendChild(row);
  });
}
$("saveRankBtn").onclick=()=>{
  if(selectedIndex===null)return;
  const g=hierarchyData[selectedIndex], old=g.rank;
  g.rank=$("editRankName").value.trim()||old; g.description=$("editRankDescription").value.trim()||"Formação"; g.icon=$("editRankIcon").value.trim();
  g.members=[...document.querySelectorAll(".member-edit")].map(r=>({name:r.querySelector(".m-name").value.trim(),role:r.querySelector(".m-role").value.trim()})).filter(m=>m.name);
  saveData();renderFilter();render();renderAdmin();alert("Alterações salvas com sucesso.");
};
$("addMemberBtn").onclick=()=>{hierarchyData[selectedIndex].members.push({name:"Novo integrante",role:"Cargo"});fillEditor()};
$("newRankBtn").onclick=()=>{
  hierarchyData.push({rank:"Nova patente",description:"Formação",icon:"★",members:[]}); saveData(); selectedIndex=hierarchyData.length-1; renderFilter();render();renderAdmin();
};
$("deleteRankBtn").onclick=()=>{
  if(selectedIndex===null)return;
  if(confirm(`Excluir a patente "${hierarchyData[selectedIndex].rank}"?`)){hierarchyData.splice(selectedIndex,1);selectedIndex=null;saveData();renderFilter();render();renderAdmin();$("rankEditor").classList.add("hidden");$("noSelection").classList.remove("hidden");}
};
$("resetBtn").onclick=()=>{
  if(confirm("Restaurar os dados originais? Isso apagará as alterações feitas neste navegador.")){hierarchyData=structuredClone(DEFAULT_DATA);saveData();selectedIndex=null;renderFilter();render();renderAdmin();$("rankEditor").classList.add("hidden");$("noSelection").classList.remove("hidden");}
};
$("exportBtn").onclick=()=>{
  const blob=new Blob([JSON.stringify(hierarchyData,null,2)],{type:"application/json"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download="backup-hierarquia-gcm.json";a.click();URL.revokeObjectURL(a.href);
};
$("importInput").onchange=e=>{
  const file=e.target.files[0]; if(!file)return;
  const reader=new FileReader();reader.onload=()=>{
    try{const data=JSON.parse(reader.result);if(!Array.isArray(data))throw Error();hierarchyData=data;saveData();selectedIndex=null;renderFilter();render();renderAdmin();alert("Backup importado.");}
    catch{alert("Arquivo inválido.");} e.target.value="";
  };reader.readAsText(file);
};
$("clearSearch").onclick=()=>{searchInput.value="";rankFilter.value="all";render()};
searchInput.oninput=render;rankFilter.onchange=render;
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchInput.focus()}if(e.key==="Escape"){document.querySelectorAll(".modal").forEach(m=>closeModal(m.id))}});
$("year").textContent=new Date().getFullYear();
renderFilter();render();
