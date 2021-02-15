const cards = employeedata => {
  return `
  ${employeedata.map(employee => {
    let optional = '';
    let icon = ''
    switch (employee.role) {
      case 'Manager':
        optional = "Office Number: " + employee.officeNumber;
        icon = 'fas fa-mug-hot';
        break;
      case 'Engineer':
        optional = 'Github: <a href="https://github.com/' + employee.github + '"target="_blank">' + employee.github + '</a>'
        icon = 'fas fa-glasses';
        break;
      case 'Intern':
        optional = "School: " + employee.school;
        icon = 'fas fa-user-graduate';
        break;
      default:
        break;
    }
    return `
      <div class = "col-sm-4 newcard">
      <div class="card" style="width: 19rem;">
        <div class="card-body">
            <h4 class="card-title">${employee.name}<br /><br /><i class='${icon}'></i> ${employee.role}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}" target="_blank">${employee.email}</a></li>
            <li class="list-group-item">${optional}</li>
        </ul>
      </div>
    </div>
      `;
  })
  .join("\n")}
  `;
};
// create template literal
module.exports = employeedata => {
     console.log(employeedata);
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
            <nav class="flex-row">
              <div class="ml-2 my-1 px-2 py-1 bg-secondary text-light" href="">${employeedata[0].teamName}</div>
            </nav>
          </div>
        </header>
        
        <main class='container'>
          <div class='content-wrapper row'> 
              ${cards(employeedata)}
          </div>
        </main>

        <footer class="container text-right py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Rose</h3>
        </footer>
      </body>   
    </html>
    `;
  };
