"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BsTrash3 } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import Button from "./Button";
import { UserProfile } from "./ProfileForm";

interface Props {
  img?: string;
}

export default function ProfileAvatarChanger({ img }: Props) {
  const {
    register,
    formState: { errors },
    resetField,
  } = useFormContext<UserProfile>();

  const [firstName, lastName] = useWatch({
    name: ["firstName", "lastName"],
  });

  const [selectedImage, setSelectedImage] = useState<string | undefined>(img);

  const inputRef = useRef<HTMLInputElement>(null);

  const { ref, ...rest } = register("image", {
    onChange: handleFileChange,
  });

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("changing");

    const file = e.currentTarget.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  function deleteProfilePicture() {
    resetField("image");
    setSelectedImage(undefined);
  }
  return (
    <section className="">
      <div className="flex justify-start items-center gap-2">
        <div className="w-20 h-20 relative shrink-0">
          {selectedImage ? (
            <Image
              className="w-20 h-20 rounded-full object-center object-cover"
              src={selectedImage}
              fill
              alt="Profile picture"
            />
          ) : (
            <FaCircleUser className="w-20 h-20" />
          )}
        </div>
        <div className="ml-4">
          <h2 className="text-body-dark text-base font-semibold mb-4">
            {(firstName ?? "") + " " + (lastName ?? "")}
          </h2>
          <div className="flex gap-2 ">
            <Button
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              <input
                {...rest}
                ref={(node) => {
                  ref(node);
                  inputRef.current = node;
                  () => {
                    ref(null);
                    inputRef.current = null;
                  };
                }}
                className="opacity-0 w-0"
                type="file"
              />
              Change Avatar
            </Button>
            <Button
              onClick={deleteProfilePicture}
              variant="outline"
              color="red"
            >
              <BsTrash3 />
            </Button>
          </div>
        </div>
      </div>
      {errors.image && (
        <p className="text-sm text-red mt-2 ">{errors.image.message}</p>
      )}
    </section>
  );
}
