const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

prompt([
  {
    type:'input',
    name:'userName',
    message:'What is your name?'
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
])
.then(response=>{
  // console.log(response)
const info = `
* Name : ${response.userName}
* Email : ${response.email}
* Department : ${response.department}
* University : ${response.university}
* GitHub username : ${response.github}
`
  // const infolist =[]
  fs.readFile('info.json', 'utf8', (e, data) => {
    if (e) { console.log(e) }
  const infolist = JSON.parse(data)
  infolist.push(info)

  fs.writeFile('info.json', JSON.stringify(infolist), e => e ? console.log(e) : null)

})
 .catch(e => console.error(e))

