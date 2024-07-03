import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "paramount-beta";
const FB_PRIVATE_KEY = '"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDNMvIrnyHLhBY2\nC5yy3A4DJJ2+KJ/fC2c3ucJ3GvYn1/69cCbYrJA3HYr/2EH/zZJZ32K9RkXrLBNC\nyTWxakFn9W2t0aQkCwyVO64nD8UTt7JMQ4afTcHkdC/59uupGPpxEpZ7t3tplumH\n0S1tsl+2Mx+6xngRCFBbqE2gecUzp5ms/8XDBFXqtGD2MaBIDaLzziFY23apCskQ\neE7eLX9oD4QrLd5qQI6aFbK3C0Bot+XQYFxSgkGm1FQfWMeWy21WQsvX2qctQqzu\ngxMjmBvR3kuqXpJiHeK9aclAOWDtU5PhiWd9iOGzv0oVeyUbqFZcSqbmElRDbPQQ\niMDzlS7bAgMBAAECggEAYofdCx8tThkNxUPMKYJK5C135TCCm8pQ9Mwo2aJDopwv\nwO0SaiZqVVzFOtav0lH2vVrrgbE1r5gJY59UPe2knHOYB8fLhlcb4qi2liEXY8Fo\nRwCBqwreWIGF7AQp4peQ4iynv546D1icqE/D/ZGSLd3clYXpb1xLocduBumRzJwI\nhlyEhy89vBdowLWMHlsq9V46orv3cJVOvDGSQOYR+ThiZ3tg/ZLSiMWPDND/8c81\nmm1e1eUz8K88xdzrq4tZMNiLP7eqFx/jhDp6wrsrzNdwJTd3tLvdQv4+Pehjsyd8\nFxqGl3Ya2GwuJS8bjH45NY6cCTN4uUumQy8aFwPsUQKBgQDt47hPitLkx5NhllJf\nDwEPrdwUiSUQsU7biaFpZJV7eHVvCEK8ur+xbm+etpkwtH9A+9nnniVx4ca/QsyL\nKvaAAHzQreQmACqGMSe7uhfmbsV2582PQgarZHKtiBd/p9fNDAVTulJ5LtfG7M7h\nmtOdETlvxg9knnP7XCuGh3ETyQKBgQDc0h0H1IJDg3RCrJ+PKCaBz6lGPqT62Y4q\nemYHJFH5YeuEUYJjxkyUWXCZo+rzAVsiA60DesZOt5ipZLa4gjHWxm/fGJhszLo4\nMkfynizo+ZvQC2b0ducU3U0Z8dIQCPlUhDGM2htbYHnERsldXhzXyPMWLgxfkUhn\nt0owqukXgwKBgQDR2y9+zAKbXAwB7LAht4TCJied3hZakW/1b4Z7CQZtc6h1GJ53\nC2+LwNaq9n5RXwlbdFGYaAS0X+4KT41Nv8rQxJ1XIe/ALilVVAuvKc1ntJRx/q9y\nD1b+34/i0cmZDaHr+wy//gA/czla/RDMKN9BEi7PEbQGmVnLhlXHSbhRMQKBgQCE\ndGhDfR4R/zTqlX80MMJAVV7VKthtO7hCFJ9Eo22kaC8MdJQA4z6mMawQDLnuv555\nnbjXAHsZVpl06luL+1SH3wnVyXwMrxT4hniPuH9509e5iE1eUEA2TLRl3p7BTZC5\nOH48XcvRGOKRcGBy5/PnH7toT4DOhmfnBpOy86HTnwKBgQDNZUXWptU6mXX4OMvF\nToKeocwyBPbMNAAQte+y/puGeqFJwwZAmoW7xvNKjdFY6C61RPCedMOSI7Ix2Nj7\n/P5unUEUtPxfjU8W7G88en1oo4NM1y8T3hrs+jywA0dOY+HzsSfjUsYFvlhtN3qP\nko5SvYMqr0G6+8U5RrsJRNy+uQ==\n-----END PRIVATE KEY-----\n",';
const FB_CLIENT_EMAIL = "firebase-adminsdk-dxsfm@paramount-beta.iam.gserviceaccount.com";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      privateKey: FB_PRIVATE_KEY,
      clientEmail: FB_CLIENT_EMAIL
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminAuth = getAuth();
const adminDB = getFirestore();
export {
  adminAuth as a,
  adminDB as b
};
