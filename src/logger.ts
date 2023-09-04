export function logger(req, res, next) {
  console.log('middleware');
  next();
}
