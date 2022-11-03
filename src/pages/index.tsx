import { GetServerSideProps } from "next";
import Image from "next/image";

import AppPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import avatars from "../assets/users-avatar-example.png";

/* interface HomeProps {
  count: number;
} */

export default function Home() {
  return (
    <div className="h-screen w-full max-w-[1124px] mx-auto flex items-center justify-center gap-28">
      <main className="">
        <Image src={logoImg} alt="" quality={100} />
        <h1 className="mt-16 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="flex items-center mt-10 gap-2">
          <Image src={avatars} alt="" quality={100} />
          <strong className="text-gray-300 text-xl">
            <span className="text-green-600">+12.592 </span>pessoas já estão
            usando
          </strong>
        </div>
        <form action="" className="mt-10 flex gap-2">
          <input
            required
            className="flex-1 px-6 py-5 rounded-[4px] bg-gray-700 text-gray-300 border border-gray-500"
            type="text"
            placeholder="Qual nome do seu bolão?"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-5 rounded-[4px] font-bold uppercase text-sm text-gray-900"
          >
            Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-gray-400">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>
        <div>
          <div></div>
          <div></div>
        </div>
      </main>
      <Image
        src={AppPreviewImg}
        alt="Dois celulares mostrando uma prévia da aplicação NLW Copa"
        quality={100}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
