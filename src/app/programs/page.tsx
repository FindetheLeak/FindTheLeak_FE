"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProgramPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/mypage?type=company");
  }, [router]);

  return null;
}
