import { Request, Response } from "express";
import { Ticket } from "../models/Ticket";
import { AppDataSource } from "../data-source";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const tickets = await ticketRepository.find({
      relations: ["user"],
      order: { created: "DESC" },
    });
    if (!tickets.length) {
      return res.status(404).json({ message: "No tickets found" });
    }
     res.json({ tickets });
  } catch (error) {
     res.status(500).json({ message: "Internal server error" });
  }
};

export const getTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const ticket = await ticketRepository.findOneBy({ id: Number(id) });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    return res.status(200).json({ data: ticket });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createTicket = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const ticket = ticketRepository.create(req.body);
    await ticketRepository.save(ticket);
    if (!ticket) {
      return res.status(400).json({ message: "Field not entered" });
    }
    if (!description) {
      return res.status(400).json({ message: "Description not entered" });
    }
    res.status(201).json(ticket);
  } catch (error) {
     res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const ticket = await ticketRepository.findOneBy({ id: Number(id) });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    req.body.updated = new Date();
    ticketRepository.merge(ticket, req.body);
    await ticketRepository.save(ticket);
    if (!description) {
      return res.status(400).json({ message: "Description not entered" });
    }
    res.status(200).json(ticket);
  } catch (error) {
     res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const ticketRepository = AppDataSource.getRepository(Ticket);
    const ticket = await ticketRepository.findOneBy({ id: Number(id) });
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    await ticketRepository.remove(ticket);
     res.status(200).json({ message: "Ticket deleted" });
  } catch (error) {
     res.status(500).json({ message: "Internal server error" });
  }
};
