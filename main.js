async function fetchUser() {
  const data = await fetch("https://randomuser.me/api/");

  const res = await data.json();
  let user = res.results[0];

  document.getElementById("userImage").src = user.picture.medium;
  document.getElementById(
    "userName"
  ).innerText = `${user.name.first} ${user.name.last}`;
  document.getElementById("userEmail").innerText = user.email;
  document.getElementById(
    "userLocation"
  ).innerText = `${user.location.city} , ${user.location.state} , ${user.location.country}`;
}
