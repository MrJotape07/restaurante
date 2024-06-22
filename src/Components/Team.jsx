import first from '../Images/colab1.jpg';


export default function Team() {
    return (
        <div id="team"><br />
            <h1>Melhor Equipe</h1>
            <div className="teamtext">
                <br />
                <h4 className='flint'>Chef Djalma Victor</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Djalma tem 35 anos. A paixão pela culinária foi despertada quando ele ainda era muito jovem. Ele conta que a avó era uma grande cozinheira e na casa dela tinha uma marmitaria. Foi nessa época que ele começou a ter contato com o universo da cozinha. E estar perto das panelas, segundo ele, é um jeito de se sentir próximo da família.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>João Mendes</h4>
                <img src={first} alt="pic" />
                <br />
                <p>João Mendes, também conhecido como Quim, natural de Diamantina, Minas Gerais, com um talento especial para preparar pratos de carne. Cresceu ajudando seu pai no açougue da família e aprendeu a arte de escolher e preparar cortes de carne perfeitos. Sua dedicação e habilidade com a carne fazem dele uma figura respeitada na culinária mineira.</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Ana Costa</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Nascida em Belo Horizonte e criada na cidade de Ibirité, a mineira Ana Costa é conhecida por suas habilidades e sua vasta experiência em pratos de boteco. Desde jovem, ela trabalhava no bar de seu tio, onde aprendeu a fazer petiscos e pratos rápidos como fígado acebolado e costelinha frita.</p>
                <br />
            </div>
        </div>
    )
}
