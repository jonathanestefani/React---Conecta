import { AbstractValidations, i18n, Joi } from '../../../depencies';

export class ValidationRequired extends AbstractValidations {
  protected validation: any = {
    title: Joi.string().required().allow('').min(3).messages({
      'any.required': i18n.__('validation.min_length', { value: "3" }),
      'string.empty': i18n.__('validation.required'),
      'string.min': i18n.__('validation.min_length', { value: "3" }),
    }),
    description: Joi.string().required().allow('').min(3).messages({
      'any.required': i18n.__('validation.min_length', { value: "3" }),
      'string.empty': i18n.__('validation.required'),
      'string.min': i18n.__('validation.min_length', { value: "3" }),
    }),
  };

}