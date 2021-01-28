import React, { useState } from 'react';
import produce from 'immer';

import { loadLists } from '../../services/api';

import BoardContext from './context';


import List from '../List';
import Header from '../Header/index'

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
   setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  function updateCard(data) {
   console.log(data)
    setLists(produce(lists, draft => {
      draft[data.listIndex].cards[data.id] = data
    }))
  }

  function removeCard(data) {
    setLists(produce(lists, draft => {
      draft[data.listIndex].cards.splice(data.id,1)
    }))
  }


  function addCard(card) {
    const newCard = {
      id:Math.random(100000),
      content:card.titulo,
      labels:[`${card.color}`],
      description:card.description,
      user:'data:image/jpeg;base64,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'
    }
    setLists(produce(lists, draft => {
      draft[0].cards.push(newCard)
      console.log(draft[0].cards)
    }))
  }

  

  return (
    <>
    <Header/>
    <BoardContext.Provider value={{ lists, move ,addCard,updateCard,removeCard}}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
    </>
  );
}