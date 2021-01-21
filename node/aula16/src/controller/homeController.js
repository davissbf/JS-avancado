exports.paginaInicial = (req, res) => {
  console.log(req.flash('erro'), req.flash('info'), req.flash('success'));
  res.render(`index`);
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
