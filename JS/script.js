async function getFileContent() {
    let filename = document.getElementById('filenameInput').value;
    try {
        let response = await fetch(`http://localhost:4000/${fileServer.js}`);
        if (!response.ok) {
            throw new Error('File not found');
        }
        let fileContent = await response.text();
        document.getElementById('fileContent').innerText = fileContent;
    } catch (error) {
        document.getElementById('fileContent').innerText = error.message;
    }
}



