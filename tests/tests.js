import {login} from './api_auth.js';
import * as ApiCrud from '../scripts/api_crud.js';

mocha.setup('bdd');
const assert = chai.assert;

// describe("Sign up API request", function () {
//     describe('on sucessful sign up', function () {
//         it("saves api key to local storage", function () {
//         });
//     }); 
//     describe('on error', function () {

//     }); 
// });

describe("Log in API request", function () {
    beforeEach(function() {
        localStorage.removeItem('auth_key');
    });

    describe('on sucessful login up', function () {
        it("saves api key to local storage", function () {
            debugger
            login('cookie@cookie.com', 'test123').then(
                expect(localStorage.getItem('auth_key')).to.equal("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb29raWVAY29va2llLmNvbSIsImV4cCI6MTU2OTcwMzMyMCwiaWF0IjoxNTY5Njg1MzIwfQ.Fo-s57_RiM16WdzLFHhnhRgoDmmgDtm2sJf6ktWhKaLfKDRJ1jWSrQeD3xfBCtUV7cce8kl2FTik7lXTiWvzXA") 
            );
        });
    });
    // describe('on error', function () {

    // }); 
});

// describe("Fetch Posts API request", function () {
//     it("introduces a passing test", function () {
//         expect(true).to.equal(true);
//     });

//     it("introduces a failing test", function () {
//         expect(false).to.equal(true);
//     });
// });

// describe("Create Post API request", function () {
//     it("introduces a passing test", function () {
//         expect(true).to.equal(true);
//     });

//     it("introduces a failing test", function () {
//         expect(false).to.equal(true);
//     });
// });

// describe("Fetch Comments API request", function () {
//     it("introduces a passing test", function () {
//         expect(true).to.equal(true);
//     });

//     it("introduces a failing test", function () {
//         expect(false).to.equal(true);
//     });
// });

// describe("Delete Comments API request", function () {
//     it("introduces a passing test", function () {
//         expect(true).to.equal(true);
//     });

//     it("introduces a failing test", function () {
//         expect(false).to.equal(true);
//     });
// });

mocha.run();
