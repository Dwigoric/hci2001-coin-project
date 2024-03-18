import styles from './Horizontal.module.css';
//utils
import settings from '../../util/options';
import settingItemsBuilder from '../../util/builders/settingItems';
import logger from '../../util/logger.js'
//components
import ButtonMain from '../../components/ButtonMain/ButtonMain';
import ButtonSub from '../../components/ButtonSub/ButtonSub';
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx';
//package imports
import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Horizontal() {
    const [selectionState,setSelectionState] = useState(['ONLINE', 'Jobs']);
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
    return (
        <section className={styles.horizontalPage}>
        <section className={styles.settingsBody}>
            <ProfilePanel className="margin-5"/>
            <section className={styles.sidebar}>
                {settings.map(
                    ({ name }, index) =>
                    selectionState[0] === name ? (
                        <ButtonMain
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        style="dropdown"
                        state="active"
                        text={name}
                        callback={() => logger.log({
                            action: 'CHANGE_TAB',
                            message: name
                        })}
                        />
                    ) : (
                        <ButtonMain
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        style="dropdown"
                        state="inactive"
                        text={name}
                        callback={() => logger.log({
                            action: 'CHANGE_TAB',
                            message: name
                        })}
                        />
                    )
                )}
            </section>

                {selectionState[0] && (
              
                    <Slider
                    {...carouselSettings}
                    >
                    {settings
                    .find((setting) => setting.name === selectionState[0])
                    .submenu.map(({ name }, index) => (
                        <div className="submenuLabel" key={index} >
                        <ButtonSub
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        state={selectionState[1] === name ? "active" : "inactive"}
                        text={name}
                        callback={() => logger.log({
                            action: 'CHANGE_SUBMENU',
                            message: name
                        })}
                        />
                        </div>
                    ))}
                    </Slider>
            )}
            
            

            <section className={styles.mainPanel}>
                <div className={styles.settingsThemselves}>
                    {settingItemsBuilder(
                        selectionState[0],
                        selectionState[1],
                        ({ name, data }) => {
                            logger.log({
                                action: 'CHANGE_SETTING',
                                message: `${name}: ${data}`
                            })
                        }
                    )}
                </div>
            </section>
        </section>
        </section>
    );
}

export default Horizontal;