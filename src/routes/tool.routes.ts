import { Router } from 'express';
import ToolController from '../modules/tool/useCases/ToolController';

const ToolRoutes = Router();
const toolController = new ToolController();

ToolRoutes.get('/tool/find_one/:id', toolController.getToolById);
ToolRoutes.get('/tool/find_all', toolController.getTools);  
ToolRoutes.post('/tool/create', toolController.createTool);
ToolRoutes.patch('/tool/update/', toolController.updateTool);
ToolRoutes.delete('/tool/delete/:id', toolController.deleteTool);

export { ToolRoutes };