import { useGetAllExcuses, useCreateOneExcuse } from "@/hooks/tanstack.hooks";
import { useDialog } from "@/hooks";
import { generateRandomExcuse, randomExcuseMessage, cn } from "@/utils";
import { useEffect, useState, useRef } from "react";
import {
  H1,
  GeneratingNewExcuse,
  AwaitingData,
  Box,
  Dialog,
  DualButtons,
  CreateExcuseForm,
} from "@/components";

export default function Home() {
  const { data: excuses, isLoading, isError, error } = useGetAllExcuses();

  const createExcuseMutation = useCreateOneExcuse();

  // excuses
  const [randomExcuse, setRandomExcuse] = useState("Aucune excuse à lister");
  const [generatingNewExcuse, setGeneratingNewExcuse] = useState(false);
  const excusesIsNotEmpty = excuses && excuses.length > 0;
  const excusesIsEmpty = !excusesIsNotEmpty;
  const handleNewRandomExcuse = async () => {
    if (excusesIsNotEmpty) {
      setGeneratingNewExcuse(true);
      const excuse = await generateRandomExcuse(excuses);
      setRandomExcuse(excuse);
      setGeneratingNewExcuse(false);
    }
  };

  // buttons
  const [areButtonsLoaded, setAreButtonsloaded] = useState(false);

  // dialog
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { showDialog, closeDialog } = useDialog(dialogRef);

  useEffect(() => {
    // set first random excuse when excuses data has been received
    if (excusesIsNotEmpty) setRandomExcuse(randomExcuseMessage(excuses));
  }, [excusesIsNotEmpty, excuses]);

  useEffect(() => {
    // on first page load, load buttons after 2 seconds
    const timeout = setTimeout(() => {
      setAreButtonsloaded(true);
    }, 2000);

    // clean up effect
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  return (
    <>
      <H1
        className={cn(
          "animate-fadeIn2s",
          areButtonsLoaded &&
            "-translate-y-[calc(50vh-130px)] transform duration-500",
        )}
      >
        Mon excuse de dev ...
      </H1>

      <Box className="bg-slate-200 text-center">
        <p>
          {generatingNewExcuse ? (
            <GeneratingNewExcuse />
          ) : (
            <span className="text-xl italic">&apos; {randomExcuse} &apos;</span>
          )}
        </p>
      </Box>

      {areButtonsLoaded && (
        <DualButtons
          leftButtonProps={{
            onClick: handleNewRandomExcuse,
            disabled: generatingNewExcuse || excusesIsEmpty,
            className: cn(
              generatingNewExcuse && "cursor-wait opacity-80",
              excusesIsEmpty && "cursor-not-allowed opacity-80",
            ),
            children: excusesIsEmpty
              ? "Liste d'excuses vide"
              : "Générer une excuse",
          }}
          rightButtonProps={{
            onClick: showDialog,
            disabled: generatingNewExcuse,
            className: cn(generatingNewExcuse && "cursor-wait opacity-80"),
            children: "Créer une excuse",
          }}
          className="animate-fadeIn2s"
        />
      )}

      <Dialog
        ref={dialogRef}
        closeDialog={closeDialog}
        onClose={createExcuseMutation.reset}
      >
        <CreateExcuseForm createExcuseMutation={createExcuseMutation} />
      </Dialog>
    </>
  );
}
