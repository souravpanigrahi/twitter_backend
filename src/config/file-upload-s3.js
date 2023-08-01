const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

// Configure AWS SDK with your credentials and region
AWS.config.update({
  region: "",
  secretAccessKey: "",
  accessKeyId: "",
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "twitterbucketpg",
    acl: "public-read", // or 'private' if you want the files to be private
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

module.exports = upload;
