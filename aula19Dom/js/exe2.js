const body = document.body;

    // <section id="intro">
    const sec1 = document.createElement('section');
    sec1.setAttribute('id', 'intro');
    body.appendChild(sec1);
    sec1.style.backgroundColor = 'lightblue';

    // <h1>
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'titulo-principal');
    h1.textContent = 'Bem-vindo ao meu exercicio sobre dom!';
    sec1.appendChild(h1);

    // <p>
    const p1 = document.createElement('p');
    p1.setAttribute('class', 'paragrafo');
    p1.textContent = 'essa pagina foi contruida com dom no java script com algumas fotos retiradas do google.';
    sec1.appendChild(p1);

    // <img>
    const img1 = document.createElement('img');
    img1.setAttribute('src', 'https://picsum.photos/800/400?random=1');
    img1.setAttribute('alt', 'Imagem aleatória 1');
    img1.setAttribute('loading', 'lazy');
    sec1.appendChild(img1);

    // Segunda section
    const sec2 = document.createElement('section');
    sec2.setAttribute('id', 'galeria');
    body.appendChild(sec2);
    sec2.style.backgroundColor = 'lightgreen';

    const h2 = document.createElement('h2');
    h2.setAttribute('id', 'subtitulo');
    h2.textContent = 'Galeria de Fotos';
    sec2.appendChild(h2);

    const p2 = document.createElement('p');
    p2.setAttribute('class', 'paragrafo');
    p2.textContent = 'Aqui temos mais duas fotos coletadas aleatoriamente do google.';
    sec2.appendChild(p2);

    // Imagem 2
    const img2 = document.createElement('img');
    img2.setAttribute('src', 'https://picsum.photos/600/400?random=2');
    img2.setAttribute('alt', 'Imagem aleatória 2');
    img2.setAttribute('width', '600');
    sec2.appendChild(img2);

    // Imagem 3
    const img3 = document.createElement('img');
    img3.setAttribute('src', 'https://picsum.photos/500/600?random=3');
    img3.setAttribute('alt', 'Imagem aleatória 3');
    img3.setAttribute('style', 'margin-top:20px;');
    sec2.appendChild(img3);

    // footer
    const footer = document.createElement('footer');
    footer.setAttribute('style', 'text-align:center; padding:20px; color:#777;');
    footer.textContent = '© 2025 Página criada com dom em java script';
    body.appendChild(footer);
    footer.style.backgroundColor = 'lightgray';