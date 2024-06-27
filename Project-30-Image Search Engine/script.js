let searchForm = document.getElementById("search-form");
        let searchBox = document.getElementById("search-box");
        let searchResult = document.getElementById("search-result");
        let showMoreBtn = document.getElementById("show-more-btn");

        let keyword = "";
        let page = 1;
        let accessKey = "f6AQyVWo9O3ndPPDHxXr51ACG1X5CIZH8tKFm0xl3PQ";

        async function getPhotos() {
            keyword = searchBox.value;

            let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

            let response = await fetch(url);

            let data = await response.json();

            if (page === 1) {
                searchResult.innerHTML = "";
            }

            let results = data.results;

            results.map((result) => {
                let image = document.createElement("img");
                image.src = result.urls.small;
                let imageLink = document.createElement("a");
                imageLink.href = result.links.html;
                imageLink.target = "_blank";
                imageLink.appendChild(image);
                searchResult.appendChild(imageLink);
            });

            showMoreBtn.style.display = "block";
            
        }

        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            page = 1;
            getPhotos();
        });

        showMoreBtn.addEventListener("click", () => {
            page++;
            getPhotos();
        });