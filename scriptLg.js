const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const message = document.getElementById("message");

const validUsername = 'AdminW123';
const validPassword = 'HighT34Adm1n';
let attempts = 3;

form.addEventListener('submit', (e) => {
	e.preventDefault(); 
    if (username.value === validUsername && password.value === validPassword) 
	{
        message.textContent = 'Login successful!';
        message.style.color = "green";
		setTimeout(() => {
			window.location.href = "productsPage.html"; 
		}, 500); 
            
    } 
	else {
			attempts-=1;
			if(attempts > 0){
				message.textContent = `Incorrect Username or Password! You have ${attempts} attempts left.` ;
				message.style.color = "red";
			
			}
			else if(attempts == 0)
			{
				message.textContent = "You have exceeded the maximum attempts. Redirecting...";
				message.style.color = "red";
				setTimeout(() => {
					window.location.href = "error.html";
				}, 1000); 
			}
				
        }
});
		
	