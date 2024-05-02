import { Router } from 'express';
import { createTicket, deleteTicket, getTicket, getTickets, updateTicket } from '../controllers/ticket';

const router = Router();

router.get("/tickets", getTickets);
router.get("/ticket/:id", getTicket);
router.post("/ticket", createTicket);
router.delete("/ticket/:id", deleteTicket);
router.put("/ticket/:id", updateTicket);

export default router;