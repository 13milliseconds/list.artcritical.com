const env = process.env.NODE_ENV;
console.log('MapboxAccessToken=pk.eyJ1IjoiYXJ0Y3JpdGljYWwiLCJhIjoiY2o5ZWUzdGlrMmIydjJ3bnJpeWxsN2I1YSJ9.HKlVu4oYspR74CeCdVouRg');
console.log('MONGOLAB_URI=mongodb://francois_admin:HuygheB4ch@ds129013.mlab.com:29013/heroku_2p1c0x8t');
if (env === 'production') {
  console.log('BASE_URI=${process.env.BASE_URI}');
} else {
  console.log('BASE_URI=http://localhost:5000');
}