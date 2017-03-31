const MainView = {
  CreateElement() {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'quick-custom-gsearch';
    const termDiv = document.createElement('div');
    termDiv.className = 'term';
    const languageDiv = document.createElement('div');
    languageDiv.className = 'language';

    return mainDiv;
  },
  BindElement(div) {
    const ucs = document.querySelector('div#ucs');
    ucs.insertBefore(div, ucs.firstChild);
  },
};

module.exports = MainView;
