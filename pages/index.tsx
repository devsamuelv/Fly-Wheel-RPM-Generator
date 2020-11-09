import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../core/input/Input';
import Card from '../core/card/Card';
import Button from '../core/button/Button';
import IconButton from '../core/button/IconButton';
import React, { useEffect, useState } from 'react';
import { useColorMode, useDisclosure, useToast, Modal, ModalBody, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalFooter } from '@chakra-ui/core';
import { CalulateRPM } from '../core/math/Calulate';

export default function Home() {
  const [ height, SetHeight ] = useState(null);
  const [ length, SetLength ] = useState(null);
  const [ shooterWheel, SetShooterWheel ] = useState(null);
  const [ RPM, SetRPM ] = useState(null);
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const themeClasses = {
      light: "light-mode",
      dark: "dark-mode"
  }
  
  useEffect(() => {
      const darkMode = localStorage.getItem("darkMode");
      if (darkMode === "true") {
        document.body.classList.replace(themeClasses.light, themeClasses.dark);

        toggleColorMode();

        colorMode["dark"];
      } else if (darkMode === "false") {    
          document.body.classList.replace(themeClasses.dark, themeClasses.light);

          colorMode["light"]
      }
  }, []);

  function isDarkMode(): boolean {
      var mode = false;
      if (process.browser) {
          const darkMode = localStorage.getItem("darkMode");

          if (darkMode === "true") {
              colorMode["dark"];
              document.body.classList.replace(themeClasses.light, themeClasses.dark);
              
              mode = true;
          } else if (darkMode === "false") {
              document.body.classList.replace(themeClasses.dark, themeClasses.light);
          } else if (darkMode === null) {
            localStorage.setItem("darkMode", "false");
          }
      }
      return mode;
  }

  const Calulate = () => {
    if (height === null) {
      toast({
        isClosable: true,
        status: "error",
        title: "An Error Has Occured",
        description: "Please Enter a Height",
        position: "top-right"
      })

      return;
    } else if (length === null) {
      toast({
        isClosable: true,
        status: "error",
        title: "An Error Has Occured",
        description: "Please Enter a Length",
        position: "top-right"
      })

      return;
    } else if (shooterWheel === null) {
      toast({
        isClosable: true,
        status: "error",
        title: "An Error Has Occured",
        description: "Please Enter a Shooter Wheel Diameter",
        position: "top-right"
      })

      return;
    } else if (!Number(height) || !Number(length) || !Number(shooterWheel)) {
      toast({
        isClosable: true,
        status: "error",
        title: "An Error Has Occured",
        description: "Letters Are Not Allowed",
        position: "top-right"
      });
      return;
    }

    // const rpm = String(CalulateRPM(height, length, shooterWheel));
    // const parsedLength = rpm.length - (rpm.split(".")[0].length + 3)
    const rpm = String(CalulateRPM(height, length, shooterWheel)); // rpm.split(".")[0].length
    // rpm.replace(".", "")
    const outRpm = rpm //`${rpm.split(".")[0]}${rpm.substr(rpm.split(".")[0].length, rpm.split(".")[0].length + 3)}` // rpm.indexOf(".")

    // console.log(parsedLength)

    SetRPM( CalulateRPM(height, length, shooterWheel) );
    onOpen();
  }

  const SetDarkMode = (e: boolean) => {
      localStorage.setItem("darkMode", String(e));
      
      document.body.classList.replace(isDarkMode() ? themeClasses.dark : themeClasses.light, e ? themeClasses.dark : themeClasses.light);
      toggleColorMode();
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Fly Wheel RPM Generator</title>
        <link rel="icon" href="/pink.ico" />
      </Head>

      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <IconButton label="Enable Dark Mode" OnClick={ e => { SetDarkMode(isDarkMode() ? false : true) } } icon={ isDarkMode() ? "sun" : "moon" } />
      </div>

      <main className={styles.main2}>
        <h1 style={{ fontWeight: 600 }} className={styles.title2}>
          Single Fly Wheel RPM Generator
          <sub className={ styles.sub }>
            <Card padding="15px" alignItems="center">
              <p style={{ float: "left" }}>Shooting Info</p>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <Input OnChange={ e => SetHeight(e.currentTarget.value) } placeholder="Distance Height" marginTop="5px" marginBottom="5px" />
                <p style={{ marginTop: "10px", marginLeft: "10px" }}>m</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <Input OnChange={ e => SetLength(e.currentTarget.value) } placeholder="Distance Length" marginTop="5px" marginBottom="5px" />
                <p style={{ marginTop: "10px", marginLeft: "10px" }}>m</p>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <Input OnChange={ e => SetShooterWheel(e.currentTarget.value) } placeholder="Shooter Wheel Diameter" marginTop="5px" marginBottom="5px" />
                <p style={{ marginTop: "10px", marginLeft: "10px" }}>m</p>
              </div>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Calulated RPM</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  Final RPM is { RPM }
                </ModalBody>

                <ModalFooter>
                  <Button OnClick={ e => onClose() } text="Ok" bg="blue" />
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* CalulateRPM */}
            <Button text="Calculate RPM" bg="blue" OnClick={ e => Calulate() } />
          </sub>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.thepinkteam.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://cdn.discordapp.com/icons/631236707899015169/853f202def0b4e57b60ab67255c614d6.png" alt="Pink Team Logo" className={styles.logo} />
          Created by{' '}
          6323 The Pink Team
        </a>
      </footer>
    </div>
  )
}
