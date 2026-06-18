
const checkbox = document.querySelectorAll('input[name="ODSEmail"]');
let selecionarTodas = document.getElementById('selecionarTodas');

selecionarTodas.addEventListener('change' , function() {
for (let u = 0; u < checkbox.length; u++) {
    checkbox[u].checked = selecionarTodas.checked
}
})

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
        let todasMarcadas = true;

        for (let j = 0; j < checkbox.length; j++) {
            if (!checkbox[j].checked) {
                todasMarcadas = false;
                break;
            }
        }
        selecionarTodas.checked = todasMarcadas;
    })
}



document.getElementById('formularioEmail').addEventListener('submit', function(cancelar) {

let opcaoMarcada = false;

for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
        opcaoMarcada = true;
        break;
    }
}
if (!opcaoMarcada) {
    cancelar.preventDefault();
    alert('Selecione pelo menos uma das ODS')
}
});