import PageTemplate from "../../templates/PageTemplate";
import HeaderBar from "../../organisms/HeaderBar/HeaderBar";
import MyLibraryDescriptionBox from "../../molecules/DescriptionBox/MyLibraryDescriptionBox";
import Footer from "../../organisms/Footer/Footer";
import React from 'react';
import LibraryBooksList from "../../organisms/LibraryBooksList/LibraryBooksList"

function MyLibrary(props) {
  
  return (
    <PageTemplate headerBar={<HeaderBar/>} descriptionBox={<MyLibraryDescriptionBox/>}
    bookCardsList={<LibraryBooksList/>}
    footer={<Footer/>}>
    </PageTemplate>
  );

}

export default MyLibrary;

