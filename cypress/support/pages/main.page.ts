export default class mainPage {
    static topCouponsClassPrev = 'swiper-slide-prev'
    static topCouponsClassActive = 'swiper-slide-active'
    static topCouponsClassNext = 'swiper-slide-next'

    static visit = () => cy.visit(Cypress.config().baseUrl)
    static topCoupons = () => cy.get('.top-deal')
    static topCouponsBullets = () => cy.get('.bullet')
    static staffPicks = () => cy.get('.staff-pick')
    static trendingCoupons = () => cy.get('.trending-offer')
}