import React from 'react';

import { Container,Modal,Header,Body,BodyText} from './styles';
import { MdClose } from 'react-icons/md';

function ModalGetCard({onClose=()=>{}, data}) {

  const handleOutSideClick = (e) => {
    if(e.target.id === 'container') onClose()
  }

  return (
        <Container id='container' onClick = {handleOutSideClick} >
            <Modal>
              <Header>  
                  <h3>Tarefa número #{data.id}</h3>
                  <MdClose style={{cursor:'pointer'}} size={30} color="#FFF" onClick={onClose} />
              </Header>
              <Body>
                    <h1>
                     {data.content}
                    </h1>

                    <div>
                      <h4>Descrição</h4>
                      <img src={data.user} />
                    </div>
                    
                    <BodyText>
                      <text>
                       {data.description}
                      </text>
                    </BodyText>
              </Body>
            </Modal>
        </Container>
  );
}

export default ModalGetCard;