import React, { useState, useEffect, useRef } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import KingBedIcon from '@mui/icons-material/KingBed';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import WeekendIcon from '@mui/icons-material/Weekend';
import BalconyIcon from '@mui/icons-material/Balcony';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WifiIcon from '@mui/icons-material/Wifi';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import WaterIcon from '@mui/icons-material/Water';
import KeyIcon from '@mui/icons-material/Key';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function ServicesPage() {
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage);
        }
    }, []);

    const headerFontSize = isSmDown ? "3rem" : "4rem"
    const featuresXs = isSmDown ? 12 : 5;
    const featureFontSize1 = isSmDown ? "2rem" : "3rem";
    const featureFontSize2 = isSmDown ? "1.5rem" : "2rem";
    const features = isSmDown ? 12 : 7;
    const iconXs = isSmDown ? 6 : 4;
    const iconSize = isSmDown ? "medium" : "large";
    const featuresPadding = isSmDown ? 0 : 5;
    const leftPadding = isSmDown ? 1 : 0;
    const feeSize1 = isSmDown ? "1rem" : "1.2rem";
    const feeSize2 = isSmDown ? "1.5rem" : "2rem";
    const benefitsPadding1 = isSmDown ? 0 : 0;
    const benefitsPadding2 = isSmDown ? 7 : 2;
    const rulesFontSize = isSmDown ? "2.5rem" : "3rem";
    const rulesWeight = isSmDown ? 500 : 600;
    const rulesSize = isSmDown ? "1.25rem" : "1.4rem";
    const rulesWidth = isSmDown ? "90%" : "80%";

    return (
        
            <Container disableGutters maxWidth={false} sx={{minHeight: "auto"}}>
                <Container disableGutters maxWidth={false} sx={{width: "inherit", backgroundColor:`#DFDFDF`, minHeight: "auto", display: "flex", flexDirection: "column"}}>
                    <Header/>
                    <Box sx={{width: "90%", fontFamily: "Cormorant Garamond", color: "black", fontSize: headerFontSize, fontWeight: 400, textTransform: "uppercase", pt: 5,  display: "flex", alignItems: "center", justifyContent: 'center', alignSelf:"center", borderBottom: 5, borderColor: "#001524"}}>
                        {t("services")}
                    </Box>
                    <Box sx={{width: "auto", pt: 10, pb: 10, pl: featuresPadding, pr:featuresPadding}}>
                        <Grid container spacing={2} sx={{width: "inherit", bgcolor: "#001524", p: 5}}>
                            <Grid item xs={featuresXs} sx={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
                                <Box sx={{flexDirection: "column", pb: benefitsPadding2, pt: benefitsPadding1}}>
                                    <Typography variant="body2" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: featureFontSize1, fontWeight: 600, textTransform: "uppercase"}}>{t("main_features")}</Typography>
                                    <Typography variant="body2" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: featureFontSize2, fontWeight: 400, textTransform: "uppercase"}}>{t("top_benefits")}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={features}>
                                <Grid container spacing={2} sx={{pb: 1, pr: 0, pl: leftPadding}}>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <SettingsAccessibilityIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("persons")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <KingBedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("bedrooms")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <ShowerOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("bathrooms")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <WorkOutlineOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("work_room")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <CountertopsOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("kitchen")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <WeekendIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("sitting_room")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <BalconyIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("terraces")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <AcUnitIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("air_conditioner")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <WifiIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("wifi")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <ConnectedTvIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("tv")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <PetsOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("animals")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <WaterIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("river")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <LocalLaundryServiceIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("washer")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <LocalDrinkIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("water")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <DeckOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("outdoor")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <WbSunnyOutlinedIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("sunbeds")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <ThermostatAutoIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("temperature")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <LocalParkingIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("parking")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={iconXs}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center', size: "10px"}}>
                                            <KeyIcon fontSize={iconSize} sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 400, pl: 2}}>{t("check_in")}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{bgcolor: "#001524", minHeight: "auto", width: "auto", p: 5}}>
                        <Grid container spacing={2}>
                            <Grid item xs={isSmDown ? 12 : 6} sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Typography align="center" sx={{alignSelf: "center"}}>
                                <Typography component="span" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: feeSize1, fontWeight: 100, textTransform: "uppercase"}}>
                                    {t("rental_price")}&nbsp;
                                </Typography>
                                <Typography  component="span" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: feeSize2, fontWeight: 600, textTransform: "uppercase", transform: 'translateY(-12px)'}}>
                                    {t("rental_price_num")}&nbsp;
                                </Typography>
                                <Typography component="span" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: feeSize1, fontWeight: 100, textTransform: "uppercase"}}>
                                    {t("rental_price_night")}
                                </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={isSmDown ? 12 : 6} sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <Typography>
                                <Typography component="span" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: feeSize1, fontWeight: 100, textTransform: "uppercase"}}>
                                    {t("cleaning_fee")}&nbsp;
                                </Typography>
                                <Typography  component="span" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: feeSize2, fontWeight: 600, textTransform: "uppercase", transform: 'translateY(-12px)'}}>
                                    {t("cleaning_fee_price")}
                                </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ minHeight: "auto", width: "auto", pt: 8, display: "flex", justifyContent: "center", pb: 10}}>
                        <Stack sx={{width: rulesWidth}}>
                            <Box sx={{pb: 2}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: rulesFontSize, fontWeight: 600, textTransform: "uppercase"}}>{t("rules")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderTop: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("checkin_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight, fontStyle: "normal"}}>{t("checkin_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("checkout_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("checkout_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("rent_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("rent_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("quiet_hours_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("quiet_hours_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("pets_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("pets_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("smoking_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("smoking_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("parties_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("parties_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("guests_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("guests_2")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("guests_3")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("deposit_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("deposit_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("fine_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: rulesSize, fontWeight: rulesWeight}}>{t("fine_2")}</Typography>
                            </Box>
                            
                        </Stack>
                    </Box>
                    
                </Container>
                <Footer/>
            </Container>
    );
    
   
}

export default ServicesPage;