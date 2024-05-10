import { Button } from ".";
import { ExcusePayload } from "@/types";
import { useCreateOneExcuse, useGetAllExcuses } from "@/hooks/tanstack.hooks";
import { useState } from "react";
import { cn } from "@/utils";

export const CreateExcuseForm = ({
  createExcuseMutation,
}: {
  createExcuseMutation: ReturnType<typeof useCreateOneExcuse>;
}) => {
  const { data: excuses } = useGetAllExcuses();
  const { mutate, isSuccess, isError, error, isPending } = createExcuseMutation;

  const [httpCodeAlreadyExists, setHttpCodeAlreadyExists] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData);

    if (
      excuses?.some(
        (excuse) => excuse.http_code === Number(formObject.http_code),
      )
    ) {
      setHttpCodeAlreadyExists(true);
      return;
    } else {
      const excusePayload = {
        ...formObject,
        http_code: Number(formObject.http_code),
      } as ExcusePayload;

      mutate(excusePayload, {
        onSuccess: () => {
          (event.target as HTMLFormElement).reset();
        },
      });
    }
  };

  if (isSuccess) {
    return (
      <p className="cursor-pointer rounded-lg bg-green-500 p-4 text-center text-2xl font-bold text-white"></p>
    );
  }

  if (isError || error) {
    return (
      <p className="rounded-lg bg-red-500 p-4 text-center text-2xl font-bold text-white">
        Une erreur est survenue : {error.message}
      </p>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="http_code">
          http_code <sup>*</sup>{" "}
          {httpCodeAlreadyExists && (
            <span className="animate-pulse italic text-red-500">
              Ce code existe déjà !
            </span>
          )}
        </label>
        <input
          className="mt-2 w-full rounded-lg border p-2"
          type="number"
          placeholder="http_code"
          id="http_code"
          name="http_code"
          required
          onChange={() => setHttpCodeAlreadyExists(false)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message">
          Message <sup>*</sup>
        </label>
        <input
          className="mt-2 w-full rounded-lg border p-2"
          type="text"
          placeholder="contenu du message"
          id="message"
          name="message"
          required
        />
      </div>

      <div>
        <label htmlFor="tag">Tag</label>
        <select
          className="mt-2 w-full rounded-lg border p-2"
          id="tag"
          name="tag"
        >
          <option value="Edge Cases">Edge Cases</option>
          <option value="Fucking">Fucking</option>
          <option value="Novelty Implementations">
            Novelty Implementations
          </option>
          <option value="Syntax Errors">Syntax Errors</option>
        </select>
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={isPending}
        className={cn(isPending && "cursor-wait")}
      >
        Créer une excuse
      </Button>
    </form>
  );
};
