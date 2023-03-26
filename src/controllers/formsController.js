exports.advanced_form_post = function (req, res) {
  let formData = {
    birdSpecies: req.body.birdSpecies,
    birdNickname: req.body.birdNickname,
    birdStatus: req.body.birdStatus
    
  };

  // pretend we are saving to the database
  console.log(formData);

  res.send('Thank you');
};