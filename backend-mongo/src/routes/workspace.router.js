import express, { Router } from "express";
import WorkspaceRepository from "../repositories/workspace.repository.js";
import WorkspaceController from "../controller/workspace.controller.js";

// Creamos una ruta de express
const workspaceRouter= Router()

workspaceRouter.get("/all", WorkspaceController.getAll)

export default workspaceRouter