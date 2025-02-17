import { COLOR_CODE } from '@constants';
import { ArrowDropDown } from '@mui/icons-material';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { LanguageService } from '@services';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LangPickerProps {}

const languages = [
  {
    code: 'vi',
    name: 'Vietnamese',
    flag: '🇻🇳',
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
];

const LangPicker: React.FC<LangPickerProps> = ({}) => {
  const [currentLang, setCurrentLang] = useState(LanguageService.getLanguage());
  const { i18n } = useTranslation();

  const getLangImgUrl = (lang: string) => `/${lang}-flag.png`;

  const onLangClick = (event: React.MouseEvent, lang: string) => {
    event.stopPropagation();
    setCurrentLang(lang);
    LanguageService.setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}>
            <img src={getLangImgUrl(currentLang)} alt="flag" />
            <ArrowDropDown sx={{fill: COLOR_CODE.BLACK}}/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={(event) => {
                  popupState.close();
                  onLangClick(event, lang.code);
                }}
              >
                <img
                  src={getLangImgUrl(lang.code)}
                  alt={lang.code}
                  style={{ marginRight: 6 }}
                />
                <Typography>{lang.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default LangPicker;
