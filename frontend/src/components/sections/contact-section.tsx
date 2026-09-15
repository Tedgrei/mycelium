import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-gradient-contact text-primary-foreground"
    >
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-6 px-5 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase opacity-80">
            Atendimento
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
            Converse com a equipe Mycelium para montar seu catálogo ideal.
          </h2>
        </div>
        <Link
          href="mailto:contato@mycelium.com.br"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Enviar mensagem
        </Link>
      </div>
    </section>
  );
}
