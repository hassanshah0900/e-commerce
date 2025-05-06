"use client";
import Input from "../Input";
import Button from "../Button";
import { FormProvider, useForm } from "react-hook-form";
import ProfileAvatarChanger from "./ProfileAvatarChanger";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema, UserProfile } from "./schema";

export default function ProfileForm() {
  const methods = useForm({
    resolver: yupResolver(profileSchema),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;
  console.log(errors);

  function submitHandler(data: UserProfile): string {
    console.log(data.image);
    console.log("Logged Data: ", data);
    return "Hello";
  }

  return (
    <section className="bg-white rounded-lg p-6 pb-10 text-body-dark shadow-xl">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 mb-5">
            <ProfileAvatarChanger />
          </div>
          <div>
            <Input {...register("firstName")} label="First Name" />
            {errors.firstName && (
              <p className="text-sm text-red">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <Input {...register("lastName")} label="Last Name" />
            {errors.lastName && (
              <p className="text-sm text-red">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("age", { valueAsNumber: true })}
              type="number"
              label="Age"
            />
            {errors.age && (
              <p className="text-sm text-red">{errors.age.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("dateOfBirth", { valueAsDate: true })}
              type="date"
              label="Date of Birth"
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-red">{errors.dateOfBirth.message}</p>
            )}
          </div>
          <div>
            <Input {...register("email")} type="email" label="Email" />
            {errors.email && (
              <p className="text-sm text-red">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input {...register("phone")} label="Phone" />
            {errors.phone && (
              <p className="text-sm text-red">{errors.phone.message}</p>
            )}
          </div>
          <div className="col-span-2">
            <p className="mb-1">Gender</p>
            <div className="flex gap-4 items-end">
              <Input
                {...register("gender")}
                value={"male"}
                defaultChecked
                type="radio"
                label="Male"
              />
              <Input
                {...register("gender")}
                value={"female"}
                type="radio"
                label="Female"
              />
              <Input
                {...register("gender")}
                value={"other"}
                type="radio"
                label="Other"
              />
              <Input
                {...register("gender")}
                value={"unknown"}
                type="radio"
                label="Prefer not to say"
              />
            </div>
            {errors.gender && (
              <p className="text-sm text-red">{errors.gender.message}</p>
            )}
          </div>
          <Button type="submit" className=" " color="green">
            Save
          </Button>
        </form>
      </FormProvider>
    </section>
  );
}
