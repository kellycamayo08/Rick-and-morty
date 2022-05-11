export const printImg = (data, cont) => {

    data.forEach(element => {

        const {name, status, species, image, location, episode } = element
        

        cont.innerHTML += `
        <div class="card mb-5 " style="max-width: 440px; margin: 20px ; border-radius: 10px;">
            <div class="row g-0 " >
                <div class="col-md-4 "  >
                    <img src="${image}" class="img-fluid rounded-start" style="height:100% ;" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body" style="line-height:5px ;">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${status} - ${species}</p>
                        <br>
                        <p class="card-text"><small class="text-muted">Last known location:</small></p>
                        <p class="card-text">${location.name}</p><br>
                        <p class="card-text"><small class="text-muted">Episodes in which he appears</small></p>
                        <p class="card-text">${episode.length}</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        `
        
    });
}