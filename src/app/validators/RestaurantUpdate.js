import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string(),
      address: Yup.string(),
      week_opening_time: Yup.string(),
      week_closing_time: Yup.string(),
      weekend_opening_time: Yup.string(),
      weekend_closing_time: Yup.string(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validations fails', messages: err.inner });
  }
};
