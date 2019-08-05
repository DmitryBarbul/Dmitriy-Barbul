//Custom HTTP Module

function myHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });
        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  };
}

//Init http module

const http = myHttp();
const newsServise = (function() {
  const apiKey = "2c0f1ee00f8f46f5916226f221bf3858";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", category = "technology", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
        cb
      );
    },
    everything(text, cb) {
      http.get(`${apiUrl}/everything?q=${text}&apiKey=${apiKey}`, cb);
    }
  };
})();

//Elements
const newsContainer = document.querySelector(".news-container .row");
const form = document.forms["newsControls"];
const countrySelect = form.elements["country"];
const categorySelect = form.elements["category"];
const searchEverythingNews = form.elements["autocomplete-input"];

document.addEventListener("DOMContentLoaded", function() {
  M.AutoInit();
  loadNews();
});

function loadNews() {
  const countrySelectValue = countrySelect.value;
  const categorySelectValue = categorySelect.value;
  const searchEverythingNewsValue = searchEverythingNews.value;

  if (!searchEverythingNewsValue)
    newsServise.topHeadlines(
      countrySelectValue,
      categorySelectValue,
      onGetResponse
    );
  else newsServise.everything(searchEverythingNewsValue, onGetResponse);
}

function onGetResponse(err, res) {
  if (err) {
    alert(err);
    return;
  }

  if (!res.articles.length) {
    alert("Новостей не найдено");
    return;
  }

  renderNews(res.articles);
}

function renderNews(newsItems) {
  let fragment = "";

  newsItems.forEach(item => {
    const el = newsTemplate(item);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

function newsTemplate({ url, title, description, urlToImage } = {}) {
  return `
  <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ""}</span>
        </div>
        <div class="card-content">
          <p>${description || ""}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

form.addEventListener("submit", onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }

  loadNews();
}