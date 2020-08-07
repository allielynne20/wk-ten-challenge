// function to generate html

function generateTeam(team) {
  //funciton that generates Manager
  function generateManager(manager) {
    return `
    <div class="card">
                    <h3 class="card-header text-uppercase">${manager.getName()}</h3>
                    <h2>${manager.getRole()}<h2>
                    <div id="city-history">
                    </div>
                </div>
    `
  }
  //funciton that generates Engineer
  //function that generates Intern
}

const html = [];

html.push(team
  .filter(employee => employee.getRole() === 'Manager')
  .map(manager => generateManager(manger))
);

html.push(team
  .filter(employee => employee.getRole() === 'Engineer')
  .map(engineer => generateManager(engineer))
  .join('')
);

html.push(team
  .filter(employee => employee.getRole() === 'Intern')
  .map(intern => generateManager(intern))
  .join('')
);

return html.join('');

//export functions to generate entire page
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EmployeeTeam</title>
    </head>
    <body>

      <div class="container">
        <div class="row">
          <div class="col-12 justify-content-center">
            ${generateTeam(team)}
          </div>
        </div>
      </div>

    </body>
  </html>
  `
};