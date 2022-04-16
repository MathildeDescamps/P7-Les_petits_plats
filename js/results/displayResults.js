//La section où l'on va afficher les résultats de recherche
const matchList = document.getElementById('results');

//Afficher les résultats de la (ou les) recherche(s)
const displayResults = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card">
                <div class="card-inner bg-light-gray">
                    <div class="card-img-top" style="background: url('https://fakeimg.pl/800x400/C6BEBE/?text=Yummy')">
                    </div>
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">${match.name}</h4>
                            <div class="time">
                                <span class="material-icons material-icons-outlined">access_time</span>
                                <p>${match.time} min</p>
                            </div>
                        </div>
                        <div class="description">
                            <p class="card-text">${match.description.slice(0, 200) + '...'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join(' ');
        matchList.innerHTML = html;
    } else {
        matchList.innerHTML = '';
    }
}
export default displayResults;