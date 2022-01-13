// index.js
module.exports = () => {

    const data = { products: [] }

    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.products.push(
        {
          id: i,
          title: `product${i}` ,
          description: `descritption of product ${i}`}
        
        )
    }



    return data

  }