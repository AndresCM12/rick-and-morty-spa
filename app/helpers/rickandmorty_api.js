export async function ajax(props) {
  let { url, cbs } = props;
 let errors = []
  await fetch(url).then((response) =>
    response.ok ? response.json() : Promise.reject())
    .then((json) => cbs(json))
    .catch((error)=>{
      console.log(error.statusText || 'ups...')
    })
}
