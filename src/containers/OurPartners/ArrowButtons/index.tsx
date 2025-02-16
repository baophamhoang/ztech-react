import { COLOR_CODE } from '@constants';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { IconButton, SxProps } from '@mui/material';

interface Props {
  onClick?: () => void;
}

const commonSx: SxProps = {
  boxShadow:
    ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  color: COLOR_CODE.GREY,
  '&:hover': { backgroundColor: 'gray' },
  borderRadius: 2,
};

const CustomPrevArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={{ ...commonSx, left: { xs: 5, md: -40 },}}>
      <ArrowBackIosNew
        sx={{
          fill: COLOR_CODE.GREY,
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
      <ArrowForwardIos
        sx={{
          fill: COLOR_CODE.GREY,
        }}
      />
    </IconButton>
  );
};

export { CustomPrevArrow, CustomNextArrow };
