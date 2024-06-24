document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const decreaseBtn = item.querySelector(".decrease");
    const increaseBtn = item.querySelector(".increase");
    const deleteBtn = item.querySelector(".delete-btn");
    const quantityInput = item.querySelector(".quantity-input");

    decreaseBtn.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
      }
    });

    increaseBtn.addEventListener("click", function () {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
      updateTotalPrice();
    });

    deleteBtn.addEventListener("click", function () {
      item.remove();
      updateTotalPrice();
    });

    likeBtn.addEventListener("click", function () {
      likeBtn.classList.toggle("liked");
    });

    quantityInput.addEventListener("input", function () {
      updateTotalPrice();
    });
  });

  function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach((item) => {
      const pricePerItem = parseFloat(
        item.querySelector(".item-info p").textContent.replace("Price: $", "")
      );
      const quantity = parseInt(item.querySelector(".quantity-input").value);
      totalPrice += pricePerItem * quantity;
    });

    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(
      2
    )}`;
  }

  updateTotalPrice();
});
