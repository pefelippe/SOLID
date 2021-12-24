import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const showUser = this.showUserProfileUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(200).json(showUser);
    } catch (err) {
      return response.status(404).json({ error: "mensagem de erro" });
    }
  }
}

export { ShowUserProfileController };
