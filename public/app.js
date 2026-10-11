document.getElementById("go").onclick = async () => {
  const text = document.getElementById("text").value;
  const body = await (await fetch("/api", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({text})})).json();
  document.getElementById("out").textContent = "UPPER\n" + body.upper + "\n\nlower\n" + body.lower + "\n\nTitle\n" + body.title;
};
