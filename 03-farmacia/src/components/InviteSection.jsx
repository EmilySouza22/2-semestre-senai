import './InviteSection.css';
import fotoCamiseta from '../assets/farmarcia-camiseta.png';
import fotoCamisetas from '../assets/farmarcia-camisetas.png';
import fotoCartoes from '../assets/farmarcia-cartoes.png';

function InviteSection() {
	return (
		<div className="invSec-container-main">
			<div className="invSec-container-content">
				<div className="invSec-container-convite">
					<h1 className="invSec-title-welcomeSection">
						Venha para a nossa Inauguração!
					</h1>
					<p>
						A <strong>Farmárcia</strong> inicia um novo capítulo e queremos você
						conosco nesse momento especial. Prepare-se para um dia cheio de
						novidades, promoções exclusivas e muitas surpresas preparadas com
						carinho para você e sua família.
					</p>
				</div>
				<div className="invSec-container-lista">
					<h2>Durante a inauguração, você vai encontrar:</h2>
					<ul>
						<li>
							<strong>Descontos imperdíveis</strong> em medicamentos e produtos
							de beleza
						</li>
						<li>
							<strong>Brindes e camisetas personalizadas</strong> para nossos
							primeiros clientes
						</li>
						<li>
							<strong>Cartões fidelidade</strong> para começar a acumular
							benefícios já no primeiro dia
						</li>
						<li>
							<strong>Sorteios especiais</strong> com prêmios exclusivos da
							nossa marca
						</li>
					</ul>
				</div>
				<div className='invSec-container-imagens-convite'>
					<div className="invSec-container-convite-final">
						<p>
							Venha conhecer o novo espaço, aproveitar nossas ofertas e fazer
							parte da família Farmárcia. Sua presença tornará esse dia ainda
							mais inesquecível!
						</p>
					</div>
					<div className="invSec-inauguracao-imagens">
						<img src={fotoCamiseta} alt="camiseta" className="foto-camiseta" />
						<img src={fotoCamisetas} alt="camiseta" />
						<img src={fotoCartoes} alt="camiseta" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default InviteSection;
