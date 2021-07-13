import BlinkistTitleLogo from "../TitleAndLogo/BlinkistTitleLogo";
import React from 'react';
import CategeoriesList from '../../organisms/CategeoriesList/CategeoriesList'
import { Button, Box } from "@material-ui/core";
import AddNewBook from '../../organisms/AddNewBook/AddNewBook';
import Label from "../../atoms/Label/Label";

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import Search from "../../organisms/SearchBar/SearchBar";
function Header() {
  const headerOptions = [
    {
      'id': 1,
      'title': 'Explore',
      hasMenu: true,
      showMenu:true,
      menu: CategeoriesList
    },
    {
      'id': 3,
      'title': 'Highlights'
    },
     {
      'id': 3,
      'title': 'Add New Book To Library',
       menu: AddNewBook
     }
  ];
  const title = "Blinkist";

  const [CurrentMenu, setCurrentMenu] = React.useState(null);
   
  function toggleMenu(option){
  if(option.showMenu)
  option.showMenu=false;
  else
  option.showMenu=true;
  }
  function handleClick(option){
    if(option.hasMenu){
    toggleMenu(option);
    setCurrentMenu(option.showMenu &&  <option.menu />);
    }
    if(option.title=='Add New Book To Library'){
      setCurrentMenu(option.menu && 
      <option.menu open="true"/>); 
    }
  };

  
    return (
      <div>
      <Box display="flex"  flexWrap="nowrap"
        p={1}
        m={1}>
      <Box item p={1}><BlinkistTitleLogo label={title} /></Box>
      <Box item p={1} m={1}>
      <Search></Search></Box>
      {headerOptions.map((option, idx) => <Box item p={1} m={1}>
      
        <Button
          key={idx}
          onClick={()=>handleClick(option)}
          style={{
            textTransform: "capitalize",
            fontWeight: "bold"
          }} className="ui__header__nav__item" >
            <Label label={option.title} style={{ fontWeight: 600 }}></Label>
            </Button>
      </Box>)}
      <Box>{CurrentMenu}</Box>
      <Box item p={1} m={1}>
      <Link to="/MyLibrary">
      <Button
          style={{
            textTransform: "capitalize",
            fontWeight: "bold"
          }} className="ui__header__nav__item" >
            <Label label="My Library" style={{ fontWeight: 600 }}></Label>
            </Button>
      </Link>
      </Box>      
    </Box>
   
    </div>
      
    );
  
  
}
export default Header;