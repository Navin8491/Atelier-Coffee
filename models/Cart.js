import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
});

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    guestId: {
      type: String,
      default: null,
    },
    items: [CartItemSchema],
  },
  { timestamps: true }
);

// Either userId or guestId must be present
CartSchema.pre("save", function (next) {
  if (!this.userId && !this.guestId) {
    next(new Error("Cart must have either a userId or a guestId"));
  } else {
    next();
  }
});

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
