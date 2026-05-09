const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

// ✅ MULTIPLE IMAGE TEST
router.post("/", upload.array("images", 10), (req, res) => {
  console.log("🔥 MULTIPLE UPLOAD HIT");
  console.log("FILES:", req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      error: "No images uploaded"
    });
  }

  res.json({
    success: true,
    message: "Images uploaded",
    files: req.files
  });
});

module.exports = router;