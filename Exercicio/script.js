document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar um novo contato
    document.getElementById('cadastrar').addEventListener('click', function() {
        // Coletar dados dos inputs
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const interesses = document.getElementById('interesses').value.split(',');

        // Criar uma nova linha na tabela
        const table = document.getElementById('contatos').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Adicionar células à nova linha
        const cellNome = newRow.insertCell(0);
        const cellTelefone = newRow.insertCell(1);
        const cellEmail = newRow.insertCell(2);
        const cellInteresses = newRow.insertCell(3);
        const cellActions = newRow.insertCell(4); // Célula para os botões de ação

        // Preencher as células com os dados
        cellNome.textContent = nome;
        cellTelefone.textContent = telefone;
        cellEmail.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        const ul = document.createElement('ul');
        interesses.forEach(interesse => {
            const li = document.createElement('li');
            li.textContent = interesse.trim();
            ul.appendChild(li);
        });
        cellInteresses.appendChild(ul);

        // Adicionar botões de editar e excluir
        cellActions.innerHTML = `
            <button class="btnedit">Editar</button>
            <button class="btndelete">Excluir</button>
        `;

        // Limpar os inputs
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('email').value = '';
        document.getElementById('interesses').value = '';
    });

    // Função para editar um contato
    function editRow(row) {
        const cells = row.querySelectorAll('td:not(.table-button)');
        const nome = cells[0].textContent;
        const telefone = cells[1].textContent;
        const email = cells[2].textContent;
        const interesses = Array.from(cells[3].querySelectorAll('li')).map(li => li.textContent).join(', ');

        document.getElementById('nome').value = nome;
        document.getElementById('telefone').value = telefone;
        document.getElementById('email').value = email;
        document.getElementById('interesses').value = interesses;

        // Remove a linha original
        row.remove();
    }

    // Função para excluir um contato
    function deleteRow(row) {
        if (confirm('Você tem certeza que deseja excluir este contato?')) {
            row.remove(); // Remove a linha da tabela
        }
    }

    // Adicionar um ouvinte de evento para a tabela
    const table = document.querySelector('#contatos');

    table.addEventListener('click', (event) => {
        const button = event.target;
        const row = button.closest('tr');

        if (button.classList.contains('btnedit')) {
            editRow(row);
        } else if (button.classList.contains('btndelete')) {
            deleteRow(row);
        }
    });
});
