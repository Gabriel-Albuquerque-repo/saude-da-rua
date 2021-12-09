import MongoFormRepository from '@repositories/implementations/mongodb/repository/MongoFormRepository';
import CreateFormUseCase from './CreateFormUseCase';
import CreateFormController from './CreateFormController';

const mongoFormRepository = new MongoFormRepository();

const createFormUseCase = new CreateFormUseCase(mongoFormRepository);

const createFormController = new CreateFormController(createFormUseCase);

export { createFormUseCase, createFormController };
