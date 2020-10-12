import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      restaurant_id: Yup.number().required(),
      name: Yup.string().required(),
      price: Yup.string().required(),
      category: Yup.string().required(),
      promotion: Yup.boolean().notRequired(),
      description: Yup.string().when('promotion', {
        is: true,
        then: Yup.string().required(),
      }),
      day_week: Yup.array(Yup.string()).when('promotion', {
        is: true,
        then: Yup.array(Yup.string()).required(),
      }),
      promotion_schedules: Yup.array(Yup.string()).when('promotion', {
        is: true,
        then: Yup.array(Yup.string()).required(),
      }),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validations fails', messages: err.inner });
  }
};
