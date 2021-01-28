import React, {useEffect, useState} from 'react';

import { Container,Modal,Header,BodyContent,BodyText,ButtonsContainer,InputText,Button} from './styles';
import { MdClose } from 'react-icons/md';

function ModalGetCard({onClose=()=>{}, data, CardAtualizacao,deleteCard}) {

  const handleOutSideClick = (e) => {
    if(e.target.id === 'container') onClose()
  }

  const [modalData, setModalData] = useState({
    id:data.id,
    description:data.description,
    content:data.content,
    listIndex:data.listId,
    user:data.user,
    labels:[`${data.labels}`],
  })

  useEffect(()=>{
    console.log(data)
  },[])

  const onSubmit = () => {
    CardAtualizacao(modalData)
    onClose()
  }

  return (
        <Container id='container' onClick = {handleOutSideClick} >
            <Modal>
              <Header>  
                  <h3>Tarefa número #{data.id}</h3>
                  <MdClose style={{cursor:'pointer'}} size={30} color="#FFF" onClick={onClose} />
              </Header>
              <BodyContent>
                    <div>
                      <h4>Titulo</h4>
                    </div>
                    <h1>
                    <InputText value={modalData.content} onChange={(e)=>{setModalData({...modalData,content:e.target.value})}} rows="1" cols="100">
                      </InputText>
                    </h1>

                    <div>
                      <h4>Descrição</h4>
                    </div>
                    
                   
                      <InputText value={modalData.description} onChange={(e)=>{setModalData({...modalData,description:e.target.value})}} rows="10" cols="100">
                      </InputText>
              </BodyContent>

              <ButtonsContainer>
                      <Button id={'cancel'} onClick={()=>{
                        deleteCard(modalData)
                        onClose()}}
                        >
                        Excluir Card
                      </Button>
                      <Button  id={'save'} onClick={onSubmit} >
                        Salvar
                      </Button>
              </ButtonsContainer>

            </Modal>
        </Container>
  );
}

export default ModalGetCard;