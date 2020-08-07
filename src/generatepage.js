// function to generate html

function generateTeam(team) {

  //funciton that generates Manager
  function generateManager(manager) {
    return `
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.getName()}</div>
          <div class="card-body">
            <h5 class="card-title">${manager.getRole()}</h5>
              <ul class="card-text">
                <li>ID: ${manager.getId()}</li>
                <li>Email: ${manager.getEmail()}</li>
                <li>Office ID: ${manager.getOfficeNumber()}</li>
              </ul>
        </div>
      </div>
    
    `
  };

  //funciton that generates Engineer
  function generateEngineer(engineer) {
    return `
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
          <div class="card-body">
            <h5 class="card-title">${engineer.getRole()}</h5>
              <ul class="card-text">
                <li>ID: ${engineer.getId()}</li>
                <li>Email: ${engineer.getEmail()}</li>
                <li>GitHub Username: ${engineer.getGithub()}</li>
              </ul>
        </div>
      </div>
    
    `
  };

  //function that generates Intern
  function generateIntern(intern) {
    return `
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
          <div class="card-body">
            <h5 class="card-title">${intern.getRole()}</h5>
              <ul class="card-text">
                <li>ID: ${intern.getId()}</li>
                <li>Email: ${intern.getEmail()}</li>
                <li>School: ${intern.getSchool()}</li>
              </ul>
        </div>
      </div>
    
    `
  };


  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
  );

  return html.join('');

}

//export functions to generate entire page
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <title>EmployeeTeam</title>
    </head>
    <body>

      <header>
        <h1>Employee Team Generator</h1>
          <p></p>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-group">
              ${generateTeam(team)}
            </div>
          </div>
        </div>
      </div>

    </body>
  </html>
  `
};