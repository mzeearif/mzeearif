import { ST } from 'next/dist/shared/lib/utils';
import Styles from './landingpage.module.scss';

import * as React from 'react';

const Page = () => {
    return(
    <div>
        <div className={Styles.landing}>
            <div className={Styles.toplanding}>
                <div className={Styles.toplandingleft}>
                    <h2>Markedets beste elektroniske pasientjournal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum autem quaerat accusantium libero? Sed autem nostrum ut odio non explicabo, distinctio cumque aliquam quidem earum, laboriosam iure deserunt provident! </p>
                    <button>Hvordan bli kunde</button>
                </div>
                <div className={Styles.landingright}>
                <div className={Styles.landingrightimage}>
        <img src="/path-to-your-image.jpg" alt="landingright" />
      </div>
        </div>
            </div>
            <div className={Styles.category}>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perspiciatis cum ex<br/> dolorum deserunt dolorem eum ratione.</h2>
                <div className={Styles.categoryimage}>
                    <div className={Styles.text}><div className={Styles.image}>image1</div>
                        <h4>Fastleger</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem unde quis! Quos sit incidunt.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                             <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <div className={Styles.text}><div className={Styles.image}>image2</div>
                    <h4>Spesialister</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem unde quis! Quos sit incidunt.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul></div>
                    <div className={Styles.text}><div className={Styles.image}>image3</div>
                    <h4>Legevakt</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem unde quis! Quos sit incidunt.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul></div>
                </div>
            </div>
        </div>
        <div className={Styles.services}>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere perspiciatis cum ex<br/> dolorum deserunt dolorem eum ratione.</h2>
                <div className={Styles.servicesdata}>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 1</h1></div>
                        <h4>Dashbord</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        
                    </div>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 2</h1></div>
                    <h4>Pasientvisning</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        </div>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 3</h1></div>
                    <h4>Lab og rapporter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        </div>
                </div>
                <div className={Styles.servicesdata}>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 4</h1></div>
                        <h4>Dashbord</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        
                    </div>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 5</h1></div>
                    <h4>Pasientvisning</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        </div>
                    <div className={Styles.servicetext}>
                        <div className={Styles.image}><h1>SVG 6</h1></div>
                    <h4>Lab og rapporter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio non, rerum qui libero, aut ut dolorem saepe ea rem .</p>
                        </div>
                </div>
        </div>
        <div className={Styles.blog4}>
                <h2>Tilleggstjenester</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio odit, assumenda ab minus <br/>consequuntur quas totam eaque, eveniet delectus perspiciatis aut consectetur<br/> excepturi similique ratione? Quos fugiat qui dolores!</p>
                <div className={Styles.blogdata}>
                    <div className={Styles.blogtext}><div className={Styles.image}>image1</div>
                        
                    </div>
                    <div className={Styles.blogtext}><div className={Styles.image}>image2</div>
                    </div>
                    <div className={Styles.blogtext}><div className={Styles.image}>image3</div>
                     </div>
                </div>
                <div className={Styles.blogdata}>
                    <div className={Styles.blogtext}><div className={Styles.image}>image1</div>
                        
                    </div>
                    <div className={Styles.blogtext}><div className={Styles.image}>image2</div>
                    </div>
                    <div className={Styles.blogtext}><div className={Styles.image}>image3</div>
                     </div>
                </div>
                <button>Mer om Tilleggstjenester</button>
            </div>
            <div className={Styles.blog5}>
                <div className={Styles.blog5data}>
                    <div className={Styles.blog5image}></div>
                {/* <div className={Styles.blog5text1}>
                </div> */}
                <div className={Styles.blog5text2}>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, asperiores iste ad unde repellendus eos quia error ducimus dolores architecto explicabo nostrum, sint quidem consequuntur ea dignissimos illum. Vitae, ex.</h3>
                    <div className={Styles.blog5text1}>
                        <h4>Hanne Warlo Borgen</h4>
                    <p>Fastlege Stasjsongata legekontor Hokksund<br/>og univeersitslktor ved Uio</p></div>
                    
                </div></div>
            </div>
            <div className={Styles.blog6}>
                <h2>Produktpresentasjoner</h2>
                <div className={Styles.blog6data}>
                    <div className={Styles.blog6text}>
                    <h3>Startpanel</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum itaque fugit tempore adipisci quasi sequi repellat a vero mollitia</p>

                    <button>Se alle vare Produktpresentasjoner her</button>
                    </div>
                    <div className={Styles.blog6video}>
                    <button>
                     Play Video
                    </button>
                    </div>
                </div>
            </div>
            <div className={Styles.blog7}>
                <h2>Nyheter</h2>
                <div className={Styles.blog7content}>
                <div className={Styles.blog7left}>
                    <div className={Styles.blog7left1}></div>
                    <div className={Styles.blog7left2}>
                        <h2>Avtalespesialister</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nisi reiciendis atque quisquam nesciunt corporis ratione totam ipsam provident</p>
                        <button>Les hele saken</button>
                    </div>
                    <div></div>
                </div>
                <div className={Styles.blog7right}> 
                <div className={Styles.blog7right1}>
                <div className={Styles.blog7right1data1}></div>
                <div className={Styles.blog7right1data2}>
                    <h3>Vi er pa Varuka</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur ullam quam culpa vero sed ratione</p>
                    <button>Les hele saken</button>
                </div>
                </div>
                <div className={Styles.blog7righ2}>
                <div className={Styles.blog7right1data1}></div>
                <div className={Styles.blog7right1data2}>
                    <h3>Vi er pa Varuka</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur ullam quam culpa vero sed ratione</p>
                    <button>Les hele saken</button>
                </div>
                </div>
                </div>
                </div>
                <div className={Styles.blog7button}><button>Ale nyheter</button></div>
                

            </div>
    </div>
    )
}
export default Page;