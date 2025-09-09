import './WelcomeSection.css';
import Billboard from './Billboard';

function WelcomeSection() {
	return (
		<div className='container-main'>
			<div className="container-left">
				<Billboard/>
			</div>
			<div className="container-right">
				<h1 className="title-welcomeSection">Bem-vindo à Farmárcia</h1>
				<p className="text-welcomeSection">
					A Farmárcia inicia hoje um novo capítulo em sua história. Sob nova
					direção, o espaço foi totalmente renovado para receber você e sua
					família com ainda mais conforto, qualidade e dedicação
				</p>
			</div>
		</div>
	);
}

export default WelcomeSection;
