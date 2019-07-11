var figlet = require("figlet");
figlet.text("Hello Malena!", function(error, data) {
  if (error)
    console.error(error);
  else
    console.log(data);
});
