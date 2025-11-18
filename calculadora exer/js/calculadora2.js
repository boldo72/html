 function calcular() {
            // Pegar os valores
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);

            // Verificar se os campos foram preenchidos
            if (isNaN(n1) || isNaN(n2)) {
                alert("Por favor, preencha os dois números!");
                return;
            }

            const soma = n1 + n2;
            let html = "<strong>RESULTADOS:</strong><br><br>";

            // 1. Primeiro > segundo
            html += n1 > n2 
                ? "O primeiro número é <span class='positivo'>MAIOR</span> que o segundo<br>"
                : "O primeiro número <span class='negativo'>NÃO é maior</span> que o segundo<br>";

            // 2. Ambos pares
            html += (n1 % 2 === 0 && n2 % 2 === 0)
                ? "Ambos os números são <span class='positivo'>PARES</span><br>"
                : "Pelo menos um dos números é <span class='negativo'>ÍMPAR</span><br>";

            // 3. Primeiro é múltiplo do segundo
            if (n2 === 0) {
                html += "Impossível verificar múltiplo (segundo número é zero)<br>";
            } else if (n1 % n2 === 0) {
                html += `${n1} <span class='positivo'>É MÚLTIPLO</span> de ${n2}<br>`;
            } else {
                html += `${n1} <span class='negativo'>NÃO é múltiplo</span> de ${n2}<br>`;
            }

            // 4. São iguais
            html += n1 === n2
                ? "Os dois números são <span class='positivo'>IGUAIS</span><br>"
                : "Os dois números são <span class='negativo'>DIFERENTES</span><br>";

            // 5. Soma par ou ímpar
            html += soma % 2 === 0
                ? `A soma (${n1} + ${n2} = ${soma}) é <span class='positivo'>PAR</span><br>`
                : `A soma (${n1} + ${n2} = ${soma}) é <span class='negativo'>ÍMPAR</span><br>`;

            // 6. Soma > 10
            html += soma > 10
                ? `A soma (${soma}) é <span class='positivo'>MAIOR que 10</span><br>`
                : `A soma (${soma}) <span class='negativo'>NÃO é maior que 10</span><br>`;

            // 7. Primeiro ímpar e segundo par
            html += (n1 % 2 !== 0 && n2 % 2 === 0)
                ? "O primeiro é <span class='positivo'>ÍMPAR</span> e o segundo é <span class='positivo'>PAR</span><br>"
                : "O primeiro <span class='negativo'>NÃO é ímpar</span> OU o segundo <span class='negativo'>NÃO é par</span><br>";

            // 8. Primeiro negativo
            html += n1 < 0
                ? "O primeiro número é <span class='positivo'>NEGATIVO</span><br>"
                : "O primeiro número <span class='negativo'>NÃO é negativo</span> (é zero ou positivo)<br>";

            // Exibir resultado
            const saida = document.getElementById('saida');
            saida.innerHTML = html;
            saida.style.display = 'block';
        }