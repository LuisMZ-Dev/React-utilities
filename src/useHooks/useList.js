

export const useList = (array) => {
    const create = array   

  return create.map(ele=><li key={ele.id}>{ele.id}. {ele.name}</li>)
}
