function sendMail(contactForm) {
    emailjs.init("IgFdTxAplaFOQciCP");
    emailjs.send('gmail', 'Aiga_resume', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;
}
