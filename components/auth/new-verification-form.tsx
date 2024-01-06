"use client";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-warpper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { FormSucess } from "@/components/form-sucess";
import { FormError } from "@/components/form-error";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing Token!");
      return;
    }

    newVerification(token)
      .then((res) => {
        setSuccess(res.success);
        setError(res.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirm your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSucess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
