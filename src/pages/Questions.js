import React, { useEffect } from 'react'

function Questions() {


    useEffect(() => {
        const accordionItems = document.querySelectorAll('.questions-item');

        accordionItems.forEach((item)=>{
            const accordionHeader = item.querySelector('.questions-header');
        
            accordionHeader.addEventListener('click',()=>{
                const openItem =document.querySelector('.accordion-open')
        
                toggleItem(item);
                if(openItem && openItem !== item){
                    toggleItem(openItem)
                }
            })
            
        });
        
        const toggleItem = (item)=>{
            const accordionContent = item.querySelector('.question-content');
        
            if(item.classList.contains('accordion-open')){
                accordionContent.removeAttribute('style')
                item.classList.remove('accordion-open')
            }else{
                accordionContent.style.height = accordionContent.scrollHeight + 'px';
                // accordionItems.style.border = 'border: 1px solid var(--verde-coral);';
                item.classList.add('accordion-open');
            }
        
        }
    }, [])
    


  return (
    <div className='inicio-content'>
        <div className='container'>
            <div className='head-inicio'>
                <h1 className='title'>Preguntas</h1>
            </div> 

            <div className='preguntas'>
                <div className="questions-group">
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué es React JS?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                React JS es un framework de javascript creado para desarrollar aplicaciones a través de componentes que podrán ser reutilizados para facilitar el uso de los mismos.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué es JSX?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                JSX es una sintaxis que se utiliza en react para poder escribir código html y css junto con javascript en un mismo archivo.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué son los “componentes”?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                Los componentes son elementos de react que contienen partes de una aplicación los cuales podrán ser reutilizados las veces que sean necesarias dentro de la aplicación llamandolos facilmente.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Para qué se utiliza “setState”?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                El setState es utilizado para volver a renderizar un componente con un nuevo estado y así cargar el componente con nuevos valores.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué hace “render”?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                Dentro de los componentes existe un método llamado Render el cual esta encargado de renderizar en el navegador el codigo HTML que corresponde al componente.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué es un “estado”?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                Un estado en react es una especie de variable que almacena datos y se pueden cambíar por nuevos datos en el momento que se desee.
                            </p>
                        </div>
                    </div>
                    <div className="questions-item">
                        <div className="questions-header">
                            <h3 className="question-item-title">¿Qué son los “props”?</h3>
                        </div>
                        <div className="question-content">
                            <p className="question-text">
                                Los props son un metodó que se utiliza para compartir información en forma de objetos entre un componente padre y un hijo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions