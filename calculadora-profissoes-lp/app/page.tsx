import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=180"
            alt="Logo Calculadora de Profissões"
            width={180}
            height={40}
            className="h-10"
          />
        </div>
        <Button variant="outline" className="rounded-full bg-white text-[#164193] hover:bg-blue-50 border-[#164193]">
          Conheça o crédito estudantil
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[#164193] md:text-5xl lg:text-6xl">
                Descubra as Profissões do Futuro e Escolha Sua Carreira Ideal
              </h1>
              <p className="max-w-[600px] text-lg text-[#164193] md:text-xl">
                Você está preparado para as carreiras mais promissoras dos próximos anos? Nossa Calculadora de
                Profissões do Futuro ajuda você a identificar a área ideal de acordo com seu perfil e interesses,
                conectando você às melhores instituições de ensino e opções de crédito estudantil.
              </p>
              <Button className="rounded-full bg-[#164193] px-8 py-6 text-lg hover:bg-[#0d2b6a]">
                Começar agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Jovem pensando sobre o futuro profissional"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">Como Funciona</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <CardTitle className="text-xl text-[#164193]">Responda o quiz</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Informe seus interesses e habilidades.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <CardTitle className="text-xl text-[#164193]">Descubra profissões</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Veja quais carreiras terão maior demanda no futuro.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#164193]/20 bg-white shadow-sm transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#164193]/10 text-[#164193]">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <CardTitle className="text-xl text-[#164193]">Escolha seu curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Conecte-se com faculdades parceiras da Fundacred.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Card CTA */}
        <section className="py-16 bg-blue-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-[#164193] md:text-4xl">
                  Vamos descobrir quais profissões do futuro combinam com você?
                </h2>
                <p className="text-gray-600 text-lg mx-auto max-w-2xl">
                  Responda rapidamente algumas perguntas e receba recomendações personalizadas!
                </p>
                <div className="pt-2">
                  <Button className="rounded-md bg-[#164193] px-10 py-6 text-lg hover:bg-[#0d2b6a] flex items-center mx-auto">
                    Iniciar Teste <span className="ml-2">✨</span>
                  </Button>
                </div>
                <p className="text-sm text-gray-500 pt-4">Teste rápido • 10 perguntas • Resultado personalizado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemplo de Resultados */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">Veja exemplos de profissões em alta:</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white">
                  <CardTitle className="flex items-center justify-between text-xl">
                    Analista de Dados e IA
                    <ArrowUpRight className="h-5 w-5 text-green-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-600">
                    Profissionais que analisam grandes volumes de dados e desenvolvem soluções de inteligência
                    artificial para empresas.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-[#164193] hover:bg-blue-50 border-[#164193]"
                  >
                    Ver cursos relacionados
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white">
                  <CardTitle className="flex items-center justify-between text-xl">
                    Especialista em Sustentabilidade
                    <ArrowUpRight className="h-5 w-5 text-green-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-600">
                    Profissionais que desenvolvem e implementam estratégias sustentáveis para reduzir o impacto
                    ambiental das empresas.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-[#164193] hover:bg-blue-50 border-[#164193]"
                  >
                    Ver cursos relacionados
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-none bg-white shadow-md transition-all hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#164193] to-[#2a5bc5] pb-3 pt-6 text-white">
                  <CardTitle className="flex items-center justify-between text-xl">
                    Engenheiro de Energias Renováveis
                    <ArrowUpRight className="h-5 w-5 text-green-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4 text-gray-600">
                    Profissionais que projetam, desenvolvem e implementam sistemas de energia renovável, como solar e
                    eólica.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-[#164193] hover:bg-blue-50 border-[#164193]"
                  >
                    Ver cursos relacionados
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="mb-6 text-2xl font-bold text-blue-900 md:text-3xl">
              Quer descobrir as melhores oportunidades para o seu futuro?
            </h2>
            <Button className="rounded-full bg-[#164193] px-10 py-6 text-lg hover:bg-[#0d2b6a]">
              Iniciar teste gratuito
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Image
                src="/placeholder.svg?height=40&width=180"
                alt="Logo Fundacred"
                width={180}
                height={40}
                className="h-10"
              />
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-[#164193]">
                    Crédito Estudantil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#164193]">
                    Instituições Parceiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#164193]">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">Redes Sociais</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-[#164193]">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#164193]">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#164193]">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Fundacred. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

