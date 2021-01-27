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

export const Body = styled.div`
   padding:20px 20px;

   h1 {
      font-size:18px;
      color:#333;
      font-weight:500;
      line-height:25px;
      font-weight:500; 
   }
   div{
      display:flex;
      justify-content: space-between;  
      align-items:center;
      margin-top: 10px;
      padding:10px 0px;
      border-bottom:solid 2px #7159c1;
      border-radius:2px;

      h4{
         font-size: 15px;
         color: #333333ad;
         font-weight: 500;
         line-height: 25px;
      }
      img{
         border-radius: 25px;
         width: 35px;
         height: 35px;
      }
   }
`
   export const  BodyText = styled.div`
         margin-top:10px;
         border-radius:5px;
         border:none !important;
`