import { a as adminAuth } from "./admin.js";
const handle = async ({ event, resolve }) => {
  const sessionCookie = event.cookies.get("__session");
  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
    event.locals.userID = decodedClaims.uid;
    console.log("found user id", decodedClaims.uid);
  } catch (e) {
    event.locals.userID = null;
    return resolve(event);
  }
  return resolve(event);
};
export {
  handle
};
