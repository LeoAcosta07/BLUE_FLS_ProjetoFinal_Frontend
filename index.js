const urlApi = 'http://localhost:3001/tarefas';
const lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;

const getFilmes = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    
    
    data.map((filme) => {
        lista.insertAdjacentHTML('beforeend', `
    <div class="card">
    <img src="${filme.imagem}">
        <div class="content">
            <h2>${filme.status}</h2>
            <h3>${filme.titulo}</h3>
            <p>${filme.prioridade}</p>
            <p>${filme.status}</p>
            <p>${filme.prazo}</p>
            <a class="edit" onclick="putFilme1(${filme.id})">Editar</a>
            <a class="delete" onclick="deleteFilme(${filme.id})">Apagar</a>
        </div>
    </div>
    `)
    })
}
getFilmes();

// ----------------------- POST -----------------------


const submitForm = async (evento) => {

    evento.preventDefault();

    let nome = document.getElementById('nome');
    let imagem = document.getElementById('imagem');
    let nota = document.getElementById('nota');
    let genero = document.getElementById('genero');
  
    const filme = {
      nome: nome.value,
      imagem: imagem.value,
      nota: nota.value,
      genero: genero.value
    }

    if(!edicao) { 
  
     const request = new Request(`${urlApi}/add`, {
       method: 'POST',
       body: JSON.stringify(filme),
         headers: new Headers({
          'Content-Type': 'application/json'
       })
     })
      
      
     const response = await fetch(request);
     const result = await response.json();

     if(result) {
       getFilmes();
     }
  
   }else{

       const request = new Request(`${urlApi}/${idEdicao}`, {
        method: 'PUT',
         body: JSON.stringify(filme),
         headers: new Headers({
           'Content-Type': 'application/json'
         })
       })
  
      
       const response = await fetch(request);

       const result = await response.json();
  

       if(result) {
       getFilmes();
       }
       edicao = false;
   }
  
  

    nome.value = '';
    imagem.value = '';
    nota.value = '';
    genero.value = '';
  
    
    lista.innerHTML = '';
  }
  
 
  const getFilmeById =  async (id) => {
    const response =  await fetch(`${urlApi}/${id}`);
    return filme = response.json();
  }
  
  const putFilme1 = async (id) => {
    edicao = true;
    idEdicao = id;
    
    const idFilme = id;
    
    const filme = await getFilmeById(idFilme);
    console.log(filme);

    let nomeEd = document.getElementById('nome');
    let imagemEd = document.getElementById('imagem');
    let notaEd = document.getElementById('nota');
    let generoEd = document.getElementById('genero');
    
    
    nomeEd.value = filme.nome;
    imagemEd.value = filme.imagem;
    notaEd.value = filme.nota;
    generoEd.value = filme.genero;
  }

  
  const deleteFilme = async (id) => {
    const request = new Request(`${urlApi}/${id}`, {
      method: 'DELETE',
    })
    const response = await fetch(request);
    const data = await response.json();
    console.log(data.message);
  
    lista.innerHTML = '';
    getFilmes();
  }