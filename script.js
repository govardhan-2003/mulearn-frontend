function myFunction(){
    let product_name = document.getElementById('name').value;
    let product_desc = document.getElementById('email').value;
    let product_price = document.getElementById('phone').value;
    fetch("http://127.0.0.1:8000/api/", {
          method: "POST",
          body: JSON.stringify({
                product_name: product_name,
                desc: product_desc,
                price: product_price
              }),

          headers: {
             "Content-type": "application/json; charset=UTF-8"
                    }
          })
          .then((response) => response.json())

}