function http() {
  return {
    async request(url, options) {
      const response = await fetch(url, options)
        .then(response => {
          if (Math.round(response.status / 100) !== 2) {
            return Promise.reject(response);
          }
          return response.json();
        });
      return response;
    },
  };
}

const myHttp = http();

async function getHtmlAndCss() {
  try {
    const response = await myHttp.request('structure.json');
      return response;
  }catch(err) {
      console.log(err);
      return Promise.reject(err);
  }
}

function renderHtml(html) {
  document.body.insertAdjacentHTML('afterbegin', html);
}

function renderCss(styles) {
  const style = document.createElement('style');
  style.textContent =`${styles}`;
  document.body.appendChild(style);
}



getHtmlAndCss()
  .then(value => {
    renderHtml(value.html)
    renderCss(value.styles)
  })
  .catch(err => console.log(err))
