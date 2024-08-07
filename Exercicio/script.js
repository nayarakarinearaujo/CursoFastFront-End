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

    // Limpar os inputs
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('interesses').value = '';
});
