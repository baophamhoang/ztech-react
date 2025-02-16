import { COLOR_CODE } from '@constants';
import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { CustomNextArrow, CustomPrevArrow } from './ArrowButtons';
import { MOCK_PARTNERS } from './mock-partners';
import { useTranslation } from 'react-i18next';

interface OurPartnersProps {}

const OurPartners: React.FC<OurPartnersProps> = ({}) => {
  const partners = MOCK_PARTNERS;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  const { t } = useTranslation();

  return (
    <Box
      id="our-partners-section"
      sx={{ textAlign: 'center', py: 20, backgroundColor: COLOR_CODE.GREY }}
    >
      <Typography variant="h3" fontWeight="bold" mb={3}>
        {t('OUR_PARTNERS')}
      </Typography>
      <Box
        sx={{ maxWidth: 900, margin: '50px auto 20px', position: 'relative' }}
      >
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <img
                src={partner.imageUrl}
                alt={partner.name}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurPartners;
