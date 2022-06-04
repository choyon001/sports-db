
const serachBtn = ()=>{
    document.getElementById("spinner").style.display = 'block';
    const serachField=document.getElementById("search-field");
    // console.log(serachField.value);
    if(serachField.value == null || serachField.value ==''){
      alert('your search field is empty');
    }
    else{
      const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${serachField.value}`;

    fetch(url).then(res=>res.json()).then(data=>displayPlayer(data.player));
    }
    

    serachField.value='';
    document.getElementById("spinner").style.display = 'none';
}

const displayPlayer = (data)=>{
    // console.log(data);
    if(data==null){
      alert('sorry!Your player is not in our list');
    }
    else{
      const parentDiv = document.getElementById('parent');
    parentDiv.innerHTML='';
    for (const player of data) {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card m-5" style="width: 18rem">
              <img src="${player.strThumb}" class="card-img-top" alt="The image is not available" />
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
                      <a href="#" onclick="deleteInfo(event)" class="btn btn-danger">Delete</a>
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
}
// delete button details
const deleteInfo = (e)=>{
  e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display ='none';
}

const details = (info)=>{
  // console.log(info);
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
  fetch(url).then(res=>res.json()).then(data=>displayInfo(data.players[0]));
}

const displayInfo = player=>{
  // console.log(player);
  const detailsParent = document.getElementById("player-detail");
  detailsParent.innerHTML='';
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="card m-5" style="width: 18rem">
        <img src="${player.strThumb}" class="card-img-top" alt="The image is not available" />
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
            <h5 class="card-title">Gender :  ${player.strGender}</h5>
            </li>
            <li class="list-group-item">
            <p class="card-title">${player.strDescriptionEN}</p>
            </li>
            
          </ul>
        </div>
      </div>
  `;
  detailsParent.appendChild(div);

}
