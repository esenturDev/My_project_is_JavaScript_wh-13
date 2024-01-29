const url = "https://crudcrud.com/api/cf2a81d955ac4f019135191f98b5f7fa/users";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const registration = document.getElementById("registration");

const postUser = async () => {
	const user = {
		email: email.value,
		password: password.value,
		isLogin: false,
	};
	try {
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		});
		getUser();
	} catch (error) {
		console.log(error);
	}
	email.value = "";
	password.value = "";
};

const getUser = async () => {
	try {
		const res = await fetch(url);
		const result = await res.json();
		renderOrder();
	} catch (error) {
		console.log(error);
	}
};
getUser();

loginButton.addEventListener("click", () => postUser());

const renderOrder = () => {
	const dataList = data.map((item, index) => {
		return `
			<div class="login-img">
				<input type="${item.email}" placeholder="email" />
				<input type="${item.password}" placeholder="password" />
				<input type="${item.url}" placeholder="image" />
				<button>login</button>
				<button>login Is note</button>
			</div>
		`;
	});
	const getHtml = document.getElementById("login");
	getHtml.innerHTML = dataList.join("");
};
renderOrder();

// const renderTotalOrder = () => {
// 	const dataList = `
// 		<div id="form-div">
// 			<input id="email" type="email" placeholder="email..." />
// 			<input id="password" type="password" placeholder="password" />
// 			<button id="loginButton">Login</button>
// 			<button id="registration">Switch to Registration</button>
//       ${registration.onclick=dataResult.splice(index)}
// 		</div>
// 	`;
//   const getHtml = document.getElementById("form");
//   getHtml.innerHTML = dataList;
// };

registration.addEventListener("click", (id) => {
	const exisResult1 = data.find((item) => item.id === id);
	const exisResult2 = dataResult.find((item) => item.id === id);
	if(!exisResult1) {
		// renderTotalOrder();
		renderOrder();
		data.push(exisResult2);
	} else {
		alert("Такого нету!!!");
	}
	getUser();
});

// Зачем registration этот кнопка не работаеть?

// renderOrder();

// const resultRender = () => {
//   const
// }
