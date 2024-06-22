import first from '../Images/prato1.jpg';
import second from '../Images/prato1.jpg';
import third from '../Images/prato1.jpg';


export default function Services() {
    return (
        <div id="services"><br />
            <h1>COMIDAS TÍPICAS </h1>
            <p>Abaixo, você encontrará uma seleção de pratos típicos mineiros que celebram a rica tradição culinária do estado
</p>

            <div className="card">
                <br />
                <img src={first} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Feijão Tropeiro</h2>
                    <p className="text">Feito com feijão, farinha de mandioca, linguiça, bacon e temperos.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Frango com Quiabo</h2>
                    <p className="text">Frango cozido com quiabo em molho temperado, servido com arroz branco.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Canjiquinha com Costelinha</h2>
                    <p className="text">Canjiquinha cozida com costelinha de porco e temperos.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Vaca Atolada</h2>
                    <p className="text">Costela de boi cozida lentamente com mandioca, resultando em um prato saboroso e reconfortante. É temperado com alho, cebola, cheiro-verde e pimenta.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Mingau de Milho Verde</h2>
                    <p className="text">Um mingau feito com milho verde ralado, leite, açúcar e canela. É um prato doce, frequentemente servido no café da manhã ou como sobremesa.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={third} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Angu à Mineira</h2>
                    <p className="text">Angu de milho servido com carne de porco ou frango, molho e couve.
</p>

                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
