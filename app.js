// fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck').then(res=>res.json()).then(data=>console.log(data.player[0]));

const serachBtn = ()=>{
    const serachField=document.getElementById("search-field");
    // console.log(serachField.value);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${serachField.value}`;
    fetch(url).then(res=>res.json()).then(data=>displayPlayer(data.player));



    serachField.value='';
}

const displayPlayer = (data)=>{
    console.log(data);
    const parentDiv = document.getElementById('parent');
    for (const player of data) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card m-5" style="width: 18rem">
              <img src="${player.strThumb}" class="card-img-top" alt="..." />
              <div class="card" style="width: 18rem">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h3 class="card-title">${player.strPlayer}</h3>
                  </li>
                  <li class="list-group-item">
                  <h5 class="card-title">Nationality :  ${player.strNationality}</h5>
                  </li>
                  <li class="list-group-item">
                  <h5 class="card-title">DoB :  ${player.dateBorn}</h5>
                  </li>
                  <li class="list-group-item">
                  <h5 class="card-title">Birth-Place :  ${player.strBirthLocation}</h5>
                  </li>
                  <li class="list-group-item">
                    <div class="d-flex justify-content-around">
                      <a href="#" onclick="deleteInfo()" class="btn btn-danger">Delete</a>
                      <a href="#" class="btn btn-primary" onclick="details(${player.idPlayer})">Details</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        `;
        parentDiv.appendChild(div);

    }
}
const deleteInfo = ()=>{
  console.log('delete');
}
const details = (info)=>{
  console.log(info);
}