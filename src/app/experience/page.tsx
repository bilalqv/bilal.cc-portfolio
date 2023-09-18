import { Metadata } from "next";
import ExperiencePage from "../components/ExperiencePage";

export const metadata: Metadata = {
  title: 'Experience',
}

export default function Experience() {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm max-[950px]:pb-12 ">
      <ExperiencePage />
    </main>
  )
}