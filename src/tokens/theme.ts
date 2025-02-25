import { base } from "./base";

export interface Theme {
    colors: {
        foreground: {
            primary: string;
            primaryFaded: string;
            primaryDisabled: string;
            onPrimary: string;
            onPrimaryFaded: string;
            onPrimaryDisabled: string;
            accent: string;
            accentHover: string;
            accentActive: string;
        },
        background: {
            page: string;
            pageFaded: string;
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string;
            primaryFaded: string;
            primaryFadedHover: string;
            primaryFadedActive: string;
            primaryFadedDisabled: string;
            base: string;
            baseHover: string;
            baseActive: string;
            baseDisabled: string;
            accent: string;
            accentHover: string;
            accentActive: string;
            accentFaded: string;
        },
        border: {
            neutral: string;
            neutralHover: string;
            neutralActive: string;
            neutralDisabled: string;
            primary: string;
            primaryHover: string;
            primaryActive: string;
            primaryDisabled: string; 
            accent: string;
            accentHover: string;
            accentActive: string;
            accentFaded: string;
        }
    },
    typography: {
        headingXS: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        headingS: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        headingM: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        headingL: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        headingXL: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodyL: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodyLBold: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodyM: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodyMBold: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodyS: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
        bodySBold: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: string;
        },
    },
    size: {
        sizeXXS: string;
        sizeXS: string;
        sizeS: string;
        sizeM: string;
        sizeL: string;
        sizeXL: string;
        sizeXXL: string;
    },
    spacing: {
        spacingNone: string;
        spacingXXS: string;
        spacingXS: string;
        spacingS: string;
        spacingM: string;
        spacingL: string;
        spacingXL: string;
        spacingXXL: string;
    },
    borderRadius: {
        borderRadiusNone: string;
        borderRadiusS: string;
        borderRadiusM: string;
        borderRadiusL: string;
        borderRadiusRounded: string;
    },
};

export const lightTheme: Theme = {
    colors: {
        foreground: {
            primary: base.colors.grey1200,
            primaryFaded: base.colors.grey800,
            primaryDisabled: base.colors.grey400,
            onPrimary: base.colors.grey50,
            onPrimaryFaded: base.colors.grey400,
            onPrimaryDisabled: base.colors.grey600,
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
        },
        background: {
            page: base.colors.grey0,
            pageFaded: base.colors.grey50,
            primary: base.colors.grey1200,
            primaryHover: base.colors.grey1100,
            primaryActive: base.colors.grey1000,
            primaryDisabled: base.colors.grey50,
            primaryFaded: base.colors.grey50,
            primaryFadedHover: base.colors.grey100,
            primaryFadedActive: base.colors.grey200,
            primaryFadedDisabled: base.colors.grey50,
            base: base.colors.grey0,
            baseHover: base.colors.grey50,
            baseActive: base.colors.grey100,
            baseDisabled: base.colors.grey0,
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
            accentFaded: base.colors.blue100,
        },
        border: {
            neutral: base.colors.grey200,
            neutralHover: base.colors.grey300,
            neutralActive: base.colors.grey400,
            neutralDisabled: base.colors.grey100,
            primary: base.colors.grey1200,
            primaryHover: base.colors.grey1100,
            primaryActive: base.colors.grey1000,
            primaryDisabled: base.colors.grey100,  
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
            accentFaded: base.colors.blue200,
        },        
    },
    typography: {
        headingXS: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.headingXS,
            lineHeight: base.typography.lineHeight.headingXS,
        },
        headingS: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.headingS,
            lineHeight: base.typography.lineHeight.headingS,
        },
        headingM: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.headingM,
            lineHeight: base.typography.lineHeight.headingM,
        },
        headingL: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.headingL,
            lineHeight: base.typography.lineHeight.headingL,
        },
        headingXL: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.headingXL,
            lineHeight: base.typography.lineHeight.headingXL,
        },
        bodyL: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.regular,
            fontSize: base.typography.fontSize.bodyL,
            lineHeight: base.typography.lineHeight.bodyL,
        },
        bodyLBold: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.bodyL,
            lineHeight: base.typography.lineHeight.bodyL,
        },
        bodyM: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.regular,
            fontSize: base.typography.fontSize.bodyM,
            lineHeight: base.typography.lineHeight.bodyM,
        },
        bodyMBold: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.bodyM,
            lineHeight: base.typography.lineHeight.bodyM,
        },
        bodyS: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.regular,
            fontSize: base.typography.fontSize.bodyS,
            lineHeight: base.typography.lineHeight.bodyS,
        },
        bodySBold: {
            fontFamily: base.typography.fontFamily,
            fontWeight: base.typography.fontWeight.bold,
            fontSize: base.typography.fontSize.bodyS,
            lineHeight: base.typography.lineHeight.bodyS,
        },
    },
    size: {
        sizeXXS: base.size.size150,
        sizeXS: base.size.size200,
        sizeS: base.size.size250,
        sizeM: base.size.size300,
        sizeL: base.size.size400,
        sizeXL: base.size.size500,
        sizeXXL: base.size.size600,
    },
    spacing: {
        spacingNone: base.size.size0,
        spacingXXS: base.size.size100,
        spacingXS: base.size.size150,
        spacingS: base.size.size200,
        spacingM: base.size.size300,
        spacingL: base.size.size400,
        spacingXL: base.size.size600,
        spacingXXL: base.size.size800,
    },
    borderRadius: {
        borderRadiusNone: base.size.size0,
        borderRadiusS: base.size.size50,
        borderRadiusM: base.size.size100,
        borderRadiusL: base.size.size150,
        borderRadiusRounded: base.size.size12800,
    },
};

export const darkTheme: Theme = {
    colors: {
        foreground: {
            primary: base.colors.grey50,
            primaryFaded: base.colors.grey200,
            primaryDisabled: base.colors.grey600,
            onPrimary: base.colors.grey1200,
            onPrimaryFaded: base.colors.grey600,
            onPrimaryDisabled: base.colors.grey400,
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
        },
        background: {
            page: base.colors.grey1200,
            pageFaded: base.colors.grey1100,
            primary: base.colors.grey50,
            primaryHover: base.colors.grey100,
            primaryActive: base.colors.grey200,
            primaryDisabled: base.colors.grey1100,
            primaryFaded: base.colors.grey1100,
            primaryFadedHover: base.colors.grey1000,
            primaryFadedActive: base.colors.grey900,
            primaryFadedDisabled: base.colors.grey1100,
            base: base.colors.grey1200,
            baseHover: base.colors.grey1100,
            baseActive: base.colors.grey1000,
            baseDisabled: base.colors.grey1200,
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
            accentFaded: base.colors.blue200,
        },
        border: {
            neutral: base.colors.grey900,
            neutralHover: base.colors.grey800,
            neutralActive: base.colors.grey700,
            neutralDisabled: base.colors.grey1000,
            primary: base.colors.grey50,
            primaryHover: base.colors.grey100,
            primaryActive: base.colors.grey200,
            primaryDisabled: base.colors.grey1000,
            accent: base.colors.blue700,
            accentHover: base.colors.blue600,
            accentActive: base.colors.blue500,
            accentFaded: base.colors.blue200,
        },      
    },
    typography: lightTheme.typography,
    size: lightTheme.size,
    spacing: lightTheme.spacing,
    borderRadius: lightTheme.borderRadius,
};