export const Endpoints = {
    allBanners: "http://127.0.0.1:8003/banners/all",
    allBookCategories: "http://localhost:8003/category/all",
    allKnowledges: "http://127.0.0.1:8003/knowledges/all",
    allPromoCategries: "http://localhost:8003/promo_category/all",
    allPromos: "http://localhost:8003/promotions/all",
    userRegister: "http://localhost:8003/auth/signup",
    userLogin: "http://localhost:8003/auth/jwt/login",
    phoneNumberVerification: "http://localhost:8003/auth/verify-sms-code",
    checkAccessToken: "http://localhost:8003/auth/jwt/verify-token",
    jwtRefreshToken: "http://localhost:8003/auth/jwt/refresh",
    createWishlist: "http://localhost:8003/wishlists/create",
    userLogout: "http://localhost:8003/auth/jwt/logout",
    userChangePassword: "http://localhost:8003/auth/user/change-password",
    createEmailToSub: "http://localhost:8003/subs/create",
    changePasswordWithEmail: "http://localhost:8003/auth/user/change-password-with-email"
}