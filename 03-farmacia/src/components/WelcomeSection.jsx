import './WelcomeSection.css';
import Billboard from './Billboard';

function WelcomeSection() {
	return (
		<div className="welcSec-container-main">
			<div className='welcSec-container-content'>
				<div className="welcSec-container-right">
					<h1 className="welcSec-title-welcomeSection">Seja bem-vindo à Farmárcia</h1>
					<p className="welcSec-text-welcomeSection">
						A Farmárcia inicia hoje um novo capítulo em sua longa história de 86 anos. Sob nova
						direção, o espaço foi totalmente renovado para receber você e toda sua
						família com ainda mais conforto, qualidade e dedicação. Cada detalhe da nossa casa, pensado com carinho para com nossos clientes, desde acessibilidade para pessoas com deficiência até um atendimento humanizado.
					</p>
				</div>
				<div className="welcSec-container-left">
					<Billboard />
				</div>
			</div>
		</div>
	);
}

export default WelcomeSection;
