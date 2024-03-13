import styles from './Horizontal.module.css'

import { useEffect, useState } from 'react'
import settings from '../../util/options';

import ButtonMain from '../../components/ButtonMain/ButtonMain';
import ButtonSub from '../../components/ButtonSub/ButtonSub';

function Horizontal() {
     // [currently selected main setting, currently selected subsetting]
     const [selectionState, setSelectionState] = useState([
        'SETTINGS',
        'none',
    ]);
    const [options, setOptions] = useState();

    useEffect(() => {
        let currMain = settings.find(main => main.name == selectionState[0])
        if (!currMain) return

        let currSub = currMain.submenu.find(sub => sub.name == selectionState[1])
        if (!currSub) return

        setOptions(currSub.options);
    }, [selectionState])
    function showSubMenu(){
        
    }
    return (
        <section className={styles.settingsBody}>
            <section className={styles.sidebar}>
                {settings.map(
                    ({ name, submenu }, index) =>
                    selectionState[0] === name ? (
                        <ButtonMain
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        style="dropdown"
                        state="active"
                        text={name}
                        />
                    ) : (
                        <ButtonMain
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        style="dropdown"
                        state="inactive"
                        text={name}
                        />
                    )
                )}
            </section>

                {selectionState[0] && (
                <section className={styles.submenu}>
                    {settings
                    .find((setting) => setting.name === selectionState[0])
                    .submenu.map(({ name }, index) => (
                        <ButtonSub
                        key={index}
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        state={selectionState[1] === name ? "active" : "inactive"}
                        text={name}
                        />
                    ))}
                </section>
            )}
            
            

            <section className={styles.mainPanel}>
                {options != null &&
                    options.map(({ name, type }, index) => (
                        <div className={styles.option} key={index}>
                            <span>{name}</span>
                            <span>{type}</span>
                        </div>
                    ))}
            </section>
        </section>
    );
}

export default Horizontal;