import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items:center;
   justify-content:center;
   background-color:#0000003d;

   position: fixed;
   width:100%;
   height:100vh;
   margin-top: -60px;
   z-index:5;
`;

export const Modal = styled.div`
   width:575px;
   max-width:70%;
   background-color:#fff;
   border-radius:10px;
   box-shadow: 0px 0px 28px -4px #00000014;
`

export const Header = styled.div`
   height:55px;
   background-color:#7159c1;
   border-radius:10px 10px 0px 0px;
   padding:0px 20px;
   display:flex;
   align-items: center;
   justify-content: space-between;

   h3 {
      font-size:18px;
      color:#FFF;
      font-weight:500;
      line-height:25px;
   }
`

export const BodyContent = styled.div`
   padding:20px 20px;

   h1 {
      font-size:18px;
      color:#333;
      font-weight:500;
      line-height:25px;
      font-weight:500; 
   }
      h4{
         font-size: 15px;
         color: #333333ad;
         font-weight: 500;
         line-height: 25px;
         margin-bottom: 15px;
      }
    
`

export const InputText = styled.textarea`
   border:none;
   background-color:rgba(230,236,245,0.6);
   border-radius:2px;
   transition: ease all .2s;
   padding:10px;
   max-width:100%;
   border-radius:5px;

   &:focus{
        border-bottom:solid 3px #7159c1;
        background-color:rgba(230,236,245,0.9);
   }
`

export const ButtonsContainer = styled.div`
   display:flex;
   flex-direction: row;
   justify-content: left;
   justify-content: flex-end; 
   padding: 0px 20px 20px 20px;
`

export const Button = styled.button`
   padding: 10px 25px;
   margin-right:${props=> props.id === 'save' ? '0px': '10px'};
   border-radius:5px;
   background-color:${props=> props.id === 'save' ? '#7159c1': '#0a090c40'};
   border:none;
   color:#fff;
   transition:ease all .3s ;

   &:hover {
      background-color:${props=> props.id === 'save' ? '#7159c1d1': '#bd4350bd'};
   }

`