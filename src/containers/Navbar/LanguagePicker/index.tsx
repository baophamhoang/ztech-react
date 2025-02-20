import { COLOR_CODE } from '@constants';
import { ArrowDropDown } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';
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
            <ArrowDropDown sx={{ fill: COLOR_CODE.BLACK }} />
          </Button>
          <Menu
            {...bindMenu(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right', // Menu aligns to the left of the parent
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right', // Ensures the menu expands towards the left
            }}
            sx={{
              '& > .MuiPaper-root': {
                borderRadius: '16px',
              },
            }}
          >
            {languages.map((lang, index) => (
              <MenuItem
                key={lang.code}
                sx={{
                  position: 'relative',
                }}
                onClick={(event) => {
                  popupState.close();
                  onLangClick(event, lang.code);
                }}
              >
                <Stack flexDirection="row" alignItems="center">
                  <Stack width={32}>
                    {currentLang === lang.code && <DoneIcon />}
                  </Stack>
                  <img
                    src={getLangImgUrl(lang.code)}
                    alt={lang.code}
                    style={{ marginRight: 6 }}
                  />
                  <Typography fontWeight="bold">{lang.name}</Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      mx: 'auto',
                      width: '80%',
                      borderBottom:
                        index !== languages.length - 1
                          ? `2px solid ${COLOR_CODE.GREY_2}`
                          : '',
                    }}
                  ></Box>
                </Stack>
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default LangPicker;
