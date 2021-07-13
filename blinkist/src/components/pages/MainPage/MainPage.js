import PageTemplate from "../../templates/PageTemplate";
import HeaderBar from "../../organisms/HeaderBar/HeaderBar";
import DescriptionBox from "../../molecules/DescriptionBox/DescriptionBox";
import Footer from "../../organisms/Footer/Footer";
import BookCardsList from '../../organisms/BookCardList/BookCardsList'
import React from 'react';

const MainPage=() =>(
    <PageTemplate headerBar={<HeaderBar/>} descriptionBox={<DescriptionBox/>}
    bookCardsList={<BookCardsList/>}
    footer={<Footer/>}>
    </PageTemplate>
  );


export default MainPage;

