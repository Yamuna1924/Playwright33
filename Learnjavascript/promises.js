login(page)
  .then(() => addToCart(page))
  .then(() => checkout(page))
  .then(() => logout(page))
  .then(() => console.log("Test finished!"))
  .catch(err => console.error("Error:", err));