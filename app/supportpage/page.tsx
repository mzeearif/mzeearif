import Image from "next/image";
import doc from "../assets/images/images.jpeg";

import Styles from "./supportpage.module.scss";
import { ST } from "next/dist/shared/lib/utils";
const Page = () => {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.support}>
          <div className={Styles.image}>
            <Image src={doc} alt="SVG" />
          </div>
          <div className={Styles.text}>
            <h1>Support</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              corrupti voluptates perspiciatis, iure magnam enim quasi officia
              impedit quam reiciendis.
            </p>
          </div>
        </div>
        <div className={Styles.blog2}>
          <div className={Styles.blogdata}>
            <h1>Ring oss Pa</h1>
            <h1>+47 24 07 70 44</h1>
          </div>
          <div className={Styles.blogdata}>
            <h1>Send oss en mail pa</h1>
            <h1>salg@webmed.no</h1>
          </div>
          <div className={Styles.blogdata}>
            <h1>Kontaktskjema</h1>
          </div>
        </div>
        <div className={Styles.blog3}>
          <h1>Vart supportteam</h1>
          <div className={Styles.blog3main}>
            <div className={Styles.blog3content}>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
            </div>
            <div className={Styles.blog3content}>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
            </div>
            <div className={Styles.blog3content}>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
              <div className={Styles.blogdata}>
                <div className={Styles.image}>
                  <Image src={doc} alt="SVG" />
                </div>
                <h3>Ring oss Pa</h3>
                <h5>Grafisk designer</h5>
                <p>+47 24 07 70 44</p>
                <p>webmed@email.no</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.contact}>
          <div className={Styles.contactform}>
            <h1>Tremger du hjelp fra WebMeds supportteam?</h1>
            <form className={Styles.form}>
              <div className={Styles.input1}>
                <label>Legekontor</label>
                <div className={Styles.input}>
                  <div>
                    {" "}
                    <input type="text" placeholder="Navn" />
                  </div>

                  <div>
                    {" "}
                    <input type="text" placeholder="Navn" />
                  </div>
                </div>
              </div>

              <div className={Styles.input2}>
                <label>Kontaktperson</label>
                <br />
                <div className={Styles.input}>
                  <div>
                    <input type="text" placeholder="Fornavn" />
                  </div>
                  <div>
                    <input type="text" placeholder="Etternavn" />
                  </div>
                </div>
                <div className={Styles.input}>
                  <div>
                    <input type="text" placeholder="Telefon" />
                  </div>
                  <div>
                    <input type="text" placeholder="E-post" />
                  </div>
                </div>
              </div>

              <div className={Styles.input3}>
                <label>Kommentarer</label>
                <div className={Styles.input}>
                  <textarea placeholder="Ovrige ?Kommentarer" />
                </div>
              </div>
              <div className={Styles.input4}>
                <label>Hvordan horte du om webmed?</label>
                <div className={Styles.input}>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className={Styles.input5}>
                <label>Registrering av info</label>
                <div className={Styles.input}>
                    <div>
                  <input type="checkbox" /></div>
                  <p>
                    Ved a sende inn denne foresporselen,
                    <span>aksepterer jeg disse personvernvikarene.</span>
                  </p>
                </div>
              </div>
              <button type="button">Send foresporsel</button>
            </form>
          </div>
          <div className={Styles.emailform}>
            <h1>Kom i kontakt med oss</h1>
            <h3>Besok oss</h3>
            <p>kom a si hello till oss pa vare kontorer.</p>
            <p>support@wenmed.no</p>
            <h3>Ring oss</h3>
            <p>Mandag till sondag fra kl. 8 til 4</p>
            <p>+47 24 07 70 44</p>
            <h3>Sosiale medier</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
