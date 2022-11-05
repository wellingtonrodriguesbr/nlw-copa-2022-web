import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, CopySimple } from "phosphor-react";

interface DialogSuccessCreatePoolProps {
  poolCode: string;
  openDialog: boolean;
  setOpenDialog: (state: boolean) => void;
}

export function DialogSuccessCreatePool({
  poolCode,
  openDialog,
  setOpenDialog,
}: DialogSuccessCreatePoolProps) {
  const [buttonCopyCodeText, setButtonCopyCodeText] = useState("copiar código");

  function copyPoolCode() {
    navigator.clipboard.writeText(poolCode);
    setButtonCopyCodeText("copiado!");

    setTimeout(() => {
      setButtonCopyCodeText("copiar código");
      setOpenDialog(false);
    }, 1500);
  }

  return (
    <>
      <Dialog.Root open={openDialog}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed w-screen h-screen inset-0 bg-black/50"
            onClick={() => setOpenDialog(false)}
          />
          <Dialog.Content className="max-w-[20rem] md:max-w-[32rem] h-min flex justify-center flex-col rounded-md px-6 md:px-12 py-16 md:py-10 bg-gray-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-2xl text-gray-100 text-center">
              Bolão criado com sucesso!
            </Dialog.Title>
            <Dialog.Description className="mt-6 text-base text-gray-300 text-center">
              Copie o código do seu bolão e compartilhe com seus amigos para
              participarem com você.
            </Dialog.Description>

            <Dialog.Description className="mt-6 text-base text-gray-400 text-center">
              O seu código é:{" "}
              <span className="text-yellow-500 font-bold">{poolCode}</span>
            </Dialog.Description>
            <div className="flex justify-center mb-4 mt-4">
              <Dialog.Close
                onClick={copyPoolCode}
                className="flex gap-2 items-center bg-yellow-500 hover:bg-yellow-400 border-none px-4 py-2 uppercase cursor-pointer font-bold text-gray-900 rounded"
              >
                {buttonCopyCodeText}
                {buttonCopyCodeText === "copiar código" ? (
                  <CopySimple size={20} weight="bold" />
                ) : (
                  <Check size={20} weight="bold" />
                )}
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
