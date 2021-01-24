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
`
export const Body = styled.div`
  padding:10px 20px;
  display:flex;
  align-items: initial;
  flex-direction:column;

  label{
     margin-top:15px;
  }
`
export const InputTitle = styled.input`
   border:none;
   background-color:rgba(230,236,245,0.6);
   margin:10px 0px;
   height:40px;
   border-radius:2px;
   transition: ease all .2s;
   padding:10px;
   border-radius:5px;

   &:focus{
        border-bottom:solid 3px #7159c1;
        background-color:rgba(230,236,245,0.9);
   }
`

export const InputText = styled.textarea`
   border:none;
   background-color:rgba(230,236,245,0.6);
   margin:10px 0px;
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
export const AreaColor = styled.div`
   margin:10px 0px;
   display:flex;
   flex-direction:row;
   /* justify-content:space-between; */
`
export const SelectColor = styled.div`
   height:55px;
   width:60px;
   padding:10px 10px;
   margin-left:${props => props.item === 1 ? '0px' : '20px'};
   background:${props=> props.select === true ? '#d0dcef':'#e6ecf599'};
   border-radius:5px;
   display:flex;
   align-items:center;
   justify-content:center;
   cursor: pointer;
`
export const Color = styled.div`
   height: 30px;
   width: 30px;
   border-radius:5px;
   background:${props => props.item === 1 ? '#7159c1' :
       props.item === 2 ? '#54e1f7' :
       props.item === 3 ? '#ed54f7' : 
       props.item === 4 ? '#f75481' : 
       props.item === 5 ? '#f75454' : null};
`
export const Button = styled.input`
   border:none;
   background-color:#7159c1;  
   margin:20px 0px;
   height:40px;
   border-radius:2px;
   transition: ease all .2s;
   padding:10px;
   color:#fff;

   &:hover{
      background-color:#7159c1d1;
      cursor: pointer;
   }
`
export const ErrorContainer = styled.div`
   display:flex;
   margin: 5px 5px;
   padding:5px 10px;
   height:40px;
   border-radius:5px;
   transition: ease all .3s;
   align-items:center;
   justify-content:flex-start;
   color: #721c24;
   background-color: #f8d7da;
   border-color: #f5c6cb;
   cursor: pointer;
`

