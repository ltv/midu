const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, val) => {
      if (err) return reject(err);
      return resolve(val);
    })
  );

module.exports = {
  promisify
};
