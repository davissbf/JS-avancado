exports.paginaInicial = (req, res) => {
  res.render(`index`);
  return;
};

exports.trataPost = (req, res) => {
  res.send(`Formlário recebido: ${req.body}`);
};
