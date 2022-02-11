module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9258076a4de4c815ecc23be583b32587'),
  },
});
