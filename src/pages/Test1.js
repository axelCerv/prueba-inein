import React, { useEffect, useState } from 'react'


function Test1() {

    const [isCreando, setIsCreando] = useState(false)
    const [isEditando, setIsEditando] = useState(false)
    const [isdisabled, setIsDisabled] = useState(true)

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [nss, setNss] = useState('')
    const [rfc, setRfc] = useState('')

    let datos = {
        nombre: nombre,
        telefono: telefono,
        nss: nss,
        rfc: rfc
    }
    const [empleados, setEmpleados] = useState([])
    
    let listaEmpleados = []

    const setInputsEmpty = () =>{
        setNombre('')
        setTelefono('')
        setNss('')
        setRfc('')
    }

    const agregarEmpleado = () =>{   

        setIsDisabled(false)
        setInputsEmpty()
        setIsCreando(true)

        if(isCreando){
            if(nombre === '' || telefono === '' || nss === '' || rfc === ''){
                alert('No deje ningun campo vacio')
            }
            else{
                empleados.forEach(item =>{
                    listaEmpleados.push(item)
                })
                listaEmpleados.push(datos)
        
                setEmpleados(listaEmpleados)
                setInputsEmpty()
                setIsCreando(false)
                setIsDisabled(true)
            }
        }
        
    }

    const editarEmpleado = () =>{
        setIsEditando(true)
        setIsDisabled(false)
        if(isEditando){
            empleados.forEach(empleado =>{
                if(empleado.nombre === nombre){
                    empleado.telefono = telefono
                    empleado.nss = nss
                    empleado.rfc = rfc
                }
                listaEmpleados.push(empleado)
            });
            setEmpleados(listaEmpleados)
            setInputsEmpty()
            setIsDisabled(true)
            setIsEditando(false)
        }
        
    }

    const eliminarEmpleado = () =>{

        empleados.forEach(empleado=>{
            listaEmpleados.push(empleado)
        })
        let newList = listaEmpleados.filter((item) => item.nombre !== nombre)
        setEmpleados(newList)
        setInputsEmpty()

    }

    const setInputsValues = (nombre, tel, nss, rfc) =>{
        setNombre(nombre)
        setTelefono(tel)
        setNss(nss)
        setRfc(rfc)
    }

    useEffect(()=>{

    },[])

  return (
    <div className='test1 container'>
        <div className='empleados'>
            <div className='lista-empleados'>
                <div className='head-lista'>
                    <h2>Empleados</h2>
                    <div className='menu-datos'>
                        <p>Nombre</p>
                        <p>Telefono</p>
                        <p>NSS</p>
                        <p>RFC</p>
                    </div>
                </div>
                <div className='lista'>
                    {
                        empleados.map((empleado, idx) =>{
                            return(
                                <div className='item' key={idx} onClick={()=>setInputsValues(empleado.nombre, empleado.telefono, empleado.nss, empleado.rfc)} >
                                    <p> {empleado.nombre} </p>
                                    <p> {empleado.telefono} </p>
                                    <p> {empleado.nss} </p>
                                    <p> {empleado.rfc} </p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            
            
        </div>
        <div className='campos'>
                <div className='inputs'>
                    <div className='input-item'>
                        <label htmlFor="">Nombre:</label>
                        <input 
                            type="text" 
                            onChange={(e)=> setNombre(e.target.value) } 
                            disabled={isdisabled}
                            id='nombre'
                            value={nombre}
                        />
                    </div>
                    <div className='input-item'>
                        <label htmlFor="">Teléfono:</label>
                        <input 
                            type="text" 
                            onChange={(e)=> setTelefono(e.target.value) }
                            disabled={isdisabled}
                            id='telefono'
                            value={telefono}
                        />
                    </div>
                    <div className='input-item'>
                        <label htmlFor="">NSS:</label>
                        <input 
                            type="text" 
                            onChange={(e)=> setNss(e.target.value) }
                            disabled={isdisabled}
                            id='nss'
                            value={nss}
                        />
                    </div>
                    <div className='input-item'>
                        <label htmlFor="">RFC:</label>
                        <input 
                            type="text" 
                            onChange={(e)=> setRfc(e.target.value) }
                            disabled={isdisabled}
                            id='rfc'
                            value={rfc}
                        />
                    </div>
                </div>
                <div className='buttons-content'>
                <div className='buttons'>
                    <button className='btn-empleado btn-crear' onClick={agregarEmpleado}>
                        {!isCreando ? 'Nuevo' : 'Crear'}    
                    </button>
                    <button className='btn-empleado' onClick={editarEmpleado} >{!isEditando ? 'Editar' : 'Confirmar'}</button>
                    <button className='btn-empleado' onClick={eliminarEmpleado} >Eliminar</button>
                </div>
            </div>
            </div>
        
        
            
    </div>
  )
}

export default Test1