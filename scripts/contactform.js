function onSuccess() {
    console.log('SUCCESS!');
    
    // Fire the google analytics contact success event
    gtag('event', 'contact_success');

    var form = document.getElementById('contact-form');
    
    // Hide the form and show the success message
    form.classList.add('hidden');
    document.getElementById('contact-success').classList.remove('hidden');

    // Parse the form fields
    gtag('set', 'user_properties', {
        'crm_id': form.contact_number.value,
        'crm_name': form.contact_name.value,
        'crm_email': form.contact_email.value                    
    });
}

function onFailure(error) {
    console.log('FAILED...', error);
    
    // Fire the google analytics contact failed event
    gtag('event', 'exception', {
        'description': error,
        'fatal': false
    });
    
    document.getElementById('contact-form').classList.add('hidden');
    document.getElementById('contact-failed').classList.remove('hidden');
    document.getElementById('response-code').innerText = error;
}

function onSubmit(token) {                
    console.log('submitting...');

    // Fire the google analytics contact submit event
    gtag('event', 'contact_submit');

    var form = document.getElementById('contact-form');

    // generate a five digit number for the contact_number variable
    form.contact_number.value = Math.random() * 100000 | 0;

    // these IDs from the previous steps
    emailjs.sendForm('service_bx7vz0s', 'template_lywf8ka', form)
        .then(function() {
            onSuccess();
        }, function(error) {
            onFailure(error);
        }
    );
}

function validate(event) {
    event.preventDefault();

    grecaptcha.execute();

    console.log('validating...');
}

window.onload = function() {                
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        validate(event);
    });            
}