import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const useStyles = makeStyles({
  root: {
    width: 1500,
  },
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className="App">
      <header className="App-header">
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{width: 'auto', height: 'auto'}}>
      <BottomNavigationAction label="AccountBox" value="accountbox" icon={<AccountBoxIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
     
     
      </BottomNavigation>
      <h1> Hello, my name Achmad Sri Muharyanto </h1><br/>
      <h8> Frond End Developer, Graphic Design & Branding </h8><br/>
      <h6>Become human it porosees and continue to fireworks and reach, Save it now</h6>
      <h5>Follow US</h5> 

      <SocialIcon url="https://goo.gl/yeJUCA" />
      <SocialIcon url="https://instagram.com/achmadsrim" />
      <SocialIcon url="https://github.com/xiyyu/xiyyu.github.io" />
      <SocialIcon url="https://behance.com/achmadsrimuh" />
      <SocialIcon url="https://dribbble.com/achmadsrim" />
      <SocialIcon url="https://id.pinterests.com/achmadsrim" />
      <SocialIcon url="https://whatsapp.com" />
      
      </header>

      <div class="footer-nefely">
				© Achmad - 2020
			</div>
    </div>
  );
}





