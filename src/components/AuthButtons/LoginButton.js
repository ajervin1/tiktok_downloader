export default function LoginButton({login}) {
	function handleClick(  ) {
		login();
	}
	return <button onClick={handleClick} className="login-btn">
		Login
	</button>
}