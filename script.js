document.getElementById('login-button').addEventListener('click', async function () {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'ambulatorio' && password === 'ambulatorio') {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwVOSZnHUeKfRUyxy66QGegekodo8H4Hsf1efk2awz2w7ZCCjTmT8hSww2HEJ4cJOMZ6Q/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          setor: "Cirurgia Cardíaca"
        })
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso.");
      } else {
        console.error("Erro ao enviar os dados.");
      }
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
    }

    window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiZmVkZjJiZDUtMDY3Ny00MzdlLTgxYTUtYmQyN2JlMjAzMTIzIiwidCI6IjNhNzhiMGNkLTdjOGUtNDkyOS08M2Q1LTE5MGE2Y2MwMTM2NSJ9";
  } else {
    document.getElementById('error-message').style.display = "block";
  }
});
