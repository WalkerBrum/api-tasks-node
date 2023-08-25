const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Sao_Paulo', // Defina o fuso horário desejado
};

const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(new Date());

module.exports = options