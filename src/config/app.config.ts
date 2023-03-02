export default () => ({
  secret: process.env.JWT_SECRET,
  tokenLifetime: process.env.JWT_LIFETIME,
});
