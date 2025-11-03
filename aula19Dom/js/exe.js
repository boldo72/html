 // 1. textContent: trocar o <h1>
    document.getElementById('titulo').textContent = 'Estudando Dom no Senai';

    // 2. innerHTML: criar 3 parágrafos com id e nome de professores
    const profs = ['Prof. Ana Silva', 'Prof. Carlos Oliveira', 'Prof. Beatriz Santos'];
    const container = document.getElementById('paragrafos');

    profs.forEach((nome, i) => {
      const p = document.createElement('p');
      p.id = 'prof' + (i + 1);               // id="prof1", "prof2", "prof3"
      p.textContent = `Parágrafo ${i + 1}: `;
      p.innerHTML += `<strong>${nome}</strong>`; // adiciona o nome em negrito
      container.appendChild(p);
    });

    // 3. innerHTML: adicionar duas imagens via JS
    document.getElementById('btn').onclick = () => {
      const urls = [
        'https://picsum.photos/300/200?random=1',
        'https://picsum.photos/300/200?random=2'
      ];
      const imgContainer = document.createElement('div');
      imgContainer.innerHTML = `
        <img src="${urls[0]}" alt="Imagem 1">
        <img src="${urls[1]}" alt="Imagem 2">
      `;
      document.body.appendChild(imgContainer);
      // desabilita o botão para não duplicar
      document.getElementById('btn').disabled = true;
    };