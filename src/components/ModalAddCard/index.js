import React, { useState,useEffect } from 'react';

import { Container,Modal,Header,Body,InputTitle, InputText,AreaColor,SelectColor,Color, Button} from './styles';
import { MdClose } from 'react-icons/md';

function ModalAddCard({onClose = () =>{}}) {


  const [selectColor, setSelectColor] = useState([
    true,
    false,
    false,
    false,
    false
  ])


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
                <MdClose size={24} color="#FFF" onClick={()=>onClose()} />
              </Header>

              <Body>
      
                    <label>
                      Título:
                    </label>
                    <InputTitle type="text" name="name" />

                    <label>
                      Descrição:
                    </label>
                    <InputText rows="10" cols="20" type="text" name="name"/>

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

                    <Button type='submit' />
    
              </Body>
          </Modal>
      </Container>
  )
}

export default ModalAddCard;