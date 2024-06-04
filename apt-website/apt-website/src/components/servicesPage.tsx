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


function ServicesPage() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage);
        }
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            
                <Container maxWidth={false} sx={{backgroundColor:`#DFDFDF`, height: "255vh", pr: 2}}>
                    <Header/>
                    <Box sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "4rem", fontWeight: 200, textTransform: "uppercase", pt: 5,  display: "flex", alignItems: "center", justifyContent: 'center', borderBottom: 5, borderColor: "#001524"}}>
                        {t("services")}
                    </Box>
                    <Box sx={{p: 5, width: "100vw", ml: -3}}>
                        <Grid container spacing={2} sx={{bgcolor: "#6F1F04", pt: 2, pb: 2}}>
                            <Grid item xs={5} sx={{display: "flex", alignItems: "center", justifyContent: 'center',}}>
                                <Box sx={{flexDirection: "column"}}>
                                    <Typography variant="body2" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "3rem", fontWeight: 200, textTransform: "uppercase"}}>{t("main_features")}</Typography>
                                    <Typography variant="body2" sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "2rem", fontWeight: 100, textTransform: "uppercase"}}>{t("top_benefits")}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <SettingsAccessibilityIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("persons")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <KingBedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("bedrooms")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <ShowerOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("bathrooms")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <WorkOutlineOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("work_room")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <CountertopsOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("kitchen")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <WeekendIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("sitting_room")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <BalconyIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("terraces")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <AcUnitIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("air_conditioner")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <WifiIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("wifi")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <ConnectedTvIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("tv")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <PetsOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("animals")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <WaterIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("river")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <LocalLaundryServiceIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("washer")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <LocalDrinkIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("water")}</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <OutdoorGrillOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("bbq")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <DeckOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("outdoor")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <WbSunnyOutlinedIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("sunbeds")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <ThermostatAutoIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("temperature")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <LocalParkingIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("parking")}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{display: 'flex', justifyContent: "flex-start", alignContent: 'center'}}>
                                            <KeyIcon fontSize="large" sx={{color: "white"}}/>
                                            <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, pl: 2}}>{t("check_in")}</Typography>
                                        </Box>
                                    </Grid>
                                    
                                    

                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{bgcolor: "#001524", width: "100vw", ml: -3, p: 4, display: 'flex', justifyContent: 'space-evenly',}}>
                        <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, textTransform: "uppercase"}}>{t("rental_price")}</Typography>
                        <Typography sx={{fontFamily: "Cormorant Garamond", color: "white", fontSize: "1.2rem", fontWeight: 100, textTransform: "uppercase"}}>{t("cleaning_fee")}</Typography>
                    </Box>

                    <Box sx={{pt: 8, pl: 20, width: "100%"}}>
                        <Stack spacing={0} sx={{width: "80%"}}>
                            <Box sx={{pb: 2}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "3rem", fontWeight: 600, textTransform: "uppercase"}}>{t("rules")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderTop: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("checkin_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600, fontStyle: "normal"}}>{t("checkin_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("checkout_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("checkout_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("rent_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("rent_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("quiet_hours_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("quiet_hours_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("pets_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("pets_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("smoking_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("smoking_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("parties_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("parties_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("guests_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("guests_2")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("guests_3")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("deposit_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("deposit_2")}</Typography>
                            </Box>
                            <Box sx={{pt: 1, pb: 1, borderBottom: 1, borderColor: "#15616D"}}>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "#15616D", fontSize: "1.5rem", fontWeight: 500, textTransform: "uppercase"}}>{t("fine_1")}</Typography>
                                <Typography sx={{fontFamily: "Cormorant Garamond", color: "black", fontSize: "1.4rem", fontWeight: 600}}>{t("fine_2")}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    
                </Container>
                <Footer/>
        </React.Fragment>
    );
    
   
}

export default ServicesPage;