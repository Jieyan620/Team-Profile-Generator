const prompt = require('inquirer').createPromptModule()
const fs = require('fs')


function allInfoCard(infolist) {

  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar sticky-top navbar-light bg-light ">
  <h1>Employees Info</h1>
  <div class="d-flex">
    <div class="dropdown mr-1">
      <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Employees Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <a class="dropdown-item" href="index.html">All</a>
        <a class="dropdown-item" href="manager.html">Manager</a>
        <a class="dropdown-item" href="engineer.html">Engineer</a>
        <a class="dropdown-item" href="intern.html">Intern</a>
      </div>
    </div>
  </div>
  </nav>
  <div id="display" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; margin-right: 20px; margin-left: 20px; margin-top: 10px;">
   ${infolist.map(ele=>`
     <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h5  id="name" class="card-title">${ele.userName}</h5>
      </div>
      <div class="card-body">
        <h7>Email : ${ele.email}</h7><br>
        <h7>Department : ${ele.department}</h7><br>
        <h7>University : ${ele.university}</h7><br>
        <h7>Github : ${ele.github}</h7><br>
        <h7>Type : ${ele.type}</h7>
      </div>
    </div>
     `
   ).join('')
  }

  </div>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
</body>
</html>
  `

fs.writeFile('public/index.html', html, e=> e? console.log(e): null)

}

function allEnginCard(engineerList) {
  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar sticky-top navbar-light bg-light ">
  <h1>Employees Info</h1>
  <div class="d-flex">
    <div class="dropdown mr-1">
      <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Employees Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <a class="dropdown-item" href="index.html">All</a>
        <a class="dropdown-item" href="manager.html">Manager</a>
        <a class="dropdown-item" href="engineer.html">Engineer</a>
        <a class="dropdown-item" href="intern.html">Intern</a>
      </div>
    </div>
  </div>
  </nav>
  <div id="display" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; margin-right: 20px; margin-left: 20px; margin-top: 10px;">
   ${engineerList.map(ele => `
     <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h5  id="name" class="card-title">${ele.userName}</h5>
      </div>
      <div class="card-body">
        <h7>Email : ${ele.email}</h7><br>
        <h7>Department : ${ele.department}</h7><br>
        <h7>University : ${ele.university}</h7><br>
        <h7>Github : ${ele.github}</h7><br>
        <h7>Type : ${ele.type}</h7>
      </div>
    </div>
     `
  ).join('')
    }

  </div>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
</body>
</html>
  `

  fs.writeFile('public/engineer.html', html, e => e ? console.log(e) : null)

}

function allInternCard(internList) {
const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar sticky-top navbar-light bg-light ">
  <h1>Employees Info</h1>
  <div class="d-flex">
    <div class="dropdown mr-1">
      <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Employees Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <a class="dropdown-item" href="index.html">All</a>
        <a class="dropdown-item" href="manager.html">Manager</a>
        <a class="dropdown-item" href="engineer.html">Engineer</a>
        <a class="dropdown-item" href="intern.html">Intern</a>
      </div>
    </div>
  </div>
  </nav>
  <div id="display" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; margin-right: 20px; margin-left: 20px; margin-top: 10px;">
   ${internList.map(ele => `
     <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h5  id="name" class="card-title">${ele.userName}</h5>
      </div>
      <div class="card-body">
        <h7>Email : ${ele.email}</h7><br>
        <h7>Department : ${ele.department}</h7><br>
        <h7>University : ${ele.university}</h7><br>
        <h7>Github : ${ele.github}</h7><br>
        <h7>Type : ${ele.type}</h7>
      </div>
    </div>
     `
  ).join('')
    }

  </div>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
</body>
</html>
  `

  fs.writeFile('public/intern.html', html, e => e ? console.log(e) : null)

}

function allmanaCard(managerList) {
  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
  <nav class="navbar sticky-top navbar-light bg-light ">
  <h1>Employees Info</h1>
  <div class="d-flex">
    <div class="dropdown mr-1">
      <button type="button" class="btn btn-info dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        Employees Type
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <a class="dropdown-item" href="index.html">All</a>
        <a class="dropdown-item" href="manager.html">Manager</a>
        <a class="dropdown-item" href="engineer.html">Engineer</a>
        <a class="dropdown-item" href="intern.html">Intern</a>
      </div>
    </div>
  </div>
  </nav>
  <div id="display" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; margin-right: 20px; margin-left: 20px; margin-top: 10px;">
   ${managerList.map(ele => `
     <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h5  id="name" class="card-title">${ele.userName}</h5>
      </div>
      <div class="card-body">
        <h7>Email : ${ele.email}</h7><br>
        <h7>Department : ${ele.department}</h7><br>
        <h7>University : ${ele.university}</h7><br>
        <h7>Github : ${ele.github}</h7><br>
        <h7>Type : ${ele.type}</h7>
      </div>
    </div>
     `
  ).join('')
    }

  </div>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
</body>
</html>
  `

  fs.writeFile('public/manager.html', html, e => e ? console.log(e) : null)

}

function htmlCard(infolist) {
  let engineerList = [],
      managerList = [],
      internList = []
  // console.log(infolist)
  for (let i = 0; i < infolist.length; i++) {
    const element = infolist[i]

    if (element.type === 'engineer' ) {
      engineerList.push(element)
    } else if (element.type === 'intern') {
      internList.push(element)
    } else if (element.type === 'manager') {
      managerList.push(element)
    }
  }
  // console.log(engineerList, internList, managerList)

  allInfoCard(infolist)
  allEnginCard(engineerList)
  allInternCard(internList)
  allmanaCard(managerList)
}





prompt([
  {
    type: 'input',
    name: 'userName',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'department',
    message: 'What is your department?'
  },
  {
    type: 'input',
    name: 'university',
    message: 'What is your university?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'list',
    name: 'type',
    message: 'Which types do you belong to?',
    choices:['engineer','intern','manager']
  }
])
  .then(response => {
// console.log(response)
// const info = `Name : ${response.userName}Email : ${response.  email}Department : ${response.department}University : ${response.university}GitHub username : ${response.github}
// `
    let infolist = []
    fs.readFile('info.json', 'utf8', (e, data) => {
      if (e) { console.log(e) }
      infolist = JSON.parse(data)
      infolist.push(response)

      htmlCard(infolist)

      fs.writeFile('info.json', JSON.stringify(infolist), e => e ? console.log(e) : null)

    })
  })
  .catch(e => console.error(e))

