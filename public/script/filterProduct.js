
const filters = document.querySelectorAll("filter-item");


function initFilter() {

    for (const filter of filters) {
        filter.addEventListener("click", (e) => {
            const selectedFilter = e.target.dataset.filter;
            console.log(selectedFilter);
        });
    }
    
}