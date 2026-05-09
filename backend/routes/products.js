
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const cloudinary = require("../config/cloudinary");
const fs = require("fs");


// ✅ GET PRODUCTS (FILTER + MODEL SEARCH)
router.get("/", async (req, res) => {
  const { category, series, type, color, subType, modelNumber } = req.query;

  try {
    let filter = {};

    if (category) filter.category = category.toLowerCase();
    if (type) filter.type = type.toLowerCase();
    if (series) filter.parentSeries = series.toLowerCase().trim();

    // 🔥 variant filter
    if (color || subType) {
      filter.variants = {
        $elemMatch: {
          ...(color && { color: { $in: [color.toLowerCase()] } }),
          ...(subType && { subType: subType.toLowerCase() }),
        },
      };
    }

    // 🔥 modelNumber search (parent + variant)
    if (modelNumber) {
      filter.$or = [
        { modelNumber: modelNumber },
        { "variants.modelNumber": modelNumber }
      ];
    }

    const data = await Product.find(filter);
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET SINGLE (ID OR MODEL NUMBER)
router.get("/:id", async (req, res) => {
  try {
    const value = req.params.id;

    let product;

    // Mongo ID check
    if (value.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(value);
    } else {
      product = await Product.findOne({
        $or: [
          { modelNumber: value },
          { "variants.modelNumber": value }
        ]
      });
    }

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ POST PRODUCT (FULL SAFE)
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const {
      category,
      type,
      modelNumber,
      description,
      variants,
      parentSeries
    } = req.body;

    if (!variants) {
      return res.status(400).json({ error: "Variants required" });
    }

    let parsedVariants = JSON.parse(variants);

    // ✅ CHECK: each variant must have modelNumber
    for (let v of parsedVariants) {
      if (!v.modelNumber) {
        return res.status(400).json({ error: "Variant modelNumber required" });
      }
    }

    // ✅ DUPLICATE CHECK
    const allModelNumbers = [
      modelNumber,
      ...parsedVariants.map(v => v.modelNumber)
    ];

    const existing = await Product.findOne({
      $or: [
        { modelNumber: { $in: allModelNumbers } },
        { "variants.modelNumber": { $in: allModelNumbers } }
      ]
    });

    if (existing) {
      return res.status(400).json({ error: "Duplicate model number found" });
    }

    // 🔥 upload images
    const uploadedImages = [];

    for (let file of req.files) {
      const result = await cloudinary.uploader.upload(file.path);
      uploadedImages.push(result.secure_url);
      fs.unlinkSync(file.path);
    }

    // 🔥 map images to variants
    parsedVariants = parsedVariants.map((v, i) => ({
      ...v,
      modelNumber: v.modelNumber.trim(),
      image: uploadedImages[i],
    }));

    const product = new Product({
      category,
      type,
      modelNumber: modelNumber.trim(),
      description,
      parentSeries,
      variants: parsedVariants,
    });

    const saved = await product.save();

    res.status(201).json({
      success: true,
      data: saved,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;