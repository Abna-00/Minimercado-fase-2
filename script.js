// Função para processar o agendamento de entrega
document.getElementById('form-agendamento').addEventListener('submit', function(event) {
    event.preventDefault();
    const dataEntrega = document.getElementById('dataEntrega').value;
    const servico = document.getElementById('servico').value;

    alert(`Seu agendamento foi realizado! \nData e Hora: ${dataEntrega}\nServiço escolhido: ${servico}`);
});
