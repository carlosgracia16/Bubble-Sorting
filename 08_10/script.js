function mostrarNumeros(numeros, classe = "") {

    let exibidor = document.getElementById("exibidor");

    exibidor.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {

        let caixa = document.createElement("div");

        caixa.className = "numero " + classe;

        caixa.innerHTML = numeros[i];

        exibidor.appendChild(caixa);
    }
}


function esperar(tempo) {

    return new Promise(resolve => {
        setTimeout(resolve, tempo);
    });
}


async function sortear() {

    let um = Number(document.getElementById("primeiro").value);
    let dois = Number(document.getElementById("segundo").value);
    let tres = Number(document.getElementById("terceiro").value);
    let quatro = Number(document.getElementById("quarto").value);
    let cinco = Number(document.getElementById("quinto").value);
    let seis = Number(document.getElementById("sexto").value);

    let numeros = [um, dois, tres, quatro, cinco, seis];

    mostrarNumeros(numeros);

    await esperar(500);

    for (let i = 0; i < numeros.length; i++) {

        for (let j = 0; j < numeros.length - 1; j++) {

            mostrarNumeros(numeros, "comparando");

            await esperar(500);

            if (numeros[j] > numeros[j + 1]) {

                let temp = numeros[j];

                numeros[j] = numeros[j + 1];

                numeros[j + 1] = temp;

                mostrarNumeros(numeros, "trocando");

                await esperar(500);
            }
        }
    }

    mostrarNumeros(numeros);
}