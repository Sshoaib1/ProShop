import express from "express";
const router = express.Router();
import {
  getMyOrders,
  getOrderById,
  getOrders,
  addOrderItems,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").get(protect, updateOrderToPaid);
router.route("/:id/delivered").get(protect, admin, updateOrderToDelivered);

export default router;
