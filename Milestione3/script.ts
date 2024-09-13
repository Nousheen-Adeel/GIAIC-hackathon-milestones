//connecting form and display

const form = document.getElementById('resume-form') as HTMLElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//handle form submission

form.addEventListener('submit', (event: Event)=> {
  event.preventDefault()

  //get form data
  const name = (document.getElementById('name') as HTMLInputElement).value
  const email = (document.getElementById('email') as HTMLInputElement).value
  const phone = (document.getElementById('phone') as HTMLInputElement).value
  const education = (document.getElementById('education') as HTMLInputElement).value
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

//generate resume content dynamically

const resumeHTML=`
<h2><b>Resume</b></h2>
<h3><b>Personal Information</b></h3>
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Phone:</b> ${phone}</p>

  <h3><b>Education</b></h3>
  <p>${education}</p>

  <h3><b>Experience</b></h3>
  <p>${experience}</p>

  <h3><b>Skills</b></h3>
  <p>${skills}</p>
` ;

//display resume

resumeDisplayElement.innerHTML = resumeHTML

})  