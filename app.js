// Função de Criptografia
function criptografar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função de Descriptografia
function descriptografar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para Processar Criptografia
function processarTexto() {
    const textoInput = document.getElementById('input-text').value;
    const textoCriptografado = criptografar(textoInput);
    document.getElementById('output-text').value = textoCriptografado;
}

// Função para Processar Descriptografia
function processarDescriptografia() {
    const textoInput = document.getElementById('output-text').value;
    const textoDescriptografado = descriptografar(textoInput);
    document.getElementById('output-text').value = textoDescriptografado;
}

// Função para Copiar Texto
function copiarTexto() {
    const textoOutput = document.getElementById('output-text');
    textoOutput.select(); // Seleciona o texto na caixa de texto
    document.execCommand('copy'); // Copia o texto selecionado para a área de transferência
}

// Adicionar Eventos aos Botões
document.getElementById('encrypt-button').addEventListener('click', processarTexto);
document.getElementById('decrypt-button').addEventListener('click', processarDescriptografia);
document.getElementById('copy-button').addEventListener('click', copiarTexto);
