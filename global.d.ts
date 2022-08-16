/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Logs in to AWS Cognito via Amplify Auth API bypassing UI using Cypress Task
         */
        checkIfVisibleTopCouponElementHasClass(couponNumber: number, className: string): Chainable<string>;
    }
}
