const nao = document.getElementById("nao");
const sim = document.getElementById("sim");
const conteudo = document.getElementById("conteudo");

let escala = 1;

nao.style.left = "55%";
nao.style.top = "55%";

function moverBotao() {
  const x = Math.random() * (window.innerWidth - nao.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - nao.offsetHeight - 20);

  nao.style.left = x + "px";
  nao.style.top = y + "px";

  escala += 0.1;
  sim.style.transform = `scale(${escala})`;
}

// PC
nao.addEventListener("mouseenter", moverBotao);

// Celular: quando toca no botão
nao.addEventListener("touchstart", function(e) {
  e.preventDefault();
  moverBotao();
});

// Celular: quando o dedo chega perto
document.addEventListener("touchmove", function(e) {
  const toque = e.touches[0];
  const rect = nao.getBoundingClientRect();

  const centroX = rect.left + rect.width / 2;
  const centroY = rect.top + rect.height / 2;

  const distancia = Math.sqrt(
    Math.pow(toque.clientX - centroX, 2) +
    Math.pow(toque.clientY - centroY, 2)
  );

  if (distancia < 200) {
    moverBotao();
  }
});

sim.addEventListener("click", function() {
  conteudo.innerHTML = `
    <div class="convite">
      <div style="font-size: 60px;">🌹❤️🌹</div>

      <h1>Convite Especial</h1>

      <p style="font-size: 18px; margin: 15px 0;">
        Fico muito feliz que você aceitou!
      </p>

      <p style="font-size: 18px; margin: 15px 0;">
        Gostaria de te convidar para um encontro.
      </p>

      <p style="font-size: 20px; margin-top: 20px;">
        📅 Data: Sábado
      </p>

      <p style="font-size: 20px;">
        🕗 Horário: 20:00
      </p>

      <p style="font-size: 20px;">
        📍 Local: Surpresa
      </p>

      <h2 style="color: #e91e63; margin-top: 25px;">
        ❤️ Vai ser incrível ❤️
      </h2>
    </div>
  `;
});