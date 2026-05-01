const handleForm = () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalBtnText = btn.textContent;
            btn.textContent = 'Sending...';

            const serviceID = 'service_lw1mv3q';
            const templateID = 'template_d0bq2oj';

            emailjs.sendForm(serviceID, templateID, form)
                .then(() => {
                    btn.textContent = 'Message Sent! ⭐';
                    form.requestFullscreen();
                    setTimeout(() => btn.textContent = originalBtnText, 3000);
                }, (err) => {
                    btn.textContent = 'Failed to Send ☹️';
                    alert(JSON.stringify(err));
                    setTimeout(() => btn.textContent = originalBtnText, 3000);
                
                });
        });
    }

};
document.addEventListener('DOMContentLoaded', () => {
    handleForm();
});

    