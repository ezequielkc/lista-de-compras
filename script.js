// Adiciona novo item à lista de compras ao enviar o formulário

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-adicionar-item');
  const input = document.getElementById('novo-item');
  const lista = document.querySelector('.lista-itens');
  const alertaRemocao = document.querySelector('.alerta-remocao');
  const btnFecharAlerta = document.querySelector('.fechar-alerta');
  const btnVoltar = document.querySelector('.voltar');

  // Estado para UNDO
  let ultimoRemovido = null;

  // Função para mostrar o alerta com fade-in e esconder com fade-out
  function mostrarAlertaRemocao() {
    alertaRemocao.style.display = 'flex';
    setTimeout(() => {
      alertaRemocao.style.opacity = '1';
    }, 10);
    setTimeout(() => {
      alertaRemocao.style.opacity = '0';
      setTimeout(() => {
        alertaRemocao.style.display = 'none';
      }, 400);
    }, 1500);
  }

  // Remover item ao clicar no botão de lixeira
  lista.addEventListener('click', function(event) {
    if (event.target.closest('.remover')) {
      const li = event.target.closest('li');
      if (li) {
        // Salva o item removido e sua posição para UNDO
        const index = Array.from(lista.children).indexOf(li);
        ultimoRemovido = {
          html: li.innerHTML,
          index: index
        };
        li.remove();
        mostrarAlertaRemocao();
      }
    }
  });

  // UNDO ao clicar no botão Voltar
  btnVoltar.addEventListener('click', function(event) {
    event.preventDefault();
    if (ultimoRemovido) {
      const li = document.createElement('li');
      li.innerHTML = ultimoRemovido.html;
      // Reinsere na posição original
      if (ultimoRemovido.index >= lista.children.length) {
        lista.appendChild(li);
      } else {
        lista.insertBefore(li, lista.children[ultimoRemovido.index]);
      }
      ultimoRemovido = null;
    }
  });

  // Fechar alerta ao clicar no botão de fechar
  btnFecharAlerta.addEventListener('click', function() {
    alertaRemocao.style.opacity = '0';
    setTimeout(() => {
      alertaRemocao.style.display = 'none';
    }, 400);
  });

  // Esconder alerta ao iniciar
  alertaRemocao.style.display = 'none';
  alertaRemocao.style.opacity = '0';

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const valor = input.value.trim();
    if (!valor) return;

    // Cria o novo item com a mesma estrutura dos outros
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" />
        ${valor}
      </label>
      <button class="remover">
        <img src="Icons/trash.png" alt="Remover" width="20" height="20">
      </button>
    `;
    lista.appendChild(li);
    input.value = '';
    input.focus();
  });
});
