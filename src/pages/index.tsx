import { GetServerSideProps } from "next";
import Image from "next/image";

import AppPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import checkImg from "../assets/icon-check.svg";
import avatars from "../assets/users-avatar-example.png";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";
import { DialogSuccessCreatePool } from "../components/DialogSuccessCreatePool";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home({ poolCount, guessCount, userCount }: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");
  const [poolCode, setPoolCode] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  async function createNewPool(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.post("/pools", {
        title: poolTitle,
      });

      setPoolCode(response.data.code);
      setOpenDialog(true);
      setPoolTitle("");
    } catch (error) {
      console.log(error);
      alert("Falha ao criar o bolão, tente novamente!");
    }
  }

  return (
    <>
      <div className="h-screen w-full max-w-[1124px] mx-auto flex items-center justify-center gap-28">
        <main className="">
          <Image src={logoImg} alt="" quality={100} />
          <h1 className="mt-16 text-white text-5xl font-bold leading-tight">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>
          <div className="flex items-center mt-10 gap-2">
            <Image src={avatars} alt="" quality={100} />
            <strong className="text-gray-300 text-xl">
              <span className="text-green-600">+{userCount} </span>pessoa(s) já
              estão usando
            </strong>
          </div>
          <form onSubmit={createNewPool} className="mt-10 flex gap-2">
            <input
              required
              className="flex-1 px-6 py-5 rounded-[4px] bg-gray-700 text-gray-300 border border-gray-500"
              type="text"
              value={poolTitle}
              onChange={(e) => setPoolTitle(e.target.value)}
              placeholder="Qual nome do seu bolão?"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 transition-colors px-6 py-5 rounded-[4px] font-bold uppercase text-sm text-gray-900"
            >
              Criar meu bolão
            </button>
          </form>
          <p className="mt-4 text-gray-400 text-sm max-w-sm leading-relaxed">
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>
          <div className="mt-10 pt-10 border-t border-gray-500 flex justify-between">
            <div className="flex gap-6">
              <Image src={checkImg} alt="" quality={100} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-100">
                  +{poolCount}
                </span>
                <span className="text-gray-300 text-base">Bolões criados</span>
              </div>
            </div>

            <div className="border-l border-gray-500" />

            <div className="flex gap-6">
              <Image src={checkImg} alt="" quality={100} />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-100">
                  +{guessCount}
                </span>
                <span className="text-gray-300 text-base">
                  Palpites enviados
                </span>
              </div>
            </div>
          </div>
        </main>
        <Image
          src={AppPreviewImg}
          alt="Dois celulares mostrando uma prévia da aplicação NLW Copa"
          quality={100}
        />
      </div>
      <DialogSuccessCreatePool
        poolCode={poolCode}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [poolCountResponse, guessCountResponse, userCountResponse] =
    await Promise.all([
      api.get("/pools/count"),
      api.get("/guesses/count"),
      api.get("/users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    },
  };
};
