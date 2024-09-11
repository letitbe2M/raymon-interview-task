"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface IItem {
  title: string;
  href: string;
  id: string;
}

interface Props {
  items: IItem[];
}

const GroupButtons: React.FC<Props> = ({ items }) => {
  const params = useSearchParams();
  const type = params.get("type");
  const router = useRouter();

  useEffect(() => {
    if (!type) {
      router.replace("/?type=about");
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className=" h-full flex flex-col sm:flex-row gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/?type=${item.href}`}
            passHref
            className="w-full"
            scroll={false}
          >
            <button
              className={` w-full justify-center flex ${
                type === item.href ? "text-primary" : ""
              }`}
              tabIndex={0}
              role="button"
              aria-label={`Load ${item.title}`}
            >
              <div className="flex items-center gap-4">
                <span>{item.title}</span>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GroupButtons;
