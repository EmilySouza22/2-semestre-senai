import './Titulo2.css' 

function Titulo2({ texto, emoji }) {
	return (
		<h2 className="titulo2-container">
			{texto} {emoji}
		</h2>
	);
}

export default Titulo2;
