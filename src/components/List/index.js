import React, { useState,useContext } from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';
import ModalAddCard from '../ModalAddCard/index';

import BoardContext from '../Board/context'

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  
  const [isModalVisible , setIsModalVisible] = useState(false)

  const {addCard} = useContext(BoardContext)

  const createdCard = (newCard) => {
   addCard(newCard, data)
  }
  
  return (
    <>
    {isModalVisible ? <ModalAddCard onClose={()=>setIsModalVisible(false)}  createdCard={createdCard}  /> : null}
  
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button" onClick={()=>setIsModalVisible(true)} >
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        { data.cards.map((card, index) => (
          <Card 
            key={card.id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        )) }
      </ul>
    </Container>
    </>
  );
}