import { Suspense } from "react";
import ScreenRegister from "@/features/register/components/ScreenRegister";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScreenRegister />
    </Suspense>
  );
}
