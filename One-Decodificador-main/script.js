//getting elements
const textToCrypt = document.getElementById('textToCrypt')
const refreshBtn = document.getElementById("reiniciarButton")
const buttonCrypt = document.getElementById('cryptButton')
const buttonDecrypt = document.getElementById('decryptButton')
const decodedNullContainer = document.getElementById('decodedNullContainer')
const mainDecodedContainer = document.getElementById('mainDecodedContainer')
const textDecodedContainer = document.getElementById('textDecodedContainer')
const copyCryptButton = document.getElementById('copyCryptButton')

const viewportWidth = window.innerWidth

//crypt functions
const crypt = [
	['e', 'enter'],
	['i', 'imes'],
	['a', 'ai'],
	['o', 'ober'],
	['u', 'ufat'],
]
const cryptFunc = (string, type = 'encrypt') => {
	handleDomCrypt()
	let message = string
	if (type === 'encrypt') {
		for (let i = 0; i < crypt.length; i++) {
			message = message.replaceAll(crypt[i][0], crypt[i][1])
		}
	} else {
		for (let i = 0; i < crypt.length; i++) {
			message = message.replaceAll(crypt[i][1], crypt[i][0])
		}
	}
	return message
}
const handleCrypt = () => {
	const message = textToCrypt.value
	cryptFunc(message)
	textDecodedContainer.innerHTML = cryptFunc(message, 'encrypt')
}
const handleDecrypt = () => {
	const message = textToCrypt.value
	textDecodedContainer.innerHTML = cryptFunc(message, 'decrypt')
}
const handleDomCrypt = () => {
	decodedNullContainer.style.display = 'none'
	textDecodedContainer.style.display = 'block'
	copyCryptButton.style.display = 'block'
	if (viewportWidth <= 768) {
		mainDecodedContainer.style.height = '50rem !important'
	}
}
const handleCopyToClipboard = async () => {
	try {
		const message = textDecodedContainer.textContent
        await navigator.clipboard.writeText(message)

		if(message == ""){
			alert("Não existe texto para ser copiado!")
		}else{

			alert("Texto copiado!")

		}
	} catch (error) {
        console.log(error.message)
        alert('Falha ao copiar')
    }
}


function handleClick() {
	window.location.reload();
  }
  
  refreshBtn.addEventListener("click", handleClick);

console.log(viewportWidth)

buttonCrypt.addEventListener('click', handleCrypt)

buttonDecrypt.addEventListener('click', handleDecrypt)
copyCryptButton.addEventListener('click', handleCopyToClipboard)
