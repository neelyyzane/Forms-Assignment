exports.form_post = function(req, res, next) {
let birdData = {
  birdSpecies: req.body.birdSpecies,
  birdNickname: req.body.birdNickname,
  birdStatus: req.body.birdStatus
};

console.log(birdData);

res.render('form-submit-confirm', birdData);
};
