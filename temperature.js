document.addEventListener('DOMContentLoaded', function() {
  const toolTemperatureElement = document.getElementById('toolTemperature');
  const bedTemperatureElement = document.getElementById('bedTemperature');

  function updateTemperature() {
    fetch('/api/printer-temperature')
      .then(response => response.json())
      .then(data => {
        toolTemperatureElement.textContent = data.toolTemperature;
        bedTemperatureElement.textContent = data.bedTemperature;
      })
      .catch(error => {
        console.error('온도 정보를 가져오는 중 에러 발생:', error);
        toolTemperatureElement.textContent = 'NULL';
        bedTemperatureElement.textContent = 'NULL';
      });
  }

  updateTemperature();
  setInterval(updateTemperature, 5000); // 5초마다 업데이트
});
  