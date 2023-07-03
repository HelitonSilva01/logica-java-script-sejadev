/*
function upload (){
  setTimeout (() => {
    console.log ("02 - upload concluido")
  },2000)
}

function uploadDeFoto () {
  console.log("01 - iniciando upload")
  upload()
  console.log("03 - execução finalizada")
}
  
uploadDeFoto ()
*/

/*
function upload (){
  setTimeout (() => {
    console.log ("02 - upload concluido")
  },2000)
}

async function uploadDeFoto () {
  console.log("01 - iniciando upload")
  await upload()
  console.log("03 - execução finalizada")
}
  
uploadDeFoto ()
*/

/*
function upload (){
  return setTimeout (() => {
    console.log ("02 - upload concluido")
  },2000)
}

function uploadDeFoto () {
  console.log("01 - iniciando upload")
 const response = upload()
 console.log(response)
  console.log("03 - execução finalizada")
}
  
uploadDeFoto ()
*/

function upload (){
return new Promise ((resolve, reject) => {
  setTimeout(() => {
    console.log("02 - upload concluido")
    callback()
  }, 2000)
})
}
async function uploadDeFoto () {
  console.log("01 - iniciando upload")
  await upload()
  console.log("03 - execução finalizada")
}
  
uploadDeFoto ()