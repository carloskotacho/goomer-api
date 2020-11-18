import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      week_opening_time: Yup.string().required(),
      week_closing_time: Yup.string().required(),
      weekend_opening_time: Yup.string().required(),
      weekend_closing_time: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validations fails', messages: err.inner });
  }
};
