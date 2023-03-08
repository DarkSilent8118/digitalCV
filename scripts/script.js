// Handle email input from user to reveal personal information
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailText = document.querySelector('.email-text');
const confirmButton = document.querySelector('.confirm-button');
const emailInput = document.querySelector('.email-input');
const infoRevealed = document.querySelector('.info-revealed');

// Get all elements involving with job-info section
const experienceEl = document.getElementById('experience');
const educationEl = document.getElementById('education');
const hobbyEl = document.getElementById('hobby');
const langSkillEl = document.getElementById('lang-skill');
const otherSkillEl = document.getElementById('other-skill');

const btnExperience = document.getElementById('btn-experience');
const btnEducation = document.getElementById('btn-education');
const btnHobby = document.getElementById('btn-hobby');
const btnLangSkill = document.getElementById('btn-lang-skill');
const btnOtherSkill = document.getElementById('btn-other-skill');

const toggleDisplay = function(obj) {
  let nextELSibling = obj.nextElementSibling;
  nextELSibling.classList.toggle('hide-info');
  obj.textContent = nextELSibling.classList.contains('hide-info') ? '▼ View More' : '▲ View Less';
};

// validation for email
(function () {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated');

      let inputText = emailText.value.match(regex);

      if (inputText) {
        emailInput.classList.add('hide-info');
        infoRevealed.classList.remove('hide-info');
      } else {
        emailInput.classList.remove('hide-info');
        infoRevealed.classList.add('hide-info');
      }
    }, false)
  });

  // Enable tooltip for email textbox
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
})()

// Handling mouseover and mouseout all elements in job-info section
// experienceEl 
experienceEl.addEventListener('mouseover', function () {
  btnExperience.classList.toggle('hide-info');
});

experienceEl.addEventListener('mouseout', function () {
  btnExperience.classList.toggle('hide-info');
});

btnExperience.addEventListener('click', function () {
  toggleDisplay(this);
});

// educationEl
educationEl.addEventListener('mouseover', function () {
  btnEducation.classList.toggle('hide-info');
  
});

educationEl.addEventListener('mouseout', function () {
  btnEducation.classList.toggle('hide-info');
});

btnEducation.addEventListener('click', function () {
  toggleDisplay(this);
});

// hobbyEl
hobbyEl.addEventListener('mouseover', function () {
  btnHobby.classList.toggle('hide-info');
});

hobbyEl.addEventListener('mouseout', function () {
  btnHobby.classList.toggle('hide-info');
});

btnHobby.addEventListener('click', function () {
  toggleDisplay(this);
});

// langSkillEl
langSkillEl.addEventListener('mouseover', function () {
  btnLangSkill.classList.toggle('hide-info');
});

langSkillEl.addEventListener('mouseout', function () {
  btnLangSkill.classList.toggle('hide-info');
});

btnLangSkill.addEventListener('click', function () {
  toggleDisplay(this);
});

// otherSkillEl
otherSkillEl.addEventListener('mouseover', function () {
  btnOtherSkill.classList.toggle('hide-info');
});

otherSkillEl.addEventListener('mouseout', function () {
  btnOtherSkill.classList.toggle('hide-info');
});

btnOtherSkill.addEventListener('click', function () {
  toggleDisplay(this);
});