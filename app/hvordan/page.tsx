import * as React from 'react';
import  Styles  from './hvorden.module.scss';

const Page =()=>{
    return(
        <div className={Styles.hvordan}>
             <div className={Styles.hvordanblock}>
      <div className={Styles.left}>
        <img src="/path-to-your-image.jpg" alt="Nyheter" />
      </div>
      <div className={Styles.right}>
        <h1>Hvordan bil kunde</h1>
        <div className={Styles.toppera}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has </p>
        <p>been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
        </div>
      </div>
            </div>
            <div className={Styles.number1}>
                <div className={Styles.one}>
                    <span>1</span>
                <h1>Lag en overordnet <br/>kravspesifikasjon</h1></div>
                <p className={Styles.p1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
          
            </div>
            <div className={Styles.number2}>
            <div className={Styles.image1}>
        <img src="/path-to-your-image.jpg" alt="Nyheter" />
      </div>
      </div>
      <div className={Styles.style2}>
      <span>2</span>
       <div className={Styles.number22}>
      
      <div className={Styles.two}>
                    
                <h1>Lorem Ipsum is simply dummy  <br/>Lorem Ipsum has
        been the industry's<br/>Lorem Ipsum is simply dummy  <br/>Lorem Ipsum has
        been the industry's </h1>

            <button type='button'> Book demonstrasjon</button>
                
            </div>
            </div>
            </div>
            <div className={Styles.number3}>
                <div className={Styles.three1}>
                </div>
                <span>3</span>
                <div className={Styles.three}>
                    
                <h1>Demo mote</h1></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
          
           
            </div>
            <div className={Styles.number2}>
            <div className={Styles.style4}>
        
            </div>
      </div>
      <div className={Styles.style2}>
      <span>4</span>
       <div className={Styles.number22}>
      
      <div className={Styles.two} style={{paddingBottom:40}}>
                    
                <h1>Lorem Ipsum is simply dummy </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
        <br/><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
          
            
                
            </div>
            </div>
            </div>
            <div className={Styles.number5}>
                <div className={Styles.three1}>
                </div>
                <span>5</span>
                <div className={Styles.three}>
                    
                <h1>Demo mote</h1></div>
                <div className={Styles.number5p}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
        </div>
           
            </div>
            <div className={Styles.number6}>
            <div className={Styles.style6}>
            </div>
             </div>
             <div className={Styles.afterfive}>
                <div className={Styles.afterfiveimage}></div>
                <div className={Styles.afterfivetext}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown <br/> printer took a galley of typeand scrambled it to make a type specimen book.  <br/>It has survived not only five centuries, but also  <br/>the leap into electronic .</p>
                </div>
                <button type='button' className={Styles.afterfivebutton}> Kontakt oss</button>
             </div>
           
        </div>
    );
};
export default Page;