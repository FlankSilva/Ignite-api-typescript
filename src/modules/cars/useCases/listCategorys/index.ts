import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCagoriesUseCase } from './ListCagoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCagoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
