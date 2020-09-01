export default function connectionButton(room){
    const connectBtn = document.getElementById('y-connect-btn');
    connectBtn.addEventListener('click', () => {
        if (provider.shouldConnect) {
            provider.disconnect();
            connectBtn.textContent = 'Connect';
        } else {
            provider.connect()
            connectBtn.textContent = 'Disconnect';
        }
    })
}