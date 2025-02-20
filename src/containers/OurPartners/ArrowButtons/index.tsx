import { COLOR_CODE } from '@constants';
import { IconButton, SxProps } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface Props {
  onClick?: () => void;
}

const commonSx: SxProps = {
  // boxShadow:
  //   ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  color: COLOR_CODE.GREY_2,
  '&:hover': { backgroundColor: 'gray' },
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  p: 0,
  borderRadius: 2,
  zIndex: 50,
};

const CustomPrevArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={{ ...commonSx, left: { xs: 5, md: -40 },}}>
      <ChevronLeftIcon
        sx={{
          fill: COLOR_CODE.GREY_2,
        }}
      />
    </IconButton>
  );
};

const CustomNextArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        ...commonSx,
        right: { xs: 5, md: -40 },
      }}
    >
      <ChevronRightIcon
        sx={{
          fill: COLOR_CODE.GREY_2,
        }}
      />
    </IconButton>
  );
};

export { CustomPrevArrow, CustomNextArrow };
