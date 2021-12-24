import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const turnAdmin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(200).json(turnAdmin);
    } catch (err) {
      return response.status(404).json({ error: "Usuário Não encontrado" });
    }
  }
}

export { TurnUserAdminController };
