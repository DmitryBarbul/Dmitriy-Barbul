const themes = {
  white: {
    '--box-bg': 'white',
    '--box-text-color': 'black',
  },
  black: {
    '--box-bg': 'black',
    '--box-text-color': 'white',
  },
};

const controls = [
  { name: 'themeName', type: 'text', label: 'ThemeName', id: 'themeName' },
  { name: 'color', type: 'color', label: 'Box-Background',  id: 'color--box-bg' , 'data-var': '--box-bg'},
  { name: 'color', type: 'color', label: 'Box-Text-Background', id: 'color--box-text-color',  'data-var': '--box-text-color'},
  { name: '', type: 'button', label: 'Set-custom-theme' }
];


const themeSelect = document.getElementById('themes');
const form = document.forms['customThemeForm'];


for (let i = 0; i < controls.length; i++) {
  let divContainer = document.createElement('div');
  let input = document.createElement('input');
    if (i !== controls.length -1) { 
      input.setAttribute('name', controls[i].name);
      input.setAttribute('type', controls[i].type);
      input.setAttribute('label', controls[i].label);
      input.setAttribute('id', controls[i].id);
      input.setAttribute('data-var', controls[i]['data-var']);


      divContainer.appendChild(input);
      form.appendChild(divContainer);
  } else {
    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Add new theme';
    form.appendChild(button);
 }
}
const inputThemeName = form.elements['themeName'];
const colorInputs = document.querySelectorAll('[data-var]');

themeSelect.addEventListener('change', e => {
  const themeVariables = themes[themeSelect.value];
  Object.entries(themeVariables).forEach(([key, value]) => {
    document.body.style.setProperty(key, value);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const newTheme = {};
  const newThemeName = inputThemeName.value;
  colorInputs.forEach(input => {
    const key = input.dataset.var;
    const value = input.value;
    newTheme[key] = value;
  });

  themes[newThemeName] = newTheme;
  const newSelectOption = new Option(newThemeName, newThemeName);
  themeSelect.appendChild(newSelectOption);
  form.reset();
});
