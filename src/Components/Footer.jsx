// import React from 'react'
import fb from '../Images/fb.png';
import twi from '../Images/twi5.png';
import ins from '../Images/ins1.jpg';
import lin from '../Images/lin5.png';

export default function Footer() {
    return (
        <div id="footer" className="myfooter">
            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">ORIGEM DO RESTAURANTE</h3>
                    <br />
                    <p className="text">Em uma pequena cidade de Minas Gerais, Dona Neusa transformou sua paixão pela culinária em um restaurante, inaugurado em 1995. Começando com poucas mesas, ela conquistou os moradores com pratos como feijão tropeiro e pão de queijo. A fama se espalhou, atraindo turistas. O restaurante cresceu, mas manteve seu charme e autenticidade, tornando-se um ponto de encontro para celebrar a culinária e tradições mineiras.</p>
                    <br />
                    <a href="/"><img src={fb} alt="social media" /></a>
                    <a href="/"><img src={twi} alt="social media" /></a>
                    <a href="/"><img src={ins} alt="social media" /></a>
                    <a href="/"><img src={lin} alt="social media" /></a>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Horário de Funcionamento</h3>
                    <p className="text">Segunda a Sábado: 10h até 22h</p>
                    <p className="text">Domingo: 10h até 16h</p>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Contato</h3>
                    <p className="text">Endereço: Rua Principal, Centro</p>
                    <p className="text">Tel: 03943247810</p>
                    <p className="text">Email: restaurant@gmail.com</p>
                </div>
            </div>

            <div><br /><br />
                <p id="rights">Todos os direitos reservados | Restaurant Prime</p><br />
            </div>

        </div>
    )
}
