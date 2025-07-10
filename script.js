// 1. AGUARDANDO O CARREGAMENTO DA PÁGINA
//
// DOMContentLoaded é um evento que dispara quando o HTML está totalmente carregado
// Isso garante que todos os elementos HTML existam antes de tentarmos acessá-los
document.addEventListener('DOMContentLoaded', function() {
  
  // 2. SELECIONANDO ELEMENTOS DO HTML
  
  // querySelector é como um "seletor" que encontra elementos no HTML
  // É como dizer: "Ei, me dê o elemento que tem a classe 'form-adicionar-item'"
  const form = document.querySelector('.form-adicionar-item');
  
  // getElementById é mais específico - busca por ID (identificador único)
  const input = document.getElementById('novo-item');
  
  // Encontra a lista onde os itens serão mostrados
  const lista = document.querySelector('.lista-itens');
  
  // Elementos para o sistema de alertas
  const alertaRemocao = document.querySelector('.alerta-remocao');
  const btnFecharAlerta = document.querySelector('.fechar-alerta');
  const btnVoltar = document.querySelector('.voltar');

  // 3. VARIÁVEL PARA ARMAZENAR DADOS (ESTADO)
  
  // Esta variável guarda informações sobre o último item removido
  // Isso permite a funcionalidade "desfazer" (UNDO)
  let ultimoRemovido = null;

  // 4. FUNÇÃO PARA MOSTRAR ALERTAS
  
  // Uma função é como uma "receita" - você define os passos e pode reutilizar
  function mostrarAlertaRemocao() {
    // Primeiro, torna o alerta visível
    alertaRemocao.style.display = 'flex';
    
    // setTimeout executa código após um tempo (em milissegundos)
    // 10ms = 0,01 segundo - tempo mínimo para garantir que o display foi aplicado
    setTimeout(() => {
      alertaRemocao.style.opacity = '1'; // Torna totalmente visível
    }, 10);
    
    // Após 1,5 segundos, começa a esconder o alerta
    setTimeout(() => {
      alertaRemocao.style.opacity = '0'; // Torna transparente
      
      // Após 400ms (tempo da animação), esconde completamente
      setTimeout(() => {
        alertaRemocao.style.display = 'none';
      }, 400);
    }, 1500);
  }

  // 5. DETECTANDO CLIQUES NA LISTA
  
  // addEventListener é como "escutar" - fica atento a um evento
  // 'click' é o evento de clicar com o mouse
  lista.addEventListener('click', function(event) {
    // event.target é o elemento que foi clicado
    // closest() procura o elemento pai mais próximo que tem a classe 'remover'
    // Isso funciona mesmo se clicarmos na imagem dentro do botão
    if (event.target.closest('.remover')) {
      
      // Encontra o <li> (item da lista) que contém o botão clicado
      const li = event.target.closest('li');
      
      if (li) {
        // Array.from() converte a lista de elementos em um array
        // indexOf() encontra a posição do elemento na lista
        const index = Array.from(lista.children).indexOf(li);
        
        // Guarda informações para poder desfazer depois
        ultimoRemovido = {
          html: li.innerHTML,  // O conteúdo HTML do item
          index: index         // A posição onde estava
        };
        
        // Remove o item da lista
        li.remove();
        
        // Mostra o alerta de confirmação
        mostrarAlertaRemocao();
      }
    }
  });

  // 6. FUNCIONALIDADE DESFAZER (UNDO)
  
  // Quando clicar no botão "Voltar"
  btnVoltar.addEventListener('click', function(event) {
    // Previne o comportamento padrão do botão
    event.preventDefault();
    
    // Só desfaz se há algo para desfazer
    if (ultimoRemovido) {
      // Cria um novo elemento <li>
      const li = document.createElement('li');
      
      // Coloca o conteúdo HTML original de volta
      li.innerHTML = ultimoRemovido.html;
      
      // Reinsere na posição original
      if (ultimoRemovido.index >= lista.children.length) {
        // Se a posição original era o final, adiciona no final
        lista.appendChild(li);
      } else {
        // Senão, insere na posição específica
        lista.insertBefore(li, lista.children[ultimoRemovido.index]);
      }
      
      // Limpa a variável de controle
      ultimoRemovido = null;
    }
  });

  // 7. FECHAR ALERTA MANUALMENTE
  
  btnFecharAlerta.addEventListener('click', function() {
    // Inicia a animação de fade-out
    alertaRemocao.style.opacity = '0';
    
    // Após a animação terminar, esconde completamente
    setTimeout(() => {
      alertaRemocao.style.display = 'none';
    }, 400);
  });

  // 8. CONFIGURAÇÃO INICIAL DO ALERTA
  
  // Garante que o alerta começa escondido
  alertaRemocao.style.display = 'none';
  alertaRemocao.style.opacity = '0';

  // 9. ADICIONANDO NOVOS ITENS
  
  // Escuta quando o formulário é enviado (Enter ou botão)
  form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão (recarregar a página)
    event.preventDefault();
    
    // Pega o valor do input e remove espaços em branco
    const valor = input.value.trim();
    
    // Se não há valor, não faz nada
    if (!valor) return;

    // 10. CRIANDO UM NOVO ELEMENTO HTML
    
    // createElement cria um novo elemento HTML
    const li = document.createElement('li');
    
    // innerHTML define o conteúdo HTML do elemento
    // Template string (``) permite incluir variáveis com ${}
    li.innerHTML = `
      <label>
        <input type="checkbox" />
        ${valor}
      </label>
      <button class="remover">
        <img src="Icons/trash.png" alt="Remover" width="20" height="20">
      </button>
    `;
    
    // appendChild adiciona o elemento no final da lista
    lista.appendChild(li);
    
    // Limpa o campo de input
    input.value = '';
    
    // Coloca o foco de volta no input para facilitar adicionar mais itens
    input.focus();
  });
});

/*
 * RESUMO JS:
 * 
 * 1. Event Listeners - Escutar ações do usuário
 * 2. DOM Manipulation - Criar, modificar e remover elementos HTML
 * 3. Variables - Armazenar dados (let, const)
 * 4. Functions - Blocos de código reutilizáveis
 * 5. Conditional Statements - Tomar decisões (if/else)
 * 6. Template Strings - Strings com variáveis
 * 7. setTimeout - Executar código após um tempo
 * 8. Array Methods - Trabalhar com listas de elementos
 * 9. Event Object - Acessar informações sobre eventos
 * 10. preventDefault() - Controlar comportamentos padrão
 */