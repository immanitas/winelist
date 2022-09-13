import * as yup from 'yup';

export default yup.object({
  name: yup.string()
    .typeError("Name must be string.")
    .required("Name is required element."),
  winery: yup.string()
    .typeError("Winery must be string.")
    .required("Winery is required element."),
  location: yup.string()
    .typeError("Location must be string.")
    .required("Location is required element."),
  description: yup.string()
    .typeError("Description must be string."),
  source: yup.string()
    .typeError("Source must be string.")
    .url("Must be a valid URL"),
  type: yup.string()
    .typeError("Type must be string.")
    .required("Type is required element.")
    .oneOf(["red", "green", "rose", "white"]),
  year: yup.number()
    .typeError("Year must be number")
    .min(0, "Minimum is 0")
    .max(new Date().getFullYear(), `Maximum is ${new Date().getFullYear()}`)
    .required(),
  rating: yup.number()
    .typeError("Year must be number")
    .min(0, "Minimum is 0")
    .max(5, `Maximum is 5`)
    .required(),
  size: yup.number()
    .typeError("Year must be number")
    .min(0, "Minimum is 0")
    .required(),
  alcoholPercentage: yup.number()
    .typeError("Year must be number")
    .min(0, "Minimum is 0")
    .max(40, `Maximum is 40`)
    .required()
})