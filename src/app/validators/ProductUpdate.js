import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      restaurant_id: Yup.number(),
      name: Yup.string(),
      price: Yup.string(),
      category: Yup.string(),
      promotion: Yup.boolean(),
      description: Yup.string().when('promotion', {
        is: true,
        then: Yup.string().required(),
      }),
      promotional_price: Yup.string().when('promotion', {
        is: true,
        then: Yup.string().required(),
      }),
      day_week: Yup.array(Yup.string()).when('promotion', {
        is: true,
        then: Yup.array(Yup.string()).required(),
      }),
      promotion_start_time: Yup.string().when('promotion', {
        is: true,
        then: Yup.string().required(),
      }),
      promotion_end_time: Yup.string().when('promotion', {
        is: true,
        then: Yup.string().required(),
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
