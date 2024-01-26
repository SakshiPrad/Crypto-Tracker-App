const form = document.querySelector("#searchForm");
const res = document.querySelector("#tableResult");
const dropdowns = document.querySelectorAll("select");
var upd;

const fetchPrice = async (ctype) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "/Pd989bHp8013QpgjgKJgsCbABeY8+3jUu4m2T1c1PQ=",
    },
  };

  fetch("https://openapiv1.coinstats.app/coins", options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      let data = response.result.find((crypto) => crypto.id === ctype);
      // console.log(data.name)
      // document.write(data.price)
      const price = data.price;
      const volume = data.volume;
      const change = data.priceChange1d;
      const base = data.name;
      const target = "USD";
      res.innerHTML = `<tr style="background-color:#1a1aff; color:white; font-weight:700">
            <td>
                Property
            </td>
            <td>Value</td>
        </tr>
        <tr>
            <td>
                ${base}
            </td>
            <td>${price} ${target}</td>
        </tr>
        <tr>
            <td>
                Volume
            </td>
            <td>${volume}</td>
        </tr>
        <tr>
            <td>
                Change
            </td>
            <td>${change}</td>
        </tr>`;

      upd = setTimeout(() => fetchPrice(ctype), 10000);
    })
    .catch((err) => console.error("error"));
  // Return the result or null if not found
};

form.addEventListener("submit", async(e) => {
  e.preventDefault();
  if (upd) {
    clearTimeout(upd);
  }

  const ctype = form.elements.coinType.value;
  console.log(ctype)
  fetchPrice(ctype);
});
