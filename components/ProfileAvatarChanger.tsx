"use client";

import React, { useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";

interface Props {
  img?: string;
  name: string;
}

export default function ProfileAvatarChanger({ img, name }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(img);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className="flex justify-start items-center gap-2">
      <div className="w-20 h-20 relative">
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
        <h2 className="text-body-dark text-base font-semibold mb-4">{name}</h2>
        <div className="flex gap-2 ">
          <Button
            onClick={() => {
              ref.current?.click();
            }}
          >
            <input
              onChange={(e) => {
                const file = e.currentTarget.files?.[0];
                if (file) setSelectedImage(URL.createObjectURL(file));
              }}
              ref={ref}
              className="opacity-0 w-0"
              type="file"
            />
            Change Avatar
          </Button>
          <Button
            onClick={() => setSelectedImage(undefined)}
            variant="outline"
            color="red"
          >
            <BsTrash3 />
          </Button>
        </div>
      </div>
    </section>
  );
}
