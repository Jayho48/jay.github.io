document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('printerStatus');

    function updatePrinterStatus() {
        fetch('/api/printer-status')
            .then(response => response.json())
            .then(data => {
                statusElement.textContent = `프린터 상태: ${data.state}`;
            })
            .catch(error => {
                console.error('프린터 상태를 가져오는 중 에러 발생:', error);
                statusElement.textContent = '프린터 상태를 가져오는 중 에러 발생.';
            });
    }

    updatePrinterStatus();
    setInterval(updatePrinterStatus, 5000); // 5초마다 업데이트
});
