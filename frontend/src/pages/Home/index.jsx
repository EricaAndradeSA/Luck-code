import React from 'react';
import Animation from '../../components/Animation'; 
import CardCourse from '../../components/CardCourse';

import './styles.css';
import yoda from '../../assets/img/yoda.png';
import separator from '../../assets/img/separator.svg';
import courseReactredux from '../../assets/img/react-redux.jpg';
import PHP7 from '../../assets/img/php.jpg';
import IOS from '../../assets/img/flutter.jpg';



const Home =()=>{
    return(
    <>
        <Animation/>
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>FAZER LOGIN</button>
                            <button>INSCREVA-SE</button>
                        </nav>
                    </header>
                    <main>
                        <section>
                           <h1>Se torne o mestre<br/> da programação!</h1>
                           <img src={separator} alt="separator"/>
                           <p>De o proximo passo para o seu futuro,<br/> que a força esteja com você!</p>
                        </section>
                        <section>
                            <img src={yoda} alt="yoda"/>
                        </section>
                        
                    </main>

                </div>

            </div>
            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos Completos</h2>
                    <p>Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.</p>
                    
                    <section className="card-container">
                        <CardCourse image={courseReactredux} description ="Desenvolvimento Front-end <br/> React e Redux">
                            Desenvolvimento Front-end <br/> React e Redux
                        </CardCourse>  
                        <CardCourse image={PHP7} description ="PHP 7 - Trabalhando com PSRs">
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        <CardCourse image={IOS} description ="Desenvolvimento IOS e Android <br/> com Flutter">
                            Desenvolvimento IOS e Android <br/> com Flutter
                        </CardCourse>
                    </section>

                    <button>INSCREVA-SE</button>

                </div>
            </div>    
        <div className="section-3">
            <div className="container">
                <h2>O que oferecemos para você!</h2>
                <section className="categories-container">

                    <div className="category-card">
                        <div className="category-card-image">
                            {/*<img src="" alt=""/>*/}
                            
                        </div>
                        <div className="category-card-content">
                            <h4>Back-end</h4>
                            <p>22 Cursos</p>
                        </div>
                    </div>
                    
                </section>
            </div>

        </div>

           
    </>
);
}

export default Home;
