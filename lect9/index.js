let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');
btn.addEventListener("click",()=>{
    let data=input.value
    
    fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
    then((info)=>{
        return info.json()

    }).then((val)=>{
       console.log(val);
       
            show(val)
    })

})


function show(val){


  for(let i of val){
    let img=  document.createElement("img")
    console.log(i.show.image.original,"heheh");
    img.setAttribute("src",i.show.image.original)
    
    
    list.append(img)

  }
//   img.setAttribute("src",val[0].show.image.
//     original)

    // list.appendChild(img)

}





// function fetchData(searchText) {
//   axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//   .then(function(response) {
//     manipulateDOM(response.data);
// })
// }

// function manipulateDOM(data) {
//   while(list.firstChild) {
//     list.firstChild.remove();
//   }

//   for (let d of data) {
//     if (d.show.image) {
//       let img = document.createElement('img');
//       img.setAttribute('src', d.show.image.original);
//       list.appendChild(img);
//     }  
//   }
// }

// btn.addEventListener('click', function() {
//   let searchText = input.value;
//   let data = fetchData(searchText);
// })