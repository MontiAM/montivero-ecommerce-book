export const getProducts = (productsData, category) => {
  if (category == undefined) {
    return productsData
  } else {
    const ret = productsData.filter( product => `:${product.category.replace(/ /g, "")}` == `${category}`);
    return ret
  } 
}

export const getProductsID = (productsData, id) => {
  return productsData.find( (product) => product.id == id)
}




