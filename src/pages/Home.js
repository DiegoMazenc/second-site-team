import banniere from '../img/banniere.jpg';
import presentation from '../img/presentation.jpg';
import brassage from '../img/brassage.jpg';
import pression from '../img/pression.jpg';
import degustation from '../img/degustation.jpg';
import picto from '../img/picto.png';
import '../styles/Home.css'

const Home = () => {
    return (
        <div>

            <div className='topbanniere'>
                <img src={banniere} alt="banniere" className='imgbanniere' />
                <div className='titre'>
                    <h1 >LE BARIL</h1>
                    <p>La brasserie <br /> qui fait des bières <br /> qui déchirent (la gueule) </p>
                </div>
            </div>

            <div className='allpresentation'>
                <div className='presentation'>
                    
                    <h4>Le Baril ? Mais Keske C ?</h4>
                    <p>
                        Nous vous invitons à découvrir l'univers de "Le Baril". Que vous soyez novice en matière de bière artisanale ou un passionné aguerri, notre équipe chaleureuse se fera un plaisir de vous accueillir et de partager notre amour pour la bière. Plongez dans une expérience gustative authentique et laissez-vous emporter par les délices brassicoles du BARIL.
                    </p>
                </div>
                <img src={presentation} alt="presentation" className='imgpresentation' />
            </div>

            <article >

                <div className='imghistory'></div>
              
                <div className='history'>
                    <div className='decopicto'><hr/><img src={picto} alt="picto" className='picto' /><hr/></div> 
                    <h4>Une technique de brassage ancestrale</h4>
                    <p>Notre bière est brassée selon une ancienne technique ancestrale issue de la culture des moines tibétains, datant d'une ère encore inconnue aujourd'hui. Notre recette fut trouvée dans une vieille bouteille à la dérive au cœur de l'océan indien, alors que notre lointain ancêtre, esclave d'une galère, reçut la bouteille sur la tête durant une tempête des plus violentes. Une fois échappé de sa condition d'esclavage, il put enfin commencer à mettre en place le mélange de cette étrange recette avec les quelques outils à sa disposition fais à partir d'ongles et d'os d'animaux. C'est ainsi que la première bière en baril est née !</p>
                    <hr/>
                </div>
            </article>

            <article>
                <div className='articleprocess'>
                    <h3>La procédure habituelle ?</h3>
                    <div className='process'>
                        <div className='processcards'>
                            <img src={brassage} alt="brassage" className='imgprocess' />
                            <h4>Le brassage</h4><hr/>
                            <p>Nous débutons par le brassage dans des grosse machines qui font du brassage pour brasser la bière dans des brasseurs qui brassent. Une fois brassée, nous nous assurons que le brassage est bien tout brassé afin que la bière brassée soit quand même bonne à la consommation, sinon on brasserait du vent avec notre brasserie de brassage, à ne pas confondre avec la nage en brassard</p>

                            <div className='processbtn'>En savoir plus</div>
                        </div>
                        <div className='processcards'>
                            <img src={pression} alt="pression" className='imgprocess' />
                            <h4>Un coup de pression</h4><hr/>
                            <p>Nous débutons par le brassage dans des grosse machines qui font du brassage pour brasser la bière dans des brasseurs qui brassent. Une fois brassée, nous nous assurons que le brassage est bien tout brassé afin que la bière brassée soit quand même bonne à la consommation, sinon on brasserait du vent avec notre brasserie de brassage, à ne pas confondre avec la nage en brassard</p>

                            <div className='processbtn'>En savoir plus</div>
                        </div>
                        <div className='processcards'>
                            <img src={degustation} alt="degustaton" className='imgprocess' />
                            <h4>Éméchage</h4>
                            <hr/>
                            <p>Nous débutons par le brassage dans des grosse machines qui font du brassage pour brasser la bière dans des brasseurs qui brassent. Une fois brassée, nous nous assurons que le brassage est bien tout brassé afin que la bière brassée soit quand même bonne à la consommation, sinon on brasserait du vent avec notre brasserie de brassage, à ne pas confondre avec la nage en brassard</p>

                            <div className='processbtn'>En savoir plus</div>
                        </div>

                    </div>
                </div>
            </article>




        </div>
    )
}

export default Home;