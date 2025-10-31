export const authAdminMiddleware = (req, res, next) => {
  const token = "abcd1234";
  let isAdminAuthrized = token === "abcd1234";
  if (isAdminAuthrized) {
    // res.status(200).send("Admin Authorized");
    next();
  } else {
    res.status(403).send("Admin is unauthorized");
  }
};
