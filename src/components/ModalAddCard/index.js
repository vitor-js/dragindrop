import React, { useState,useEffect, useContext } from 'react';

import BoardContext from '../Board/context'

import { Container,Modal,Header,Body,InputTitle, InputText,AreaColor,SelectColor,Color, Button,ErrorContainer} from './styles';
import { MdClose } from 'react-icons/md';

function ModalAddCard({onClose = () =>{}, data}) {

  const {addCard} = useContext(BoardContext)

useEffect(()=>{
  console.log(data)
},[])

  const [selectColor, setSelectColor] = useState([
    true,
    false,
    false,
    false,
    false
  ])

  const [textIsEmpty , setTextIsEmpty] = useState({
    titulo:'',
    description:''
  })

  const [isError, setisError] = useState(false)


  const onSubmit = () => {
    if(textIsEmpty.titulo.length <= 0 || textIsEmpty.description.length <= 0 ) {
      setisError(true)
      return
    }
    const found = selectColor.findIndex((index) => index === true );
    const arrayColor = ['#7159c1','#54e1f7','#ed54f7','#f75481', '#f75454']
    const newCard = {
      titulo:textIsEmpty.titulo,
      description:textIsEmpty.description,
      color:arrayColor[found]
    }
    addCard(newCard)
  }

  const changeColor = (props) => {
    let newChangeColor = [false,
      false,
      false,
      false,
      false
    ]
    newChangeColor[props] = true
    setSelectColor(newChangeColor)
  }

 const handleOutSideClick = (e) => {
    if(e.target.id === 'container') onClose()
  }


  return (
      <Container id='container' onClick = {handleOutSideClick} >
          <Modal>
              <Header>
                <h3 style={{color:'#fff', fontWeight:500}} >
                  Cadastrar uma tarefa
                </h3>
                <MdClose style={{cursor:'pointer'}} size={24} color="#FFF" onClick={()=>onClose()} />
              </Header>

              <Body>
                {isError ? 
                      <ErrorContainer onClick={()=> setisError(false)} >
                        <text>* Nehum campo pode ficar vazio</text>
                      </ErrorContainer> : 
                      null
                    }

                    <label>
                      Título:
                    </label>
                    <InputTitle type="text" name="name" value={textIsEmpty.titulo} onChange={(e)=>{setTextIsEmpty({...textIsEmpty,titulo:e.target.value})}} />
                    
                    <label>
                      Descrição:
                    </label>
                    <InputText rows="10" cols="20" type="text" name="name" value={textIsEmpty.description} onChange={(e)=>{setTextIsEmpty({...textIsEmpty,description:e.target.value})}}/>
                    
                    <label>
                      Change Color:
                    </label>

                     <AreaColor>
                        <SelectColor item={1} select={selectColor[0]} onClick={()=>changeColor(0)} >
                            <Color item={1}/>
                        </SelectColor >

                        <SelectColor select={selectColor[1]} onClick ={()=>changeColor(1)}>
                            <Color  item={2} />
                        </SelectColor>

                        <SelectColor  select={selectColor[2]} onClick ={()=>changeColor(2)}>
                            <Color item={3}/>
                        </SelectColor>

                        <SelectColor select={selectColor[3]} onClick ={()=>changeColor(3)}>
                            <Color item={4}/>
                        </SelectColor>

                        <SelectColor select={selectColor[4]}onClick ={()=>changeColor(4)}>
                            <Color item={5}/>
                        </SelectColor>
                    </AreaColor> 

                    <Button type='submit' onClick={onSubmit} />
    
              </Body>
          </Modal>
      </Container>
  )
}

export default ModalAddCard;