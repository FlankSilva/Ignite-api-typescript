import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categotyAlreadyExists = this.categoriesRepository.findByName(name);

    if (categotyAlreadyExists) {
      throw new Error('Category already exist!');
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
