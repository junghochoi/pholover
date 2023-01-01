import { Global } from '@emotion/react'
export const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: "LifeSaver";
                src: url(../assets/fonts/LifeSavers-Regular.ttf);
                font-weight: normal;
                font-style: normal;
            }
            
            @font-face {
                font-family: "LifeSaver";
                src: url(../assets/fonts/LifeSavers-Bold.ttf);
                font-weight: 800;
                font-style: normal;
            }
            
            @font-face {
                font-family: "LifeSaver";
                src: url(../assets/fonts/LifeSavers-ExtraBold.ttf);
                font-weight: 900;
                font-style: normal;
            }
        `}
    />
)
