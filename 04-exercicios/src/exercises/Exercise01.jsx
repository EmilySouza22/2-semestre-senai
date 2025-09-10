import Sentenca from '../components/Sentenca.jsx'

function Exercise01() {
    //se o valor for menor que 20 reais lucrar por 45%
    //se o valor for acima de 20 reais lucrar por 30%
    function ajusteValor(){
        
    }

    return (
        <div>
            <Sentenca 
                numero={'1.'} 
                sentenca={'Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro será de 30%. Faça um programa que entre com o valor do produto e mostre o valor de venda'}
            />
            <p>Digite o valor do produto</p>
            <input  type="number"/>
            <button>Ver valor de venda</button>
        </div>

    )
}

export default Exercise01