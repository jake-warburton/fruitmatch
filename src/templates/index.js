const templates = ['blank', 'office'];

module.exports = function(template) {
  if (!!template) {
    return require(`./${template}.js`);
  }

  const templatesArray = [];

  for (let i = 0; i < templates.length; i += 1) {
    const thisTemplate = require(`./${templates[i]}.js`);

    templatesArray.push(JSON.parse(JSON.stringify(thisTemplate)));
  }

  return templatesArray;
};
