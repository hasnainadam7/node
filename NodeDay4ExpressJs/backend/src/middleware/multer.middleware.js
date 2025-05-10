import multer from "multer";
import path from "path";
const filePath = path.join(process.cwd(), "public", "temp");
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(_, filePath);
  },
  filename: function (_, file, cb) {

    cb(_, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
