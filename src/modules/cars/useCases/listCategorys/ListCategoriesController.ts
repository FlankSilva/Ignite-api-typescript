import { Request, Response } from 'express';

import { ListCagoriesUseCase } from './ListCagoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCagoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListCategoriesController };
