const bringProducts = (PRODUCTOS) => {
    const myPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(PRODUCTOS)
      }, 2000)  
    })
    return myPromise
  }

export default bringProducts