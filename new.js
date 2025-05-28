 document.getElementById('loveForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from reloading the page

      const yourName = document.getElementById('yourName').value.trim();
      const crushName = document.getElementById('crushName').value.trim();
      const resultDiv = document.getElementById('result');

      if (yourName === '' || crushName === '') {
        resultDiv.classList.remove('d-none', 'alert-info');
        resultDiv.classList.add('alert-danger');
        resultDiv.textContent = 'Please enter both names!';
        return;
      }

      // Generate a random love percentage (0-100)
      const loveScore = Math.floor(Math.random() * 101);

      resultDiv.classList.remove('d-none', 'alert-danger');
      resultDiv.classList.add('alert-info');
      resultDiv.innerHTML = `
        ❤️ <strong>${yourName}</strong> & <strong>${crushName}</strong> have a 
        <strong>${loveScore}%</strong> compatibility! ❤️<br>
        ${loveScore > 80 ? 'Perfect match! 💕' : loveScore > 50 ? 'Good vibes! 😊' : 'Needs work... 😬'}
      `;
    });