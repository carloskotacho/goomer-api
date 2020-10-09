import { BAD_REQUEST } from 'http-status-codes';

import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(BAD_REQUEST)
      .json({ error: 'Validations fails', messages: err.inner });
  }
};
