const form = document.querySelector(".form-habits")
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(event) {
	let today = new Date().toLocaleDateString("pt-br").slice(0, -5)

	const dayExists = nlwSetup.dayExists(today)

	if (dayExists) {
		window.alert(`O dia ${today} já existe!!!`)
		return
	}

	nlwSetup.addDay(today)
}

function save() {
	localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = localStorage.getItem("NLWSetup@habits") || {}

nlwSetup.setData(JSON.parse(data))
nlwSetup.load()
