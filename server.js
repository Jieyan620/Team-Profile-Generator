const prompt = require('inquirer').createPromptModule()
const fs = require('fs')


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
  console.log(engineerList, internList, managerList)



  
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
//     const info = `Name : ${response.userName}Email : ${response.email}Department : ${response.department}University : ${response.university}GitHub username : ${response.github}
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

