

const searchBarInput = document.querySelector('[data-search-input]');
const searchContainer = document.querySelector('[data-search-result-container]');

searchBarInput.addEventListener('input', (event) => {
    const text = searchBarInput.value
    searchContainer.classList.remove('d-none');
    if (text === '') {
        searchContainer.classList.add('d-none');
    }
});

searchBarInput.addEventListener('blur', () => {
    searchContainer.classList.add('d-none');
});