import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";

interface CallBoxModuleProps {
  phone: string;
  message: string;
}

const CallBoxModule: React.FC<CallBoxModuleProps> = ({ phone, message }) => {
  useEffect(() => {
    // Move styles injection to useEffect to run only on client-side
    const styles = `
      .ant-carousel .slick-slide {
        text-align: center;
        overflow: hidden;
        display: flex !important;
        align-items: center;
        justify-content: center;
      }
      
      .ant-carousel .slick-vertical .slick-slide {
        border: none;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Cleanup function to remove styles when component unmounts
    return () => {
      styleSheet.remove();
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <>
      <a href={`tel:${phone}`} target="_blank">
        <div
          style={{
            width: "80%",
            position: "fixed",
            bottom: 0,
            left: "50%",
            translate: "-50% -50%",
            zIndex: "9999",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }} // Scale from 0 to 1 and back to 0
            transition={{
              duration: 0.8,
              ease: "linear",
              times: [0, 0.5, 1],
              delay: 3,
            }} // Define when each animation should start
            style={{
              alignItems: "center",
              backgroundColor: "red",
              height: "56px",
              width: "56px",
              position: "absolute",
              bottom: "0px",
              borderRadius: "50%",
              translate: "-50% -50%",
              left: "50%",
              zIndex: "1",
            }}
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              ease: "linear",
              times: [0, 0.5, 1],
              delay: 3,
            }}
            style={{
              alignItems: "center",
              backgroundColor: "white",
              height: "36px",
              width: "36px",
              position: "absolute",
              bottom: "0px",
              borderRadius: "50%",
              translate: "-50% calc(-50% - 20px)",
              left: "50%",
              zIndex: "2",
            }}
          ></motion.div>

          <motion.div
            initial={{ width: "56px", visibility: "hidden" }}
            animate={{ width: "230px", visibility: "visible" }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 3.3 }}
            style={{
              alignItems: "center",
              backgroundColor: "rgb(232 232 237/70%)",
              height: "56px",
              position: "absolute",
              bottom: "0px",
              backdropFilter: "blur(7.5px)",
              WebkitBackdropFilter: "blur(7.5px)",
              borderRadius: "32px",
              translate: "-50% -50%",
              left: "50%",
              boxShadow:
                "0 0px 2px 0 rgba(60,64,67,.1), 0 0px 6px 0px rgba(60,64,67,.15)",
            }}
          >
            <motion.div
              initial={{ scale: "30%", opacity: 0 }}
              animate={{ scale: "100%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn", delay: 3.3 }}
              style={{
                lineHeight: "16px",
                textAlign: "center",
                fontSize: "14px",
                padding: "15px 0 16px",
                fontWeight: "600",
                letterSpacing: "-0.01em",
                margin: "0",
                display: "block",
                left: "0",
                bottom: "4px",
                width: "200px",
                whiteSpace: "nowrap",
                position: "absolute",
                originX: 0,
                overflow: "hidden"
              }}
            >
              <Carousel
                autoplay
                autoplaySpeed={3000}
                dots={false}
                vertical={true}
                style={{
                  height: "16px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div style={{ 
                  lineHeight: "16px",
                  textAlign: "center",
                  width: "100%"
                }}>{message}</div>
                <div style={{ 
                  lineHeight: "16px",
                  textAlign: "center",
                  width: "100%"
                }}>Hỗ trợ 24/7</div>
                <div style={{ 
                  lineHeight: "16px",
                  textAlign: "center",
                  width: "100%"
                }}>Liên hệ ngay!</div>
              </Carousel>
            </motion.div>
            <motion.div
              initial={{ scale: "0%" }}
              animate={{ 
                scale: "100%",
                boxShadow: [
                  "0 0 0 0px rgba(255, 0, 0, 0.4)",
                  "0 0 0 10px rgba(255, 0, 0, 0)",
                ]
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeIn", 
                delay: 3.3,
                boxShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "red",
                opacity: "0.8",
                textAlign: "center",
                color: "white",
                fontSize: "28px",
                margin: "10px 10px 10px 0",
                position: "absolute",
                right: "0",
                bottom: "0",
                overflow: "hidden",
              }}
            >
              <motion.svg
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                }}
                animate={{
                  rotate: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </a>
    </>
  );
};

export default CallBoxModule;
