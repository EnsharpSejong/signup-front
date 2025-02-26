const fontFamily = {
    semiBold: ["Pretendard-SemiBold", "sans-serif"],
    medium: ["Pretendard-Medium", "sans-serif"],
    light: ["Pretendard-Light", "sans-serif"],
    regular: ["Pretendard-Regular", "sans-serif"],
};

const fontWeight = {
    semiBold: 600,
    medium: 500,
    regular: 400,
    light: 300,
};

const fontSize = {
    title: ["36px", { lineHeight: "130%", letterSpacing: "-4%" }],
    body1: ["20px", { lineHeight: "130%", letterSpacing: "-4%" }],
    body2: ["16px", { lineHeight: "130%", letterSpacing: "-4%" }],
    caption1: ["20px", { lineHeight: "130%", letterSpacing: "-4%" }],
    caption2: ["13px", { lineHeight: "130%", letterSpacing: "-4%" }],
};

export { fontFamily, fontSize, fontWeight };
