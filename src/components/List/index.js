import React, { useState,useContext } from 'react';

import { MdAdd } from 'react-icons/md';


import Card from '../Card';
import ModalAddCard from '../ModalAddCard/index';
import ModalGetCard from '../ModalGetCard/index';

import BoardContext from '../Board/context'

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  
  const [isModalAddCardVisible , setIsModalAddCardVisible] = useState(false)
  const [isModalGetCardVisible , setIsModalGetCardVisible] = useState(false)

  const {addCard,updateCard,removeCard} = useContext(BoardContext)

  const [dataGetModal, setDataGetModal] = useState({
    id:'',
    content:'',
    description:'',
    user:'',
    listId:''
  })

  const createdCard = (newCard) => {
   addCard(newCard, data)
  }

  const CardAtualizacao = (data) => {
    updateCard(data)
  }

  const deleteCard = (data) => {
    removeCard(data)
  }

  return (
    <>
    {isModalAddCardVisible ? <ModalAddCard onClose={()=>setIsModalAddCardVisible(false)}  createdCard={createdCard}  /> : null}
    {isModalGetCardVisible ? <ModalGetCard onClose={()=>setIsModalGetCardVisible(false)} data={dataGetModal} CardAtualizacao={CardAtualizacao} deleteCard={deleteCard}  /> : null}
      <Container done={data.done}>
        <header>
          <h2>{data.title}</h2>

          {data.creatable && (
            <button type="button" onClick={()=>setIsModalAddCardVisible(true)} >
              <MdAdd size={24} color="#FFF" />
            </button>
          )}
        </header>

        <ul>
          { data.cards.map((card, index) => (
            <div>      
              <div onClick={async ()=>{
                setDataGetModal({
                    id:index,
                    content:card.content,
                    description:card.description,
                    user:card.user,
                    listId:listIndex,
                    labels:card.labels
                  })
                  setIsModalGetCardVisible(true)
              }}>
                <Card 
                  key={card.id} 
                  listIndex={listIndex}
                  index={index} 
                  data={card}
              />
              </div>
            </div>
           
          )) }
        </ul>
      </Container>
    </>
  );
}