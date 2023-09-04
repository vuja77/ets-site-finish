import "./Oskoli.scss";

import Djeca from "../../components/img/Oskoli.png";
import { motion } from "framer-motion";

import Footer from "../Home/components/Footer";
function Oskoli() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
        <section className="Osk">
          
           
            <img className="Oskoli" src={Djeca} alt="Oskoli"></img>
            

            <div class="txt">
                <div className="Back">
                    <h1>O skoli</h1>
                    <p>
                        Sledeći strategiju razvoja stručnog obrazovanja u Crnoj Gori, Srednja elektrotehnička škola "Vaso Aligrudić" iz Podgorice promoviše i koristi najnovije obrazovne programe i tehnologije, sprovodi radionice i obuke kako bi doprinijela kvalitetu metoda nastave i pružila stručne kvalifikacije studentima i kontinuirani razvoj nastavnicima. Osoblje škole čine brojni nagrađivani nastavnici, mentori i savjetnici.<br/><br/><br/>
                        Kroz organizaciju i učešće u mnogim domaćim i međunarodnim takmičenjima, Srednja elektrotehnička škola "Vaso Aligrudić" dokazuje da je veliki broj učenika i nastavnika spreman da se suoči s raznim teškoćama i izazovima na tržištu. Škola je licencirana za obrazovanje odraslih i koristi obrazovne programe (Izgradnja i održavanje elektronskih sigurnosnih sistema, instalacija i održavanje elektrokomunikacionih sistema, Popravka i održavanje elektronskih komercijalnih uređaja itd.) sprovedene novom metodologijom koja se sastoji od modula, rezultata i ključnih kompetencija potrebnih za stručne kvalifikacije, kako bi se zadovoljile potrebe poslodavaca i tržišta.<br/><br/><br/>
                        Iako je ovo prvi put da učestvujemo u projektu Evropske komisije, postigli smo odlične rezultate posvećenim i napornim radom. Učešćem u projektu VET4WB uspjeli smo da zainteresujemo ne samo naše učenike i nastavnike za uključivanje, već i cijelu lokalnu zajednicu. Prepoznati smo od strane vodećeg partnera kao vrijedni i kao neko kome se drugi mogu ugledati.<br/><br/><br/>
                        Upravo smo započeli implementaciju vrednog projekta RCF, koji će našoj školi donijeti nove opreme i učionice-radionice vredne više od 500.000. Velika korist ovog projekta ogleda se u saradnji s vodećim kompanijama u regionu, koje će pružiti našim učenicima praktične časove u stvarnim uslovima. Naši nastavnici će takođe imati priliku za stručno usavršavanje.<br/><br/><br/>
                        Kroz ove projekte smo pokazali da smo spremni za napredak i da naporno radimo kako bismo pre svega omogućili našim učenicima što uspješnije obrazovanje. Srednja elektrotehnička škola "Vaso Aligrudić" ima 123 zaposlena i 1120 učenika.
                    </p>
                </div>
               
            <div className="circle1"></div>
                
            </div>

            <Footer/>

        </section>
        </motion.div>
     );

}

export default Oskoli;