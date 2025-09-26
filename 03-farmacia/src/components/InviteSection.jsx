import './InviteSection.css';
import fotoCamiseta from '../assets/farmarcia-camiseta.png';
import fotoCamisetas from '../assets/farmarcia-camisetas.png';
import fotoCartoes from '../assets/farmarcia-cartoes.png';
import Billboard from './Billboard.jsx';

function InviteSection() {
	return (
		<div className="invSec-container-main">
			<div className="invSec-container-content">
				<div className="invSec-container-convite-img">
					<div>
                        <Billboard />
                    </div>
					<div className="invSec-container-convite">
						<h1 className="invSec-title-inviteSection">
							Venha para a nossa Inauguração!
						</h1>
						<p className="invSec-text">
							A <strong>Farmárcia</strong> inicia um novo capítulo e queremos
							você conosco nesse momento especial. Prepare-se para um dia cheio
							de novidades, promoções exclusivas e muitas surpresas preparadas
							com carinho para você e sua família.
						</p>
					</div>
				</div>
				<div className="invSec-container-inauguracao">
					<div className="invSec-container-left">
						<h2>Durante a inauguração, você vai encontrar:</h2>
						<ul>
							<li>
								<strong>Descontos imperdíveis</strong> em medicamentos e
								produtos de beleza
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
						<div className="invSec-container-convite-final">
							<p className="invSec-text">
								Venha conhecer o novo espaço, aproveitar nossas ofertas e fazer
								parte da família Farmárcia. Sua presença tornará esse dia ainda
								mais inesquecível!
							</p>
						</div>
					</div>
                    <div className="invSec-container-right">
						<div className="invSec-inauguracao-imagens">
							<img
								src={fotoCamiseta}
								alt="camiseta"
								className="foto-promocional"
							/>
							<img
								src={fotoCamisetas}
								alt="camisetas"
								className="foto-promocional"
							/>
							<img
								src={fotoCartoes}
								alt="cartoes-promocionais"
								className="foto-promocional"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InviteSection;
