document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input_text');
    const outputText = document.getElementById('output_text');
    const encriptarBtn = document.getElementById('encriptar');
    const desencriptarBtn = document.getElementById('desencriptar');
    const copiarBtn = document.getElementById('copiar');

    const outputSection = document.querySelector('.output__section');
    const outputImage = document.querySelector('.output__section__imagen');
    const outputMessage = document.querySelector('.output__section__mensaje');

    // Visibilidad de los elementos de salida
    function toggleOutputElements(hasText) {
        outputText.style.display = hasText ? 'block' : 'none';
        copiarBtn.style.display = hasText ? 'block' : 'none';
        outputImage.style.display = hasText ? 'none' : 'block';
    }

    // Inicializar el estado
    toggleOutputElements(false);

    function encriptar(texto) {
        return texto.replace(/[aeiou]/g, letra => {
            return {
                'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'
            }[letra];
        });
    }

    function desencriptar(texto) {
        return texto.replace(/(enter|imes|ai|ober|ufat)/g, palabra => {
            return {
                'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'
            }[palabra];
        });
    }

    encriptarBtn.addEventListener('click', () => {
        const textoOriginal = inputText.value.toLowerCase();
        const textoEncriptado = encriptar(textoOriginal);
        outputText.value = textoEncriptado;
        toggleOutputElements(true);
    });

    desencriptarBtn.addEventListener('click', () => {
        const textoEncriptado = inputText.value.toLowerCase();
        const textoDesencriptado = desencriptar(textoEncriptado);
        outputText.value = textoDesencriptado;
        toggleOutputElements(true);
    });

    copiarBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Texto copiado al portapapeles');
    });
});