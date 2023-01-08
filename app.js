const signUpBtn = document.querySelector("#sign-up-button");
const signInBtn = document.querySelector("#sign-in-button");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
	console.log(3);
	container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});
