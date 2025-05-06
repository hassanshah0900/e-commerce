import * as yup from "yup";

const REQUIRED_MESSAGE = "This field is required";
const SUPPORTED_IMG_TYPES = ["image/png", "image/jpeg", "image/webp"];
const SIZE_2MB = 2097152;
export const profileSchema = yup.object({
  image: yup
    .mixed()
    .transform((fileList) => (fileList as FileList).item(0))
    .test({
      message: "Invalid file type",
      name: "Invalid Type",
      test: (file, context) =>
        file ? SUPPORTED_IMG_TYPES.includes((file as File).type) : true,
    })
    .test({
      name: "File Size",
      message: "File size should be less than 5MB",
      test: (file, context) => (file ? (file as File).size < SIZE_2MB : true),
    })
    .notRequired(),
  firstName: yup
    .string()
    .trim()
    .max(100, "First Name can be maximum 100 chars")
    .required(REQUIRED_MESSAGE),
  lastName: yup
    .string()
    .trim()
    .max(100, "Last Name can be maximum 100 chars")
    .required(REQUIRED_MESSAGE),
  age: yup
    .number()
    .transform((value) => (isNaN(value) ? null : value))
    .positive()
    .nullable(),
  email: yup
    .string()
    .trim()
    .email("Email is Invalid")
    .required(REQUIRED_MESSAGE),
  dateOfBirth: yup
    .date()
    .transform((value) => (isNaN(value) ? null : value))
    .nullable(),
  phone: yup.string().trim().optional(),
  gender: yup
    .mixed()
    .oneOf(["male", "female", "other", "unknown"])
    .required(REQUIRED_MESSAGE),
});

export type UserProfile = yup.InferType<typeof profileSchema>;
