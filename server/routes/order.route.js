import express from "express"
import authUser from "../middlewares/auth-user.js"
import authSeller from "../middlewares/auth-seller.js"
import { createOrderCOD, createStripeOrder, getAllOrders, getUserOrders } from "../controllers/order.controller.js"
const router = express.Router()

router.post("/cod", authUser, createOrderCOD)
router.get("/user", authUser, getUserOrders)
router.post("/stripe", authUser, createStripeOrder)
router.get("/seller", authSeller, getAllOrders)

export default router
